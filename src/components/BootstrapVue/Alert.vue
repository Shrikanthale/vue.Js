<template>
  <div>
    <b-alert show>default</b-alert>
    <b-button variant="danger">Danger</b-button>
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>
    <b-button @click="showDismissibleAlert = true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? "visible" : "hidden" }})
    </b-button>
    <b-badge variant="warning">Warning</b-badge>
    <b-avatar variant="warning" :size="35"></b-avatar>

    <div>
      <b-button variant="warning" v-b-toggle.collapse-1 class="mr-5">
        Toggle
      </b-button>

      <b-collapse id="collapse-1">
        <b-card class="mr-5"> this is card collapse </b-card>
      </b-collapse>
    </div>
    <div class="mt-5">
      <b-button variant="warning" v-b-toggle.collapse-a.collapse-b>
        collapse a&b
      </b-button>
      <b-button variant="danger" v-b-toggle.collapse-a.collapse-b>
        collapse a&b
      </b-button>

      <b-collapse id="collapse-a">
        <b-card>collapse A</b-card>
      </b-collapse>

      <b-collapse id="collapse-b">
        <b-card> collapse B </b-card>
      </b-collapse>
    </div>

    <div>
      <b-button variant="info" v-b-toggle.sport> sport </b-button>

      <b-collapse id="sport">
        <b-card
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quo,
          voluptate impedit tempora perspiciatis voluptatem culpa dolorum,
          officia esse, consequuntur eos ipsam facere! Ab, doloribus.</b-card
        >
      </b-collapse>
    </div>

    <div>
      <b-button variant="primary" v-b-toggle.form-1> open a form </b-button>

      <b-collapse id="form-1">
        <b-card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          voluptates, reprehenderit velit veritatis nobis inventore nemo
          voluptatibus impedit in necessitatibus commodi, ut numquam perferendis
          dolorem!
        </b-card>
      </b-collapse>
    </div>
    <div>
      <b-dropdown id="dropdown1" varient="warning" text="drop down">
        <b-dropdown-item>1</b-dropdown-item>
        <b-dropdown-item>2</b-dropdown-item>
        <b-dropdown-item>3</b-dropdown-item>
      </b-dropdown>
    </div>

    <!-- <b-dropdown
      id="dropdown-left"
      text="Left align"
      variant="primary"
      drop-up
      class="m-2"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
    </b-dropdown> -->

    <div>
      <b-dropdown id="sport " right variant="dark" text="sport">
        <b-dropdown-item>cricket</b-dropdown-item>
        <b-dropdown-item>football</b-dropdown-item>
        <b-dropdown-item>hockey</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      showDismissibleAlert: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
