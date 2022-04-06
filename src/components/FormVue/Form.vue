<template>
    <div>
       <form>
           <div>
               <lable for = Name > Name </lable>
               <input type="text" id="Name" v-model="formVal.Name"  />
           </div>
           <div>
               <lable for="profile" >profile </lable>
               <textarea id="profile"  v-model="formVal.profile" />
           </div>
           <div>
               <lable for="country">Country:</lable>
               <select id="country" v-model="formVal.country">
                   <option value=" ">Select Country</option>
                   <option value="UK">UK</option>
                   <option value="Bharat">Bharat</option>
                   <option value="Us">US</option>
               </select>   
           </div>
       </form>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data(){
           return{
                formVal:{
                   Name : '',
                   profile : '',
                   sports : '',
                   country : '',
                }
           }
        }
    }
</script>

<style lang="scss" scoped>

</style>