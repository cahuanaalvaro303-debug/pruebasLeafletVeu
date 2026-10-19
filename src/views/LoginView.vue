<script setup>

import { ref } from 'vue'
import api from '../services/api'

const email = ref('')
const password = ref('')
const error = ref('')
const cargando = ref(false)

const login = async () => {
  error.value = ''
  cargando.value = true

  try {
    const respuesta = await api.post('/login', {
      email: email.value,
      password: password.value
    })

    console.log('Respuesta del login:', respuesta.data)

    const token = respuesta.data.token

    localStorage.setItem('token', token)

    console.log('Token guardado:', localStorage.getItem('token'))

  } catch (err) {
    console.error('Error de login:', err)

    error.value =
      err.response?.data?.message ||
      'No se pudo iniciar sesión'

  } finally {
    cargando.value = false
  }
}

</script>

<template>
  <div>
    <h1>Iniciar sesión</h1>

    <div>
      <label>Email</label>

      <input
        v-model="email"
        type="email"
      >
    </div>

    <div>
      <label>Contraseña</label>

      <input
        v-model="password"
        type="password"
      >
    </div>

    <button
      :disabled="cargando"
      @click="login"
    >
      {{ cargando ? 'Ingresando...' : 'Ingresar' }}
    </button>

    <p v-if="error">
      {{ error }}
    </p>
  </div>
</template>