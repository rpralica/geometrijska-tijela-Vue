<template>
  <slot name="footer">
    <footer class="container-sm bg-danger footers"></footer>
  </slot>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.footers {
  height: 5em;
  padding-top: 1.5em;
  margin-top: 0em;
  color: white;
  font-weight: bolder;
  font-size: 24px;
}
h2 {
  color: white;
}
</style>
