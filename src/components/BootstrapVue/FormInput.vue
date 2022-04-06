<template>
  <div class="ml-5">
    <b-form-input
      v-model="text"
      placeholder="Something type here"
      class="ml-5"
    ></b-form-input>
    <div class="mt-2 text-warning">text: {{ text }}</div>
    <div>
      <label for="range-1"> select Quantity </label>
      <b-form-input
        id="range-1"
        v-model="item"
        min="5"
        max="50"
        step="5"
        type="range"
      ></b-form-input>
      <div>range: {{ item }}</div>
    </div>

    <b-container fluid>
      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-small">Small:</label>
        </b-col>
        <b-col sm="5">
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-default">Default:</label>
        </b-col>
        <b-col sm="5">
          <b-form-input
            id="input-default"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-3">
        <b-col sm="1">
          <label for="input-large">Large:</label>
        </b-col>
        <b-col sm="5">
          <b-form-input
            id="input-large"
            size="lg"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>
      </b-row>

       <b-row class="my-3">
           <b-col sm="1">
               <label for="input-text-box"> TEXT: </label>
           </b-col>
           <b-col sm="5">
               <b-form-input id="input-text-box" placeholder="text here" ></b-form-input>
           </b-col>
       </b-row>

    </b-container>
    
    <div>
      <b-form-input list="list-id" ></b-form-input>

      <datalist id="list-id">
        <option>select size</option>
        <option for="size in sizes " > {{sizes}} </option>    
      </datalist>       
    </div>

  </div>
</template>

<script>
export default {
  name: "FormInput",
  data() {
    return {
      text: "",
      item: 2,
      sizes:['xsm','sm','md','lg','xlg']
    };
  },
};
</script>

<style lang="scss" scoped></style>
