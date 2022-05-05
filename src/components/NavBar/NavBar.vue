<script>
export default {
    setup() {
        return {};
    },
};
</script>
<template>
    <div>
        <header>
            <nav>
                <div class="logoSection">
                    <router-link to="/" class="logo"
                        ><img
                            src="../../assets/Spotify_Logo.png"
                            class="logoIcon"
                            alt="logo icon"
                    /></router-link>
                </div>
                <div class="toggle" onclick="toggleMenu()"></div>
                <ul class="menu">
                    <li class="navItem">
                        <router-link
                            to="/premium"
                            class="navLink"
                            onclick="toggleMenu()"
                            >Premium</router-link
                        >
                    </li>
                    <li class="navItem">
                        <router-link
                            to="/assistance"
                            class="navLink"
                            onclick="toggleMenu()"
                            >Assistance</router-link
                        >
                    </li>
                    <li class="navItem">
                        <router-link
                            to="/telechargement"
                            class="navLink"
                            onclick="toggleMenu()"
                            >Téléchargement</router-link
                        >
                    </li>
                    <span>|</span>
                    <li class="navItem">
                        <router-link
                            to="/inscription"
                            class="navLink"
                            onclick="toggleMenu()"
                            >Inscription</router-link
                        >
                    </li>
                    <li class="navItem">
                        <router-link
                            to="/connexion"
                            class="navLink"
                            onclick="toggleMenu()"
                            >Connexion</router-link
                        >
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<style src="./NavBar.css" scoped></style>
