<template>
  <div>
    <input />
    <h1>{{ res }}</h1>
    <h2>abbbbbbbbbbb</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { res: null };
  },
  created() {
    fetch("/api/?format=json").then((data) => {
     data.json().then(res=>{
       console.log(res)
       this.res = res
     })
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
