<template>
    <div>
       <!-- <b-form-file v-model="file1" plain ></b-form-file>
       <div> selected files: {{ file1 ? file1.name : '' }} </div> -->

       <b-form-file v-model="file1" plain ></b-form-file>
       <div> Choose File : {{ file1 ? file1.name : '' }} </div>
    </div>
</template>

<script>
    export default {
        name:'ChooseFile',
        data(){
            return{
               file1:null,
            }
        }
    }
</script>

<style scoped>

</style>