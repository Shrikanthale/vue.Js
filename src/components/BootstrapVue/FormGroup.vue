<template>
    <div>
      <b-form-group id="Horz-input"  label-size="lg"  label-cols-lg="4" label-cols-sm="4" content-cols-lg="7" content-cols-sm="7" label-for=" input-horiziontal " label-align-sm="right" label="Enter your name here" description="You must type here your name" >
          <b-form-input id="input-horiziontal" ></b-form-input>
      </b-form-group>
    </div>
</template>

<script>
    export default {
        name:'FormGroup',
        data(){
            return{
              form:{
                  Name:'',
              }
            }
        }
    }
</script>

<style>

</style>