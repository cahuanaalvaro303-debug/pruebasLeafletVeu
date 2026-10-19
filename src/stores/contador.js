import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContadorStore = defineStore(
  'contador',
  () => {
    const contador = ref(0)

    return {
      contador
    }
  }
)