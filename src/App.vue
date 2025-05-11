<template>
  <div id="app">
    <NavbarSection />
    <router-view />
    <FooterSection />
  </div>
</template>

<script>
import NavbarSection from './components/navbar-section.vue';
import FooterSection from './components/footer-section.vue';


export default {
  name: 'App',
  components: {
    NavbarSection,
    FooterSection

  }
};
</script>

<!-- <template>
  <div id="app">
    <NavbarSection />
    <UnavailableProductSection/>
    <FooterSection />
  </div>
</template>

<script>
import UnavailableProductSection from './components/unavailable-product.vue'
import NavbarSection from './components/navbar-section.vue';
import FooterSection from './components/footer-section.vue';

export default {
  name: 'App',
  components: {
    NavbarSection,
    UnavailableProductSection,
    FooterSection
  }
}
</script> -->


