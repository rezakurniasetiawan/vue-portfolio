<template>
       <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div class="container">
            <router-link class="navbar-brand route-link" to="/">Reza Kurnia</router-link>
            <!-- <a class="navbar-brand" href="#">Reza Kurnia<span class="dot">.</span></a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="#home">Home</a> -->
                        <router-link class="nav-link route-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link route-link" to="/project">Project</router-link>
                    </li>
                </ul>
                <router-link class="btn btn-brand ms-lg-3 route-link" to="/contact">Contact</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: "Navbar",
};
</script>

<style>

</style>
