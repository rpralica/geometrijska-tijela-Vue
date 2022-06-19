<template>
  <the-header>
    <div class="container">
      <header hedert>
        <h2 class="container">Trodimenzionalna tijela</h2>
      </header>
    </div>
  </the-header>

  <prvi-red></prvi-red>
  <drugi-red></drugi-red>
<br>
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

export default {
  components: {
    PrviRed,
    DrugiRed,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.footers{
  
  margin-top:17em;
  
}

</style>
