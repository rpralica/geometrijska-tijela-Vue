<template>
  <the-header>
   <div class="container containers">
      <header >
        
      <h1>Dvodimenzionalna Tijela</h1>
       
      </header>
      </div>
  </the-header>

  <prvi-red></prvi-red>
  <drugi-red></drugi-red>
<treci-red></treci-red>

  <the-footer>
    <template #footer>
      <footer class="container-sm bg-danger footers">
      <h4>Created by Matejko Team</h4>
      </footer>
    </template>
  </the-footer>
</template>

<script>
import PrviRed from './PrviRed.vue';
import DrugiRed from './DrugiRed.vue';
import TreciRed from './TreciRed.vue';
export default {
  components: {
    PrviRed,
    DrugiRed,TreciRed

    // TroDimenz,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.footers{
  /* background: red;
  height: 5em;
  color: white;
  background: red;
  color: white;
  
  height: 5em;
  padding-top: 1em; */
}
</style>
