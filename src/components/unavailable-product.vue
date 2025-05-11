<template>
  <div class="unavailable-product-section" :class="{ 'women': category === 'women' }">
    <div class="unavailable-product-card">
      <div class="sad-face"></div>
      <div class="unavailable-text">
        This product is unavailable in {{ categoryDisplay }} category
      </div>
      <button class="btn next" :class="{ 'women': category === 'women' }" @click="nextProduct">
        Next product
      </button>
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
      },
      category: {
        type: String,
        default: 'men',
        validator: (value) => ['men', 'women'].includes(value)
      }
    },
    computed: {
      categoryDisplay() {
        return this.category === 'women' ? "Women's" : "Men's";
      },
      categoryRoute() {
        return this.category === 'women' ? '/wanita/' : '/pria/';
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
        
        this.$router.push(`${this.categoryRoute}${currentIndex}`);
      },
      goBack() {
        this.$router.push('/');
      }
    }
  };
</script>