<template>
  <div class="unavailable-product-section">
    <div class="unavailable-product-card">
      <div class="sad-face"></div>
      <div class="unavailable-text">This product is unavailable in Men's category</div>
      <button class="btn next" @click="nextProduct">Next product</button>
    </div>
  </div>
</template>
    
<script>
  import '@/assets/style/unavailable-product-style.css';
    
  export default {
    name: "UnavailableProductSection",
    props: {
      id: {
        type: [String, Number],
        default: null
      }
    },
    data() {
      return {
        maxIndex: 20
      }
    },
    methods: {
      nextProduct() {
        let currentIndex = parseInt(this.id || 1);
        
        if (currentIndex < this.maxIndex) {
          currentIndex++;
        } else {
          currentIndex = 1;
        }
        
        this.$router.push(`/pria/${currentIndex}`);
      },
      goBack() {
        this.$router.push('/');
      }
    }
  };
</script>
