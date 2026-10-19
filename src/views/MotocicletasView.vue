<script setup>
import { onMounted, ref } from 'vue'
import api from '../services/api'

const motocicletas = ref([])

const loading = ref(false)
const error = ref(null)

const buscar = ref('')
const pagina = ref(1)
const totalPaginas = ref(1)

const headers = [
  { title: 'Placa', key: 'placa' },
  { title: 'Marca', key: 'marca' },
  { title: 'Modelo', key: 'modelo' },
  { title: 'Acciones', key: 'acciones', sortable: false }
]

const cargarMotocicletas = async () => {
  loading.value = true
  error.value = null

  try {
    const respuesta = await api.get('/motocicletas', {
      params: {
        buscar: buscar.value,
        page: pagina.value
      }
    })

    motocicletas.value = respuesta.data.data
    pagina.value = respuesta.data.current_page
    totalPaginas.value = respuesta.data.last_page

  } catch (err) {
    error.value =
      'No se pudieron cargar las motocicletas'

  } finally {
    loading.value = false
  }
}

const eliminarMotocicleta = async (id) => {
  const confirmar = confirm(
    '¿Deseas eliminar esta motocicleta?'
  )

  if (!confirmar) {
    return
  }

  loading.value = true
  error.value = null

  try {
    await api.delete(
      `/motocicletas/${id}`
    )

    await cargarMotocicletas()

  } catch (err) {
    error.value =
      'No se pudo eliminar la motocicleta'

  } finally {
    loading.value = false
  }
}

onMounted(() => {
  cargarMotocicletas()
}) 


</script>

<template>
  <v-container>

    <h1 class="mb-4">
      Motocicletas
    </h1>

    <v-alert
      v-if="error"
      type="error"
      class="mb-4"
    >
      {{ error }}
    </v-alert>

    <v-text-field
      v-model="buscar"
      label="Buscar"
      prepend-inner-icon="mdi-magnify"
      class="mb-4"
    />

    <v-data-table
      :headers="headers"
      :items="motocicletas"
      :loading="loading"
      loading-text="Cargando motocicletas..."
    />

    <template #item.acciones="{ item }">

  <v-btn
    icon="mdi-pencil"
    color="primary"
    :to="{
      name: 'editar-motocicleta',
      params: {
        id: item.id
      }
    }"
  />

  <v-btn
    icon="mdi-delete"
    color="error"
    @click="eliminarMotocicleta(item.id)"
  />

</template>

  </v-container>
</template>