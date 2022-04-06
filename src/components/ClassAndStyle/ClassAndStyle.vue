<template>
  <div>
      <h1 class="VueStyle"> This Vue Class and Style </h1>
      <h3 :style="{color:'blue'}" >Bind vue</h3>
  </div>
</template>

<script>
export default {
   name:'ClassAndStyle'  
}
</script>

<style>
   .VueStyle{
       color:brown
   }
</style>