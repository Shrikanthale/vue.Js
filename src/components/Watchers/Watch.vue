<template>
    <div>
        <h1>Watchers</h1>
        <h3> {{count}} </h3>
        <button :click="count=count+1" >++</button>
        <button :click="count=count-1" > -- </button>
    </div>
</template>

<script>
export default {
    name:'Watch',
    data(){
        return{
            count: 0
        }
    },
    watch:{
        count(val,prev){
            if(val>5 && val>prev){
                alert("Stop count Now")
            }
        }
    }
}
</script>