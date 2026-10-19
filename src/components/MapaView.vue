
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import L from 'leaflet'

const contenedorMapa = ref(null)

let mapa = null
let capaMarcadores = null
const marcadores = new Map()

const vehiculos = [
  {
    id: 1,
    placa: 'ABC-123',
    modelo: 'Honda XR150',
    latitud: -17.9647,
    longitud: -67.1060,
    activo: true,
  },
  {
    id: 2,
    placa: 'XYZ-456',
    modelo: 'Toyota Hilux',
    latitud: -17.9750,
    longitud: -67.1100,
    activo: true,
  }
]

onMounted(() => {
  mapa = L.map(contenedorMapa.value).setView(
    [-17.9647, -67.1060],
    14
  )

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(mapa)

  capaMarcadores = L.layerGroup().addTo(mapa)

  vehiculos.forEach((vehiculo) => {
    const marcador = L.marker([vehiculo.latitud, vehiculo.longitud]).bindPopup(
        `
        <strong> ${vehiculo.placa}</strong><br>
        Modelo: ${vehiculo.modelo}<br>
        Estado: ${vehiculo.activo? 'Activo' : 'Inactivo'}
        `
    ).addTo(capaMarcadores)

    marcadores.set(vehiculo.id, marcador)
  })

  //centrarVehiculo(2)
  ajustarMapaVehiculos()

//actualizarPosicion(2, -17.9700, -67.1120)
})

function actualizarPosicion(id, latitud, longitud) {
    const marcador = marcadores.get(id)

    if(!marcador) {
        return
    }

    marcador.setLatLng([latitud, longitud])
}

function eliminarMarcador(id) {
    const marcador = marcadores.get(id)

    if(!marcador) {
        return
    }

    marcador.remove()
    marcadores.delete(id)
}

function ajustarMapaVehiculos() {
    if(!mapa || marcadores.size === 0) {
        return
    }

    const grupo = L.featureGroup([...marcadores.values()])
    const limites = grupo.getBounds()

    mapa.fitBounds(limites, {
        padding: [30,30],
        maxZoom: 16
    })
}

function centrarVehiculo(id) {
    const marcador = marcadores.get(id)

    if(!mapa || !marcador ) {
        return
    }

    mapa.setView(marcador.getLatLng(), 17)
    marcador.openPopup()
}

function simularMovimiento() {
    actualizarPosicion(2, -17.9700, -67.1120)
    centrarVehiculo(2)
}

function crearMarcador(vehiculo) {
    const marcador = L.marker([
        vehiculo.latitud,
        vehiculo.longitud
    ])
    .bindPopup(`
    <strong>${vehiculo.placa}</strong><br>
    Modelo: ${vehiculo.modelo}<br>
    Estado: ${vehiculo.activo? 'Activo' : 'Inactivo'}
    `)
    .addTo(capaMarcadores)

    marcadores.set(vehiculo.id, marcador)

    return marcador 
}
onBeforeUnmount(() => {
  if (mapa) {
    mapa.remove()
    mapa = null
  }
})

</script>

<template>
  <div ref="contenedorMapa" class="mapa"></div>

  <v-btn
  color="success"
  @click="simularMovimiento">Simular movimiento</v-btn>
</template>

<style scoped>
.mapa {
  width: 100%;
  height: 600px;
  border-radius: 8px;
}
</style>
