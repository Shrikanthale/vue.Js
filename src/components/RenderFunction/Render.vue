<template>
    <div></div>
</template>

<script>
export default {
    name:'Render',
    props: {
        msg:String,
    },
    render(ele){
        return ele("h1",{}, "Hello Shrikant!!")
    }
}
</script>