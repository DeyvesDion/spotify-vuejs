<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from "./components/NavBar/NavBar.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
    components: {
        NavBar,
        Footer,
    },
};
</script>

<template>
    <div>
        <NavBar />
    </div>
    <router-view />
    <Footer />
</template>
