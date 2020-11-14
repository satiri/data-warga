<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#"><router-link to="/" class="home-link">Data Warga v1.0</router-link></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="#"><router-link to="/kartu-keluarga" class="home-link">Kartu Keluarga</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/data-warga" class="home-link">Data Warga</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/mutasi-warga" class="home-link">Mutasi</router-link></b-nav-item>
            <b-nav-item href="#"><router-link to="/kas" class="home-link">Kas</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <em>User</em>
            </template>
            <b-dropdown-item href="#">Profil</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
import {
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavbarToggle,
    BCollapse,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem,
    } from 'bootstrap-vue';

export default {
  name: 'Navbar',
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavbarToggle,
    BCollapse,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem,
  },
}
</script>

<style>
.home-link {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
}

.home-link:hover {
    color:white;
    text-decoration: none;
}
</style>