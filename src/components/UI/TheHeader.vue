<template>
<div class="container containers">
  <header>
  <slot></slot>
  </header>
  </div>
<br>
  
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style scoped>

.containers{
    height: 5em;
     background: deepskyblue;
     padding-top: 1em;
     color: white;
     
}

</style>