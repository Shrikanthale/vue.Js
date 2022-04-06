<template>
    <div>
        {{name}}
    </div>
</template>

<script>
export default {
    name:'Destroy',
    data(){
        return{
            name:'destroyed call'
        }
    },
    beforeDestroy(){
        console.log("beforeDestroy called");
    },
    destroyed(){
        console.log("beforeDestroy");
    }
}
</script>