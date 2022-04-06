<template>
    <div>
       <h1> {{name}} </h1>
    </div>
</template>

<script>
export default {
    name:'Created',
    data(){
        return{
          name:'Shri'
        }
    },
    created(){
        // this.name="Sam"
        console.log("Created" , this.name)
    },
    beforeCreate(){
        this.name="Sam"
        console.log("BeforeCreated",this.name)
    }
}
</script>