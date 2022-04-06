<template>
    <ChildNamed>
        <template v-slot:header>
            <h1> shrikant Kanthale </h1>
        </template>
        <template v-slot:content>
            <h1> Front-end Developer </h1>
        </template>
        <template v-slot:footer>
            <h1> Contact:skanthale@gmail.com </h1>
        <template>    
    </ChildNamed>
    
</template>

<script>
import ChildNamed from './ChildNamed.vue'
export default {
    name:'Home',
    components:{
        ChildNamed,
    }
}
</script>