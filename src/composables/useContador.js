import { ref } from 'vue'

export function useContador() {
    const contador = ref(0)

    function incrementar() {
        contador.value++
    }

    function disminuir(){
        contador.value--
    }

    return {
        contador,
        incrementar,
        disminuir
    }
}