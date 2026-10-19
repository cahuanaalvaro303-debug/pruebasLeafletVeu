<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '../services/api'

const router = useRouter()

const placa = ref('')
const marca = ref('')
const modelo = ref('')

const loading = ref(false)
const error = ref(null)

const guardarMotocicleta = async () => {
  loading.value = true
  error.value = null

  const datos = {
    placa: placa.value,
    marca: marca.value,
    modelo: modelo.value
  }

  try {
    await api.post(
      '/motocicletas',
      datos
    )

    router.push({
      name: 'motocicletas'
    })

  } catch (err) {
    error.value =
      'No se pudo guardar la motocicleta'

  } finally {
    loading.value = false
  }
}
</script>

<template>
  <v-container>

    <h1 class="mb-4">
      Nueva motocicleta
    </h1>

    <v-alert
      v-if="error"
      type="error"
      class="mb-4"
    >
      {{ error }}
    </v-alert>

    <v-form
      @submit.prevent="guardarMotocicleta"
    >

      <v-text-field
        v-model="placa"
        label="Placa"
      />

      <v-text-field
        v-model="marca"
        label="Marca"
      />

      <v-text-field
        v-model="modelo"
        label="Modelo"
      />

      <v-btn
        type="submit"
        color="primary"
        :loading="loading"
      >
        Guardar
      </v-btn>

    </v-form>

  </v-container>
</template>