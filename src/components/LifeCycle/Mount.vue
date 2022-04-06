<template>
    <div>
      <h2 class="id" > {{name}} </h2>
    </div>
</template>

<script>
export default {
   name:'Mount',
   data(){
       return {
           name:"Sam"
       }
   },
   beforeMount(){
       console.log("beforeMount:",document.getElementById('demo'))
   },
   mounted(){
      console.log("mounted:",document.getElementById('demo')) 
   }     
}
</script>

