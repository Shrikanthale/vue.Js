<template>
    <div>
       <h1> Computed Properties </h1>  
       <h3> Bill: {{getBill}} </h3> 
    </div>
</template>

<script>
export default {
    name:'Computed',
    data(){
        return{
           rupess:200,
           item:5,
           discount:50
        }
    },
    computed:{
        getBill(){
            return (this.rupess*this.item) - this.discount
        }
    }
}
</script>

<style scoped>
h1{
    color:burlywood;
}
</style>