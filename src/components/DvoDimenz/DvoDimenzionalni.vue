<template>



  <div class="containers">
    <the-header>
      <header>
        <h2 class="container">Dvodimenzionalna tijela</h2>
      </header>
    </the-header>
    </div>
   <div class="container">
  <prvi-red></prvi-red>
    <drugi-red></drugi-red>
    <treci-red></treci-red>
   
  </div>
</template>

<script>
import PrviRed from './PrviRed.vue';
import DrugiRed from './DrugiRed.vue';
import TreciRed from './TreciRed.vue';

export default {
     components: {
    PrviRed,
    DrugiRed,
    TreciRed,
   
    // TroDimenz,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.containers{
    width: 100%;
}

</style>