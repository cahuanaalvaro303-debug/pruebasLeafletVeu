<script setup>
    const opciones = [
        {
            titulo: 'Inicio',
            icono: 'mdi-home',
            ruta: 'inicio'
        },
        {
            titulo: 'Motocicletas',
            icono: 'mdi-motorbike',
            ruta: 'motocicletas'
        },
        {
            titulo: 'Conductores',
            icono: 'mdi-account',
            ruta: 'conductores'
        }
    ]
</script>

<template>
  <v-app>

    <v-app-bar color="primary">
      <v-app-bar-title>
        Sistema de Localización
      </v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Inicio" />
        <v-list-item title="Motocicletas" />
        <v-list-item title="Conductores" />
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>