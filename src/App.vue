<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Navigation lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-group
            v-for="navMenu in navMenus"
            :key="navMenu.name"
            :prepend-icon="navMenu.icon"
            no-action
            :append-icon="navMenu.list.length ? undefined : ''"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ navMenu.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="list in navMenu.list" :key="list">
              <v-list-item-content>
                <v-list-item-title>{{ list }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
        <v-divider></v-divider>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/enterprise">For Enterprise</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text>Support<v-icon>mdi-menu-down</v-icon></v-btn>
          </template>
          <v-list>
            <v-subheader>Get help</v-subheader>
            <v-list-item
              v-for="support in supports"
              :key="support.name"
              :to="support.link"
            >
              <v-list-item-icon>
                <v-icon>{{ support.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ support.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Consulting and support</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Discord community</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="primary" dark app> Vuetify </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IConMenu } from "@/model/IconMenu";

@Component({
  components: {},
})
export default class App extends Vue {
  drawer = false;

  get supports(): IConMenu[] {
    return [
      {
        name: "Consulting and suppourt",
        icon: "mdi-vuetify",
        list: [],
        link: "/consulting-and-support",
      },
      {
        name: "Discord community",
        icon: "mdi-discord",
        list: [],
        link: "/discord-community",
      },
      {
        name: "Report a bug",
        icon: "mdi-bug",
        list: [],
        link: "/report-a-bug",
      },
      {
        name: "Github issue board",
        icon: "mdi-github",
        list: [],
        link: "/guthub-issue-board",
      },
      {
        name: "Stack overview",
        icon: "mdi-stack-overflow",
        list: [],
        link: "/stack-overview",
      },
    ];
  }

  get navMenus(): IConMenu[] {
    return [
      {
        name: "Getting Started",
        icon: "mdi-vuetify",
        list: ["Quick Start", "Pre-made layouts"],
        link: "",
      },
      { name: "Customization", icon: "mdi-cogs", list: [], link: "" },
      {
        name: "Styles & animations",
        icon: "mdi-palette",
        list: ["Colors", "Content", "Display"],
        link: "",
      },
      {
        name: "UI Components",
        icon: "mdi-view-dashboard",
        list: ["API explorer", "Alerts"],
        link: "",
      },
      { name: "Directives", icon: "mdi-function", list: [], link: "" },
      { name: "Preminum themes", icon: "mdi-vuetify", list: [], link: "" },
    ];
  }
}
</script>
