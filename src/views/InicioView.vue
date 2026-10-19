<script setup>
  import api from '../services/api';

  const probarAdmin = async () => {
    try {
      const respuesta = await api.get('/admin-test')
      console.log('Respuesta: ', respuesta.data)
    } catch (error) {
      console.error('Error: ', error)
    }
  }


/*import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'
import { cerrarSesion } from '../services/auth'

const router = useRouter()

const { usuario, limpiarUsuario } = useAuth()

const logout = async () => {
  try {
    await cerrarSesion()
  } catch (error) {
    console.error('Error al cerrar sesión:', error)
  } finally {
    limpiarUsuario()

    router.push('/login')
  }
}*/
</script>

<template>
  
  <v-btn @click = "probarAdmin"> Probar acceso administrador </v-btn>

  <!--
  <div>
    <h1>Inicio</h1>

    <p v-if="usuario">
      Bienvenido, {{ usuario.name }}
    </p>

    <p v-if="usuario">
      Rol: {{ usuario.role }}
    </p>

    <button @click="logout">
      Cerrar sesión
    </button>
  </div>   -->
</template>