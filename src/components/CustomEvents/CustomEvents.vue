<template>
    <div>
        <h1> Custom Events </h1>
        <h2>this is Poppup</h2>
        <button @click="$emit('close')"></button>
    </div>
</template>

<script>
export default {
    name:'CustomEvents',
    emit:['close']
}
</script>