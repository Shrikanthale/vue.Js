<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Instance/> -->
    <!-- <Vuex />
    <TheComponent/>
    <TheComponent data="you can pass msg here"/>
    <LocalComponent msg="send msg from local session" />
    <Component2 />
    <ClassAndStyle />
    <Rendering />
    <Von />
    <IfElse />
    <Vshow />
    <EventModifiers />
    <KeyModifiers />
    <ForLoop />
    <VElseIf />
    <Created />
    <Mount />
    <Destroy />
    <Computed />
    <Watch />
    <SignUp /> -->
    <!-- <CustomEvents v-show="showPopup" @close="closePopup" /> -->
    <!-- <button @click="showPopup = true ">Show Popup </button>  -->
    <!-- <Dynamic /> -->
    <!-- <component v-bind:is="cmp" >  </component> -->
    <!-- <button :click="updateCmp(dynamic2)">Change CMP Name </button> -->
    <!-- <Mixinclick /> -->
    <!-- <Filter /> -->
    <!-- <CustomDirective /> -->
    <!-- <Render /> -->
    <!-- <StaticProps name="Shrikant Kanthale" /> -->
    <!-- <Attribute /> -->
    <!-- <Home /> -->
    <!-- <HomeNamed /> -->
    <!-- <TodoList /> -->
    <!-- <TodoApp /> -->
    <!-- <Form /> -->
    <!-- <Alert /> -->
    <!-- <FormBoot /> -->
    <!-- <ChooseFile /> -->
    <!-- <FormGroup /> -->
    <!-- <FormInput /> -->
    <!-- <DropZone v-model="files"  /> -->
    <!-- {{files}} -->
    <ImageUpload />
  </div>
</template>

<script>
// import Instance from './components/Instance/Instance.vue'
// import Vuex from './components/VueX/Vuex.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import TheComponent from './components/component1/TheComponent.vue'
// import LocalComponent from './components/LocalAndGlobalComponent/Localcomponent.vue'
// import Component2 from './components/component2/Component2.vue'
// import ClassAndStyle from './components/ClassAndStyle/ClassAndStyle.vue'
// import Rendering from './components/DeclarativeRendering/Rendering.vue'
// import Von from './components/UserInput/Von.vue'
// import IfElse from './components/Conditionals/IfElse.vue'
// import Vshow from './components/Conditionals/Vshow.vue'
// import EventModifiers from './components/UserInput/EventModifiers.vue'
// import keyModifiers from './components/UserInput/KeyModifiers.vue'
// import ForLoop from './components/Loops/ForLoop.vue'
// import VElseIf from './components/Conditionals/VElseIf.vue'
// import Created from './components/LifeCycle/Created.vue'
// import Mount from './components/LifeCycle/Mount.vue'
// import Destroy from './components/LifeCycle/Destroy.vue'
// import Computed from './components/ComputedProperties/Computed.vue'
// import Watch from './components/Watchers/Watch.vue'
// import SignUp from './components/Form/SignUp.vue'
// import CustomEvents from './components/CustomEvents/CustomEvents.vue'
// import Dynamic from './components/DynamicComponent/Dynamic.vue'
// import Dynamic2 from './components/DynamicComponent/Dynamic2.vue'
// import Mixinclick from './components/Mixin/Mixinclick.vue'
// import Filter from './components/Filter/Filter.vue'
// import CustomDirective from './components/CustomDirective/CustomDirective.vue'
// import Render from './components/RenderFunction/Render.vue'
// import StaticProps from './components/Props/StaticProps.vue'
// import Attribute from './components/Props/Attribute.vue'
// import Home from './components/Slot/Home.vue'
// import HomeNamed from './components/SlotNamed/HomeNamed.vue'
// import TodoList from './components/TodoList/TodoList.vue'
// import TodoApp from './components/TodoList/TodoApp.vue'
// import Form from './components/FormVue/Form.vue'

// import Alert from './components/BootstrapVue/Alert.vue'
// import FormBoot from './components/BootstrapVue/FormBoot.vue'
// import ChooseFile from './components/BootstrapVue/ChooseFile.vue'
// import FormGroup from './components/BootstrapVue/FormGroup.vue'
// import FormInput from './components/BootstrapVue/FormInput.vue'
// import DropZone from './components/media/DropZone.vue'
import ImageUpload from './components/media/ImageUpload.vue'
export default {
  name: 'App',
  components: {
    ImageUpload,
    // DropZone,
    // FormInput,
    // FormGroup,
    //  ChooseFile,
    // FormBoot,
    // Alert
    // Instance,
    // Vuex,
    // HelloWorld
    // TheComponent,
    // LocalComponent,
    // Component2,
    // ClassAndStyle,
    // Rendering,
    // Von,
    // IfElse,
    // Vshow,
    // EventModifiers,
    // keyModifiers,
    // ForLoop,
    // VElseIf,
    // Created,
    // Mount,
    // Destroy,
    // Computed,
    // Watch,
    // SignUp,
    // CustomEvents,
    // 'dynamic':Dynamic,
    // 'dynamic2':Dynamic2,
    // Mixinclick,
    // Filter,
    // CustomDirective,
    // Render,
    // StaticProps,
    // Attribute,
    // Home,
    // HomeNamed,
    // TodoList,
    // TodoApp
    // Form
  },
  data(){
    return{
      showPopup:false,
      cmp:'dynamic',
      files:[], 
    }
  },
  methods: {
    updateCmp(){
      this.cmp="dynamic2"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
