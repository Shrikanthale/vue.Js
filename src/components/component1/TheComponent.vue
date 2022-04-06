<template>
    <div>
       <h1> Basic Vue component </h1>  
       <h2> {{data}} </h2> 
    </div>
</template>

<script>
export default {
    name:'TheComponent',
    props:{
        data:String
    },
}
</script>