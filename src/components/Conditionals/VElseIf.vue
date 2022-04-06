<template>
    <div>
       <p v-if="summer" > This session is summer </p>
       <p v-else-if="rainy" > This session is rainy </p>
    </div>
</template>

<script>
export default {
    name:'VElseIf',
    data(){
        return{
            rainy:true,
            summer:false,
        }
    }
}
</script>