<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="@/assets/nix_info.jpg">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '◇ Information'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  /* font-size: 70%; */
  text-align: left;
  /* background-color: blue; */
  margin-left: 10%;
  margin-right: 10%;
}

</style>
