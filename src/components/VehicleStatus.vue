<script setup>
    import { ref } from 'vue'
    const activo = ref(false)

    function cambiarEstado() {
        activo.value = !activo.value
    }
</script>

<template>
    <h2>Estado del vehiculo</h2>
    <p v-if = "activo">
        Vehiculo activo
    </p>

    <p v-else>
        Vehiculo inactivo
    </p>

    <button @click = "cambiarEstado">
        Cambiar estado
    </button>
</template>