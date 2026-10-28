<script setup>
import { Bar } from 'vue-chartjs'
import { Doughnut } from 'vue-chartjs'
import 'chart.js/auto'

const datosVentas = {
  labels: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio'
  ],

  datasets: [
    {
      label: 'Ventas mensuales',
      data: [120, 180, 150, 240, 200, 300],
      backgroundColor: '#1976D2',
      borderRadius: 5
    }
  ]
}

const opcionesGrafico = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: true,
      position: 'top'
    }
  },

  scales: {
    y: {
      beginAtZero: true
    }
  }
}

const datosCategorias = {
  labels: [
    'Electrónica',
    'Ropa',
    'Hogar',
    'Deportes'
  ],

  datasets: [
    {
      label: 'Ventas por categoría',
      data: [45, 30, 15, 10],

      backgroundColor: [
        '#1976D2',
        '#43A047',
        '#FB8C00',
        '#8E24AA'
      ],

      borderWidth: 2
    }
  ]
}

const opcionesGrafico1 = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: 'bottom'
    }
  }
}
</script>

<template>
  <v-card elevation="2">
    <v-card-title>
      Ventas mensuales
    </v-card-title>

    <v-card-text>
      <div class="contenedor-grafico">
        <Bar
          :data="datosVentas"
          :options="opcionesGrafico"
        />
      </div>

    </v-card-text>
  </v-card>
  <v-card elevation="2">
    <v-card-title>
      Ventas por categoría
    </v-card-title>

    <v-card-text>
      <div class="contenedor-grafico">
        <Doughnut
          :data="datosCategorias"
          :options="opcionesGrafico1"
        />
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.contenedor-grafico {
  position: relative;
  height: 200px;
  width: 50%;
}
</style>