<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="mr-5" >
      <b-form-group id="input-group-1" label="email:" lable-for="input-1">
        <b-form-input
          id="email-input"
          label="Email :"
          v-model="form.email"
          placeholder="enter your email"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Name:" lable-for="input-2">
        <b-form-input
          id="name-input"
          lable="Name:"
          v-model="form.name"
          placeholder="enter your Name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" lable="Food" lable-for="input-3">
        <b-form-select
          id="food-input"
          lable="food"
          :options="food"
          v-model="form.food"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="info" class="mt-5" > Submit </b-button>
      <b-button type="reset" variant="danger" class="mt-5" > Reset </b-button>
    </b-form>
    <b-card header="Form deatils" >
        <pre > {{form}} </pre>
    </b-card>
    
    <!-- <b-form @submit="submit" v-if="show" >
      <b-form-group id="input-group-1" lable="Email" lable-for="Email-input">
        <b-form-input id="input-email" lable="Email" v-model="form.email" placeholder="Enter a Email" required  ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Name:" lable-for="name-input" >
        <b-form-input id="name-input" lable="name" v-model="form.name" placeholder="Enter a Name" required ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group=3" lable="Sports" lable-for="sports-input" >
        <b-form-select id="sports" lable="sports" v-model="form.sports" :options="sports" required ></b-form-select>  
      </b-form-group> 
      <b-button type="submit" variant="primary" > submit </b-button>
      <b-button type="reset" variant="danger"> reset </b-button>
    </b-form>
    <b-card header="Full Form Deatils" >
      <pre> {{form}} </pre>
    </b-card> -->

  </div>
</template>

<script>
export default {
  name: "FormBoot",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      food: [{ text: "select one " }, "apples", "carrot", "beans", "mangoes"],
      show: true,

      // form:{
      //   email:"",
      //   name:"",
      //   sports:null,
      // },
      //  sports:[{text:"select one"} , "cricket" , "carrom" ,"scoker"],
      //  show: true, 
    };
  },
  methods: {
      onSubmit(event){
          event.preventDefault();
          alert(JSON.stringify(this.form))
        },
        onReset(event){
          event.preventDefault()
          this.form.name=''
          this.form.email=''
          this.form.food=null
          this.form.checked=[]
          this.show=false

          this.$nextTick(() =>{
              this.show=true
          })
      }
      
      // onSubmit(event){
      //   event.preventDefault();
      //   alert(JSON.stringify(this.form))
      // },
 
    }
};
</script>

<style scoped></style>
