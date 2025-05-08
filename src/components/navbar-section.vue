<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <img src="/img/navbar-img/navbar-logo.png" alt="Fashion Store Logo" />
        <span class="logo-text">Fashion Store Norix</span>
      </div>
      
      <div class="navbar-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      
      <ul class="navbar-menu" :class="{ 'active': isMenuActive }">
        <li class="navbar-item">
          <router-link 
            to="/" 
            class="navbar-link" 
            exact-active-class="active"
            @click.native="closeMenu">
            Beranda
          </router-link>
        </li>
        <li class="navbar-item">
          <router-link 
            to="/pria" 
            class="navbar-link" 
            active-class="active"
            @click.native="closeMenu">
            Pria
          </router-link>
        </li>
        <li class="navbar-item">
          <router-link 
            to="/wanita" 
            class="navbar-link" 
            active-class="active"
            @click.native="closeMenu">
            Wanita
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import '@/assets/style/navbar-style.css'

export default {
  name: "NavbarSection",
  data() {
    return {
      isMenuActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    closeMenu() {
      this.isMenuActive = false; 
    }
  }
};
</script>