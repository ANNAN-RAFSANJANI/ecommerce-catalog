<template>
    <div class="unavailable-product-section">
      <div class="unavailable-product-card">
        <div class="sad-face"></div>
        <div class="unavailable-text">This product is unavailable to show</div>
        <button class="btn next">Next product</button>
      </div>
    </div>
  </template>
  
  <script>
  import '@/assets/style/unavailable-product-style.css';
  
  export default {
    name: "UnavailableProductSection",
  };
  </script>
  