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
    <UnavailableProductSection />
  </div>
</template>

<script>
import UnavailableProductSection from './components/unavailable-poduct.vue';


export default {
  name: 'App',
  components: {
    UnavailableProductSection

  }
};
</script> -->

