<template>
  <div class="product-section-women">
    <div v-if="loading" class="product-skeleton">
      <div class="skeleton-card-women">
        <div class="skeleton-image-women">
          <div class="skeleton-img-placeholder"></div>
        </div>
        <div class="skeleton-details-women">
          <div class="skeleton-title"></div>
          <div class="skeleton-category-rating">
            <div class="skeleton-category"></div>
            <div class="skeleton-rating"></div>
          </div>
          <div class="skeleton-description">
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line" style="width: 70%"></div>
          </div>
          <div class="skeleton-price-action">
            <div class="skeleton-price"></div>
            <div class="skeleton-btn"></div>
            <div class="skeleton-btn"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="product && product.category === 'women\'s clothing'" class="product-card-women">
      <div class="product-image-women">
        <img :src="product.image" :alt="product.title" />
      </div>
      <div class="product-details-women">
        <h2 class="product-title-women">
          {{ product.title }}
        </h2>
        <div class="category-rating-women">
          <span class="category-women">{{ product.category }}</span>
          <div class="rating-women">
            <span>{{ product.rating?.rate.toFixed(1) }}/5</span>
            <span class="dots-women">
              <span 
                v-for="i in 5" 
                :key="i" 
                class="dot-women" 
                :class="{ filled: i <= Math.round(product.rating?.rate) }"
              ></span>
            </span>
          </div>
        </div>
        <p class="description-women">
          {{ product.description }}
        </p>
        <div class="price-action-women">
          <span class="price-women">${{ product.price }}</span>
          <button class="btn-women buy">Buy now</button>
          <button class="btn-women next" @click="nextProduct">Next product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/style/women-style.css'
import axios from 'axios'

export default {
  name: "WomenSection",
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
        
        if (product && product.category !== 'women\'s clothing') {
          setTimeout(() => {
            this.$router.push(`/wanita/unavailable-product/${this.currentIndex}`);
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
      
      this.$router.push(`/wanita/${this.currentIndex}`);
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