<script setup>
</script>

<template>
    <div class="tarjeta">
        <header>
            <slot name="titulo"></slot>
        </header>
        <main>
            <slot name="contenido"></slot>
        </main>
        <footer>
            <slot name="acciones"></slot>
        </footer>
    </div>
</template>