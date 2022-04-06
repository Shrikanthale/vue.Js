<template>
    <div>
       <a v-on:click='click' href="https://github.com/Shrikanthale">GitHub Link </a>
       <button v-on:click.once="add(1)">HitME</button>
       <h3>Hit me {{age}} </h3>
    </div>
</template>

<script>
export default {
    name:'EventModifiers',
    data(){
        return{
          msg:'' ,
          age:25
        }
    },
    methods:{
        click:function(){
            alert("You click My git hub link")
        },
        add:function(inc){
            this.age +=inc;
        }
    }
    
    
}
</script>