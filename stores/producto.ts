import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useFetch } from '#app'
import { useAuthStore } from '~/stores/auth'

interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    usuario: number;
    fotografia: string;
}

interface ApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Producto[];
}

export const useProductoStore = defineStore('producto', () => {
    const productos = ref<Producto[]>([])
    const error = ref<string | null>(null)
    const loading = ref<boolean>(false) // Estado de carga
    const authStore = useAuthStore()

    const iduser = authStore.user?.id
    const token = authStore.token

    async function fetchProducto() {
        // Verifica que el token y el id de usuario existan antes de hacer la solicitud
        if (!token || !iduser) {
            error.value = 'Usuario no autenticado o falta de token.'
            return
        }

        loading.value = true
        error.value = null // Reinicia el error al hacer una nueva solicitud

        try {
            const { data, error: fetchError } = await useFetch<ApiResponse>(
                `https://apis-production-9a03.up.railway.app/api/v1/producto/?usuario=${iduser}`,
                {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                }
            )

            if (fetchError.value) {
                throw new Error('Error al consumir la API: ' + fetchError.value.message)
            }

            productos.value = data.value?.results || []
        } catch (err: any) {
            error.value = err.message || 'Error desconocido al consumir la API'
            console.error(error.value)
        } finally {
            loading.value = false
        }
    }

    return {
        productos,
        error,
        loading,
        fetchProducto,
    }
})
