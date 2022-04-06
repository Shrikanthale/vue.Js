<template>
    <div>
        <h1 v-show="showMe" >Show me when Vshow is true</h1>
    </div>
</template>

<script>
export default {
    name:'Vshow',
    data(){
        return{
          showMe:true, 
        }
    }
}
</script>