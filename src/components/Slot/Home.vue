<template>
    <div>
       <h1> Slot in vue js </h1>
       <h1> <a href="http://www.google.com" ></a> go to google </h1>
       <h1> <a href="http://www.github.com" ></a> go to github </h1>
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
    name:'Home',
    components:{
        Child,
    }
}
</script>