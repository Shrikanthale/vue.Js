<template>
    <div>
        <h3 v-if="show" > if Statement Run here </h3>
        <button :click="()=>{this.show = !this.show}">Change me </button>
    </div>
</template>

<script>
export default {
   name:'Von',
   data(){
       return {
         show: false,  
       }
    },
    methods: {
        display(){
            this.show=true;
        }
    }    
}
</script>

<style scoped>

</style>