import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Premium from '../views/Premium/Premium.vue'
import Assistance from '../views/Assistance/Assistance.vue'
import Telechargement from '../views/Telechargement/Telechargement.vue'
import Inscription from '../views/Inscription/Inscription.vue'
import Connexion from '../views/Connexion/Connexion.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/premium',
        name: 'Premium',
        component: Premium,
    },
    {
        path: '/assistance',
        name: 'Assistance',
        component: Assistance,
    },
    {
        path: '/telechargement',
        name: 'Telechargement',
        component: Telechargement,
    },
    {
        path: '/inscription',
        name: 'Inscription',
        component: Inscription,
    },
    {
        path: '/connexion',
        name: 'Connexion',
        component: Connexion,
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router