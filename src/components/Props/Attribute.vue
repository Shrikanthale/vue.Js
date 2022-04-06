<template>
    <div>
       <a v-bind: href="website" > Google </a>
    </div>
</template>

<script>
export default {
    name:'Attribute',
    data(){
        return{
          website:'http://www.google.com'
        }
    }
}
</script>