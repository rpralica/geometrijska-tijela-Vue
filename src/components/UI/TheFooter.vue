<template>

<slot name="footer"></slot>
  <div class="container bg-danger footers">
<h2>Created by Matejko Team</h2>
  </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.footers {
  height: 5em;
  padding-top: 1.5em;
  margin-top: 0em;
  color: white;
  font-weight: bolder;
  font-size: 24px;
  width:69.6%;
}
h2{
    color:white
}
</style>
