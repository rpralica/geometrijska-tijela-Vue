<template>
  <the-header>
    <div class="container">
      <header hedert>
        <h2 class="container">Trodimenzionalna tijela</h2>
      </header>
    </div>
  </the-header>

  <div class="container">
    <prvi-red></prvi-red>
    
  </div>
</template>

<script>
import PrviRed from './PrviRed.vue';

export default {
  components: {
    PrviRed,
   
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.hedert {
 width:100%;
}
</style>
