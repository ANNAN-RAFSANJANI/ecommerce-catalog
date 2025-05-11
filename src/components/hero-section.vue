<template>
  <div class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Fashion Store</h1>
      <p class="hero-subtitle">Temukan Koleksi Pakaian Terbaru untuk Pria dan Wanita</p>
      
      <div class="hero-buttons">
        <div class="dropdown-container" :class="{ 'active': isDropdownOpen }">
          <button class="hero-btn secondary dropdown-toggle" @click="toggleDropdown">
            Lihat Koleksi
            <span class="dropdown-icon">▼</span>
          </button>
          <div class="dropdown-menu" v-show="isDropdownOpen">
            <router-link to="/pria" class="dropdown-item" @click="closeDropdown">Pria</router-link>
            <router-link to="/wanita" class="dropdown-item" @click="closeDropdown">Wanita</router-link>
          </div>
        </div>
      </div>
    </div>
    
    <div class="hero-image-container">
      <div class="hero-image" v-if="currentProducts.length > 0">
        <img :src="currentProducts[currentImageIndex].image" :alt="currentProducts[currentImageIndex].title" />
        <div class="hero-navigation">
          <button class="nav-btn prev" @click="prevImage">&lt;</button>
          <button class="nav-btn next" @click="nextImage">&gt;</button>
        </div>
        <div class="product-info">
          <h3>{{ currentProducts[currentImageIndex].title }}</h3>
          <p>${{ currentProducts[currentImageIndex].price }}</p>
        </div>
      </div>
      <div v-else class="hero-loading">
        <p>Memuat produk...</p>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/style/hero-style.css'

export default {
  name: "HeroSection",
  data() {
    return {
      mensClothing: [],
      womensClothing: [],
      currentCategory: 'all',
      currentImageIndex: 0,
      isDropdownOpen: false
    }
  },
  computed: {
    currentProducts() {
      if (this.currentCategory === 'men') {
        return this.mensClothing;
      } else if (this.currentCategory === 'women') {
        return this.womensClothing;
      } else {
        return [...this.mensClothing, ...this.womensClothing];
      }
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
        this.mensClothing = products.filter(product => product.category === "men's clothing");
        this.womensClothing = products.filter(product => product.category === "women's clothing");
        
        this.currentImageIndex = 0;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    nextImage() {
      if (this.currentImageIndex < this.currentProducts.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0; 
      }
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.currentProducts.length - 1; 
      }
    },
    showCategory(category) {
      this.currentCategory = category;
      this.currentImageIndex = 0; 
    }
  },
  mounted() {
    this.fetchProducts();

    document.addEventListener('click', (e) => {
      const dropdown = this.$el.querySelector('.dropdown-container');
      if (dropdown && !dropdown.contains(e.target)) {
        this.closeDropdown();
      }
    });
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdown);
  }
}
</script>