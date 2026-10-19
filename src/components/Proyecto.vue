<script setup>
    import { ref, computed, watch, watchEffect} from 'vue';
    import { reactive } from 'vue';

    const vehiculo = reactive({
        placa: 'ABC-123',
        modelo: "Honda XR150",
        velocidad: 0,
        activo: true
    })

    const nombre = ref('Honda XR150');
    const velocidad = ref(80);
    const activo = ref(true);

    const contador = ref(0)

    function incrementar() {
        contador.value++
    }

    const estado = computed(()=>{
        if (velocidad.value === 0)
            return 'Detenido'
        if (velocidad.value <= 60)
            return 'Velocidad normal'
        return 'Exceso de velocidad'
    })

    const estadoMovimiento = computed(()=>{
        if (vehiculo.velocidad === 0)
            return 'Vehiculo detenido'
        return 'Vehiculo en movimiento'
    })


    const vehiculos = ref([
        {id: 1, placa: 'ABC-123', velocidad: 80, activo: true},
        {id: 2, placa: 'XYZ-456', velocidad: 40, activo: false},
        {id: 3, placa: 'DEF-789', velocidad: 100, activo: true}
    ])

    const vehiculosActivos = computed(()=>{
        return vehiculos.value.filter(vehiculo => vehiculo.activo)
    })
    
    const vehiculosRapidos = computed(()=>{
        return vehiculos.value.filter(vehiculo => vehiculo.velocidad > 60) 
    })

    watch(vehiculos, () => {
        console.log('La lista de vehiculos cambio')
    })

    watch(velocidad, (nuevaVelocidad, antiguaVelocidad) =>{
        console.log('La velocidad cambio de ', antiguaVelocidad, ' a ', nuevaVelocidad)
    })

    watch(velocidad, nuevaVelocidad =>{
        if (nuevaVelocidad > 100)
            console.log('ALERTA: velocidad muy alta')
        else if (nuevaVelocidad > 60)
            console.log('Velocidad alta')
        else 
            console.log('Velocidad normal')
    })

    watchEffect(()=>{
        if (activo.value){
            console.log('Velocidad: ', velocidad.value)
            console.log('Vehiculo activo')
        }
        else {
            console.log('Vehiculo inactivo')
        }
    })

    //vehiculos.value[0].activo = false

    /*vehiculos.value.push({
        id: 3, placa: 'DEF-789', activo: true
    })*/

   function cambiarPlaca(evento){
    console.log('Placa:', evento.target.value)
   }

   function filtrarVehiculos (evento){
        console.log('Filtro seleccionado: ', evento.target.value)
   }

   function guardarVehiculo() {
        console.log('Vehiculo guardado correctamente')
   }

   const vehiculos1 = [
        { id: 1, placa: 'ABC-123' },
        { id: 2, placa: 'XYZ-456' },
        { id: 3, placa: 'DEF-789' }
    ]

    function seleccionarVehiculo(id){
        console.log('Vehiculo seleccionado: ', id)
    }

    function guardar() {
        console.log('Guardado correctamente')
    }

    function cancelar() {
        console.log('Cancelando')
    }

    function buscar() {
        console.log('Buscando')
    }

    const placa = ref('')
    const modelo = ref('')
    const error = ref('')

    function guardarVehiculo1(){
        error.value = ''
        if (placa.value === ''){  
            error.value='La placa es obligatoria'
            return
        } 
        if (modelo.value === ''){
            error.value = 'El modelo es obligatorio'
            return
        }
        if (tipoVehiculo.value===''){
            error.value = 'Debe seleccionar un tipo de vehiculo'
            return
        }
        console.log('Vehiculo guardado correctamente')
        limpiarFormulario()
    }

    const tiposVehiculo = ref([])

    const tipoVehiculo = ref([])

    function limpiarFormulario(){
        placa.value = ''
        modelo.value = ''
        velocidad.value = 0
        estado.value = 'activo'
        activo.value = true
        tipoVehiculo.value = ''
        error.value = ''
    }

    const vehiculos2 = ref([])

    function guardarVehiculo2(){
        error.value = ''
        if (placa.value === ''){
            error.value = 'Placa obligatoria'
            return
        }
        if (modelo.value === ''){
            error.value = 'Modelo obligatorio'
            return
        }

        vehiculos2.value.push({
            placa: placa.value,
            modelo: modelo.value,
            activo: activo.value
        })

        console.log('Vehiculo guardado correctamente')
        placa.value = ''
        modelo.value = ''
    }

    function eliminarVehiculo(placa){
        vehiculos2.value = vehiculos2.value.filter(vehiculo => vehiculo.placa !== placa)
    }
    
    function editarVehiculo(){
        placa.value = vehiculo.placa
        modelo.value = vehiculo.modelo
        activo.value = vehiculo.activo
    }

</script>

<template>
    <h1>Sistema de Localizacion</h1>
    <h2>Motocicletas y Mobilidades</h2>

    <h2>Contador: {{ contador }}</h2>

    <button @click="incrementar">Incrementar</button>

    <p>Vehiculo: {{ nombre }}</p>
    <p>Velocidad: {{ velocidad }}</p>
    <p v-if="activo">
        Vehiculo activo
    </p>
    <p v-else>
        Vehiculo inactivo
    </p>
    <br><br>
    <p>Placa: {{ vehiculo.placa }}</p>
    <p>Modelo: {{ vehiculo.modelo }}</p>
    <p>Velocidad: {{ vehiculo.velocidad }} km/hr</p>
    <p v-if="vehiculo.activo">
        Vehiculo activo
    </p>
    <p v-else>
        Vehiculo inactivo 
    </p>


    <p>
        Velocidad: {{ velocidad }} km/h
    </p>

    <p>
        {{ estado }}
    </p>
    <br><br>
    
    <input @input = "cambiarPlaca" type="" name="" id="">

    <select @change="filtrarVehiculos" name="" id="">
        <option value="todos">Todos</option>
        <option value="activos">Activos</option>
        <option value="inactivos">Inactivos</option>
    </select>

    <form @submit.prevent="guardarVehiculo" action="">
        <input type="text" name="" id="">
        <button type="submit">Buscar</button>
    </form>

    <div v-for="vehiculo in vehiculos1" :key="vehiculo.id">
         {{ vehiculo.placa }}
         <button @click="seleccionarVehiculo(vehiculo.id)">
            Seleccionar
        </button>
    </div>

    <form @submit.prevent="guardar" action="">
        <button type="submit">Guardar</button>
    </form>

    <button @click.once="cancelar">Cancelar</button>

    <input @keyup.enter="buscar" type="text">

    <input v-model="placa"  type="text" name="" id="">
    <input v-model="modelo"  type="text" name="" id="">
    <p>
        Placa: {{ placa }}
        Modelo: {{ modelo }}
    </p>

    <input v-model="modelo" type="text" name="" id="">
    <input v-model="velocidad" type="number" name="" id="">
    <select v-model="estado" name="" id="">
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
    </select>
    <input v-model="activo" type="checkbox" name="" id="">
    <p>
        {{ modelo }}
        {{ velocidad }}
        {{ estado }}
        {{ activo }}
    </p>

    <input v-model.trim="placa" type="text">

    <input v-model.number="velocidad" type="number">

    <p v-if="error">
        {{ error }}
    </p>

    <input  v-model="activo" type="checkbox">
    <p v-if="activo">
        Vehiculo activo
    </p>
    <p v-else>
        Vehiculo inactivo
    </p>

    <br><br>

    <input v-model="tiposVehiculo" type="checkbox" value="motocicleta">
    <label>Motocicleta</label>
    <input v-model="tiposVehiculo" type="checkbox" value="automovil">
    <label>Automovil</label>
    <input v-model="tiposVehiculo" type="checkbox" value="camioneta">
    <label>Camioneta</label>
    <p>{{ tiposVehiculo }}</p>

    <br><br>
    
    <input v-model="tipoVehiculo" type="radio" value="motocicleta">
    <label>Motocicleta</label>
    <input v-model="tipoVehiculo" type="radio" value="automovil">
    <label>Automovil</label>
    <input v-model="tipoVehiculo" type="radio" value="camioneta">
    <label>Camioneta</label>
    <p>{{ tipoVehiculo }}</p>

    <form @submit.prevent="guardarVehiculo2" action="">
        <input v-model.trim="placa" type="text">
        <input v-model.trim="modelo" type="text" name="" id="">
        <input v-model="activo" type="checkbox" name="" id="">
        <button type="submit">Guardar</button>
        
    </form>
    
    <div v-for="vehiculo in vehiculos2" :key="vehiculo.placa">
        <p>{{ vehiculo.placa }} - {{ vehiculo.modelo }} - {{ vehiculo.activo }}</p>
        <button @click="eliminarVehiculo(vehiculo.placa)" type="submit">Eliminar </button>
        <button @click="editarVehiculo(vehiculo)">Editar</button>
    </div>

</template>


