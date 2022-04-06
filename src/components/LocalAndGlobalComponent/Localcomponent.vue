<template>
    <div>
        <h2>Local Component</h2>
        <h2>{{msg}}</h2>
        <Globalcomponent/>
    </div>
</template>

<script>
import Globalcomponent from './Globalcomponent.vue'
export default {
  components: { Globalcomponent },
    name:'LocalComponent',
    props:{
        msg:String
    }
}
</script>