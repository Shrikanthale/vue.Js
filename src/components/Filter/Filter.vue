<template>
    <div>
       <h2> {{title || Ucase}} </h2>
       <h2> {{sub || Ucase}} </h2>
    </div>
</template>

<script>
export default {
    name:'Filter',
    data(){
        return{
          title:'filter',
          sub: 'In Vue'
        }
    }
}
</script>
<style scoped>

</style>