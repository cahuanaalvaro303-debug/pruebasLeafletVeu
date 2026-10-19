<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params.id)
</script>

<template>
  <h1>Detalle de motocicleta</h1>
  <p>ID: {{ route.params.id }}</p>
</template>