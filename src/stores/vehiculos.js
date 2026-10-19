import { defineStore } from "pinia";
import { ref, computed } from 'vue';

export const useVehiculosStore = defineStore(
    'vehiculos',
    () => {
        const vehiculos = ref([
        {
            id: 1,
            placa: 'ABC-123',
            modelo: 'Honda XR150',
            activo: true
        },
        {
            id: 2,
            placa: 'DEF-456',
            modelo: 'Toyota Hilux',
            activo: false
        },
        {
            id: 3,
            placa: 'GHI-789',
            modelo: 'Honda XRE300',
            activo: true
        }
    ])

    const vehiculosActivos = computed(() => {
        return vehiculos.value.filter(
            vehiculo => vehiculo.activo
        )
    })

    return {
        vehiculos, vehiculosActivos
    }
    }
)