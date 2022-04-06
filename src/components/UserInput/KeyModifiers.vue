<template>
    <div>
       <h2> Key Modifiers </h2>
       <label> name </label>
       <input type="text"  v-on:keyup="Name" />
       <label>Last Name</label>
       <input type ="text" v-on:keyup="LastName" />
    </div>
</template>

<script>
export default {
    name:'keyModifiers',
    data(){
        
    },
    Name: function(){
        console.log(" You Enter Your name")
    },
    LastName: function(){
        console.log("yoy Enter your Last Name")
    }
}
</script>