<template>
    <div>
        <h1>Mixins in vue</h1>
        <button @click="incrementCount">Clicked {{count}} times</button> <br>
        <!-- <button @mouseover="incrementCount">Mouseover {{count}} times </button> -->
    </div>
</template>

<script>
import Counter from './Counter.js'
export default {
    name:'Mixinclick',
    mixins: [Counter]
    // data()
    // {
    //     return{
    //        count: 0    
    //     }
    // },
    // methods: {
    //     incrementCount(){
    //         this.count += 1
    //     },
    // }
}
</script>