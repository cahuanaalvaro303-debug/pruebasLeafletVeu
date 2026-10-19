<script setup>
    const props = defineProps({
        vehiculo: {
            type: Object,
            required: true
        }
    })

    const emit = defineEmits([
        'eliminar',
        'seleccionar'
    ])

    function eliminarVehiculo(){
        emit('eliminar', props.vehiculo.id)
    }

    function seleccionarVehiculo(){
        emit('seleccionar', props.vehiculo)
    }

</script>

<template>
    <div>
        <p>Id: {{ props.vehiculo.id }}</p>
        <p>Placa: {{ props.vehiculo.placa }}</p>
        <p>Modelo: {{ props.vehiculo.modelo }}</p>
        <p>Velocidad: {{ props.vehiculo.velocidad }}</p>
        <p v-if="props.vehiculo.activo">
            Vehiculo activo
        </p>
        <p v-else>
            Vehiculo inactivo
        </p>

        <button @click="eliminarVehiculo">Eliminar</button>
        <br>
        <button @click="seleccionarVehiculo">Seleccionar</button>
    </div>
</template>