<script setup>
    import { ref } from 'vue';

    const contador = ref(0);

    const mostrarVehiculos = true

    const vehiculos = [
    { id: 1, placa: 'ABC-123', modelo: 'Honda XR150', activo: true },
    { id: 2, placa: 'XYZ-456', modelo: 'Yamaha XTZ', activo: false },
    { id: 3, placa: 'DEF-789', modelo: 'Suzuki DR200', activo: true }
    ]
</script>

<template>

    <div v-if ="mostrarVehiculos">
        <div v-for="vehiculo in vehiculos" :key="vehiculo.id">
            {{ vehiculo.modelo }} - {{ vehiculo.placa }}
            <div v-if="vehiculo.activo">
                Activo
            </div>
            <div v-else>
                Inactivo
            </div>
        </div>
    </div>

</template>