<script setup>


  import { onMounted } from 'vue'
  import { useAuth } from './composables/useAuth'

  const { restaurarSesion } = useAuth()

  onMounted(() => {
    restaurarSesion()
  })
    /*import { ref } from 'vue';
    import { useDisplay } from 'vuetify';
    

    const drawer = ref(false)
    const { mobile } = useDisplay()
    const opciones = [
      {
        titulo: 'Inicio',
        icono: 'mdi-home'
      },
      {
        titulo: 'Motocicletas',
        icono: 'mdi-motorbike'
      },
      {
        titulo: 'Movilidades',
        icono: 'mdi-car'
      },
      {
        titulo: 'Conductores',
        icono: 'mdi-account'
      }
    ]

    const vehiculo = ref({
      placa: 'ABC-123',
      modelo: 'Honda XR150',
      velocidad: 65,
      activo: true
    })

    const vehiculos = [
      {
        id: 1,
        placa: 'ABC-123',
        modelo: 'Honda XR150',
        velocidad: 65,
        activo: true
      },
      {
        id: 2,
        placa: 'XYZ-456',
        modelo: 'Yamaha XTZ',
        velocidad: 40,
        activo: false
      }
    ]

    const dialog = ref(false)
    const snackbar = ref(false)

    const headers = [
      { title: 'Placa', key:'placa' },
      { title: 'Modelo', key:'modelo' },
      { title: 'Velocidad', key:'velocidad' },
      { title: 'Estado', key:'activo' },
      { title: 'Acciones', key: 'acciones', sortable: false}
    ]

    const placa = ref('')
    const modelo = ref('')
    const tipo = ref('')
    const activo = ref(true)

    const requerido = value => {
      if (value){
        return true
      }
      return 'Este campo es obligatorio'
    }

    const form = ref(null)
    const loading = ref(false)


    const guardar = async () => {
      const  { valid } = await form.value.validate()

      if (!valid) {
        return
      }

      loading.value = true

      loading.value = false
    }*/
</script>

<template>

  <router-view />

<!--
   <nav>
    <router-link to="/">Inicio</router-link>
    |
    <router-link to="/motocicletas">Motocicletas</router-link>
    |
    <router-link to="/conductores">Conductores</router-link>
  </nav>

  <router-view />


   
  <v-app>
    <v-app-bar>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        Sistema de Localizacion
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :temporary="mobile">
      <v-list>
        <v-list-item v-for="opcion in opciones" :key="opcion.titulo" :title="opcion.titulo" :prepend-icon="opcion.icono"  append-icon="mdi-chevron-right"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
     
      <v-container>
        <h1>Panel de Monitoreo</h1>
        <v-btn color="primary" prepend-icon="mdi-plus">
            Agregar Motocicleta
        </v-btn>

        <v-btn color="primary" variant="outlined" prepend-icon="mdi-pencil">
            Editar
        </v-btn>

        <v-btn color="error" prepend-icon="mdi-delete">Eliminar</v-btn>
        <v-btn icon="mdi-delete" color="error"></v-btn>
        <v-btn disabled color="primary">Guardar</v-btn>

        <v-card>
          <v-card-title>Honda XR150</v-card-title>
          <v-card-text>
            <p>Placa: ABC-123</p>
            <P>Velocidad: 65 km/hr</P>
            <p>Estado: Activo</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" prepend-icon="mdi-eye">
              Ver detalles
            </v-btn>
            <v-btn color="error" variant="outlined" prepend-icon="mdi-delete">
              Eliminar
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card>
          <v-card-title>
            {{ vehiculo.modelo }}
          </v-card-title>

          <v-card-text>
            <p>Placa: {{ vehiculo.placa }}</p>
            <p>Velocidad: {{ vehiculo.velocidad }} km/hr</p>

            <p v-if="vehiculo.activo">
              Estado: Activo
            </p>
            <p v-else>
              Estado: Inactivo
            </p>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary">Ver detalles</v-btn>
          </v-card-actions>
        </v-card>
        
        <v-row>
          <v-col v-for="vehiculo in vehiculos" :key="vehiculo.id" cols="12" sm="6" md="4">
              <v-card>
                <v-card-title>{{ vehiculo.modelo }}</v-card-title>
                <v-card-text>
                  <p>Placa: {{ vehiculo.placa }}</p>
                  <p>Velocidad: {{ vehiculo.velocidad }} km/hr</p>
                  <p v-if="vehiculo.activo">
                    Estado: activo
                  </p>
                  <p v-else>
                    Estado: Inactivo
                  </p>
                </v-card-text>
              </v-card>
          </v-col>
        </v-row>
        
        <v-btn
          color="primary"
          prepend-icon="mdi-plus"
          @click="dialog = true"
        >
          Agregar motocicleta
        </v-btn>

        <v-dialog
          v-model="dialog"
          max-width="500"
        >
          <v-card>

            <v-card-title>
              Agregar motocicleta
            </v-card-title>

            <v-card-text>
              <v-form ref="form">
                <v-col cols="12" md="6">
                  <v-text-field  label="Placa" v-model="placa" :rules="[requerido]"></v-text-field>
                </v-col>
                
                <v-col cols="12" md="6">
                  <v-text-field label="Modelo" v-model="modelo" :rules="[requerido]"></v-text-field>
                </v-col>
                
                <v-select label="Tipo de vehiculo" :items="['Motocicletas', 'Movilidad']" v-model="tipo"></v-select>

                <v-switch v-mode="activo" label="Vehicuo activo"></v-switch>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn @click="dialog = false">
                Cancelar
              </v-btn>

              <v-btn color="primary" @click="snackbar=true; guardar()">
                Guardar
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar" :timeout="3000">
          Motocicleta guardad correctamente
        </v-snackbar>

        <v-row>
          <v-col>
            <v-data-table :headers="headers" :items="vehiculos">
              <template #item.activo="{item}">
                <span v-if="item.activo">
                  Activo
                </span>
                <span v-else>
                  Inactivo
                </span>
              </template>
              
              <template #item.acciones="{item}">
                <v-btn icon="mdi-pencil" color="primary"></v-btn>
                <v-btn icon="mdi-delete" color="error"></v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>

        
      </v-container>

      <v-container>

        <h1>Panel de monitoreo</h1>

        <v-row>

          <v-col cols="12" sm="6" md="4">
            <v-card>
              <v-card-title>
                Motocicletas
              </v-card-title>

              <v-card-text>
                25 vehículos
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-card>
              <v-card-title>
                Activas
              </v-card-title>

              <v-card-text>
                18 vehículos
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-card>
              <v-card-title>
                Inactivas
              </v-card-title>

              <v-card-text>
                7 vehículos
              </v-card-text>
            </v-card>
          </v-col>

        </v-row>

      </v-container>
    </v-main>
  </v-app> -->
  
  
</template>
