<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { onMounted } from 'vue'

const usuarios = ref([])
const loading = ref(false)
const error = ref(null)

const cargarUsuarios = async () => {
  loading.value = true
  error.value = null
  try {
    const respuesta = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )

    usuarios.value = respuesta.data
  } catch(err) {
    error.value = 'No se pudieron cargar los usuarios'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
    cargarUsuarios()
})
</script>

<template>
  <div>
    <h1>Prueba de API</h1>
    <p v-if="loading">
        Cargando usuarios...
    </p>
    <p v-else-if="error">
        {{ error }}
    </p>

    <ul v-else>
      <li
        v-for="usuario in usuarios"
        :key="usuario.id"
      >
        {{ usuario.name }} - {{ usuario.email }}
      </li>
    </ul>
  </div>
</template>