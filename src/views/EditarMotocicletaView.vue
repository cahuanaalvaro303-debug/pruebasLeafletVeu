<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../services/api'

const route = useRoute()
const router = useRouter()

const placa = ref('')
const marca = ref('')
const modelo = ref('')

const loading = ref(false)
const error = ref(null)

const cargarMotocicleta = async () => {
  try {
    const respuesta = await api.get(
      `/motocicletas/${route.params.id}`
    )

    placa.value = respuesta.data.placa
    marca.value = respuesta.data.marca
    modelo.value = respuesta.data.modelo

  } catch (err) {
    error.value =
      'No se pudo cargar la motocicleta'
  }
}

const actualizarMotocicleta = async () => {
  loading.value = true
  error.value = null

  const datos = {
    placa: placa.value,
    marca: marca.value,
    modelo: modelo.value
  }

  try {
    await api.put(
      `/motocicletas/${route.params.id}`,
      datos
    )

    router.push({
      name: 'motocicletas'
    })

  } catch (err) {
    error.value =
      'No se pudo actualizar la motocicleta'

  } finally {
    loading.value = false
  }
}

onMounted(() => {
  cargarMotocicleta()
})
</script>