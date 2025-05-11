<template>
  <footer :class="['footer', { 'women': isWomenSection }]">
    <div class="footer-container">
      <div class="footer-divider"></div>
      <div class="footer-row">
        <div class="footer-column">
          <h3 class="footer-title">Fashion Store Norix</h3>
          <p class="footer-description">
            Temukan koleksi pakaian terbaik untuk pria dan wanita dengan harga terjangkau dan kualitas premium.
          </p>
        </div>
        
        <div class="footer-column">
          <h4 class="footer-subtitle">Kategori</h4>
          <ul class="footer-links">
            <li><router-link to="/pria">Pria</router-link></li>
            <li><router-link to="/wanita">Wanita</router-link></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">
          &copy; 2025 Fashion Store Norix. Semua hak dilindungi.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import '@/assets/style/footer-style.css'

export default {
  name: "FooterSection",
  computed: {
    isWomenSection() {
      return this.$route.path.startsWith('/wanita');
    }
  }
};
</script>