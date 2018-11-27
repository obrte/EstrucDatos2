<template>
  <div>
    <v-container class="mt-2 h100">
      <template>
        <v-layout row wrap>
          <v-flex xs12 sm6 md6>
            <v-treeview
              :active.sync="active"
              :items="items"
              :open.sync="open"
              activatable
              active-class="primary--text"
              class="grey lighten-5"
              open-on-click
              transition
            >
              <template slot="prepend" slot-scope="{ item, open, leaf }">
                <v-icon v-if="!item.file">{{ open ? 'folder_open' : 'folder' }}</v-icon>
                <v-icon v-else>assignment</v-icon>
              </template>
            </v-treeview>
          </v-flex>
          <v-flex xs12 sm4 md4>
            <v-text-field label="Padre" v-model="selected" disabled outline></v-text-field>
            <v-text-field label="Agregar Hijo" v-model="NuevoHijo" outline></v-text-field>
            <v-btn fab dark large color="light-green" @click="agregarHijo">
              <v-icon dark>subdirectory_arrow_left</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </template>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: [],
    NuevoHijo: {},
    open: ["public"],
    files: {},
    tree: [],
    items: [
      {
        id: 1,
        name: ".git"
      },
      {
        id: 2,
        name: "node_modules"
      },
      {
        id: 3,
        name: "public",
        children: [
          {
            id: 4,
            name: "static",
            children: [
              {
                id: 5,
                name: "logo.png",
                file: "png"
              }
            ]
          },
          {
            id: 6,
            name: "favicon.ico",
            file: "png"
          },
          {
            id: 7,
            name: "index.html",
            file: "html"
          }
        ]
      },
      {
        id: 8,
        name: ".gitignore",
        file: "txt"
      },
      {
        id: 9,
        name: "babel.config.js",
        file: "js"
      },
      {
        id: 10,
        name: "package.json",
        file: "json"
      },
      {
        id: 11,
        name: "README.md",
        file: "md"
      },
      {
        id: 12,
        name: "vue.config.js",
        file: "js"
      },
      {
        id: 13,
        name: "yarn.lock",
        file: "txt"
      }
    ]
  }),
  computed: {
    selected() {
      if (!this.active.length) return undefined;
      console.log(this.active);
      return this.active;
    }
  },
  watch: {
    // active: function() {
    //   alert("Change Active");
    // }
  },
  methods: {
    agregarHijo() {
      // if (!this.activo.file) this.activo.file = !this.activo.file
      // this.active.file = false;
      // this.active[0].children.push({
      //   name: "new stuff",
      //   file: true
      // });
      alert(this.active);
    }
  },
  props: {
    model: Object
  }
};
</script>