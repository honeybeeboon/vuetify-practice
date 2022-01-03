<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <SaleGraph />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import SaleGraph from "@/components/SaleGraph.vue";

@Component({
  components: {
    SaleGraph,
  },
})
export default class Home extends Vue {
  mounted(): void {
    console.log(this.$vuetify.breakpoint);
  }
}
</script>
