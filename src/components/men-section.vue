<template>
  <div class="product-section-men">
    <div v-if="loading" class="loading">Loading products...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="product && product.category === 'men\'s clothing'" class="product-card-men">
      <div class="product-image-men">
        <img :src="product.image" :alt="product.title" />
      </div>
      <div class="product-details-men">
        <h2 class="product-title-men">
          {{ product.title }}
        </h2>
        <div class="category-rating-men">
          <span class="category-men">{{ product.category }}</span>
          <div class="rating-men">
            <span>{{ product.rating?.rate.toFixed(1) }}/5</span>
            <span class="dots-men">
              <span 
                v-for="i in 5" 
                :key="i" 
                class="dot-men" 
                :class="{ filled: i <= Math.round(product.rating?.rate) }"
              ></span>
            </span>
          </div>
        </div>
        <p class="description-men">
          {{ product.description }}
        </p>
        <div class="price-action-men">
          <span class="price-men">${{ product.price }}</span>
          <button class="btn-men buy">Buy now</button>
          <button class="btn-men next" @click="nextProduct">Next product</button>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="redirect-message">Redirecting to unavailable product page...</div>
    </div>
  </div>
</template>

<script>
import '@/assets/style/men-style.css'
import axios from 'axios'

export default {
  name: "MenSection",
  props: {
    id: {
      type: [String, Number],
      default: null
    }
  },
  data() {
    return {
      loading: true,
      error: null,
      product: null,
      currentIndex: 1,
      maxIndex: 20
    }
  },
  watch: {
    '$route.params.id': function(newId) {
      if (newId) {
        this.currentIndex = parseInt(newId);
        this.fetchProduct();
      }
    }
  },
  methods: {
    async fetchProduct() {
      try {
        this.loading = true
        const response = await axios.get(`https://fakestoreapi.com/products/${this.currentIndex}`)
        const product = response.data

        this.product = product
        this.loading = false
        
        // Redirect if product is not men's clothing
        if (product && product.category !== 'men\'s clothing') {
          // Add small timeout to allow component to render before redirect
          setTimeout(() => {
            this.$router.push(`/pria/unavailable-product/${this.currentIndex}`);
          }, 100);
        }
      } catch (err) {
        this.error = "Gagal memuat produk: " + err.message
        this.loading = false
      }
    },
    nextProduct() {
      if (this.currentIndex < this.maxIndex) {
        this.currentIndex++
      } else {
        this.currentIndex = 1
      }
      
      this.$router.push(`/pria/${this.currentIndex}`);
    }
  },
  created() {
    if (this.$route.params.id) {
      this.currentIndex = parseInt(this.$route.params.id);
    }
    
    this.fetchProduct()
  }
}
</script>

<style>
.redirect-message {
  text-align: center;
  padding: 20px;
  color: #555;
  font-style: italic;
}
</style>