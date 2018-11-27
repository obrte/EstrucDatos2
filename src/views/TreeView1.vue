<template>
<div>
    <v-container class="mt-2 h100">
        <template>
            <v-layout row wrap>
                <v-flex xs12 sm6 md6>
                    <v-treeview v-model="tree" :open="open" :items="items" :active.sync="active" activatable active-class="primary--text" item-key="name" open-on-click>
                        <template slot="prepend" slot-scope="{ item, open, leaf }">
                            <v-icon v-if="!item.file">
                                {{ open ? 'folder_open' : 'folder' }}
                            </v-icon>
                            <v-icon v-else>
                                assignment
                            </v-icon>
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
        name: "Vista Arbol",
        file: false,
        children: [
          {
            name: ".git",
            file: false
          },
          {
            name: "node_modules",
            file: false
          },
          {
            name: "public",
            file: false,
            children: [
              {
                name: "static",
                children: [
                  {
                    name: "logo.png",
                    file: true
                  },
                  {
                    name: "logo2.png",
                    file: false,
                    children: [
                      {
                        name: "otro",
                        file: true
                      },
                      {
                        name: "otro2",
                        file: true
                      }
                    ]
                  }
                ],
                file: false
              },
              {
                name: "favicon.ico",
                file: true
              },
              {
                name: "index.html",
                file: true
              }
            ]
          },
          {
            name: ".gitignore",
            file: true
          },
          {
            name: "babel.config.js",
            file: true
          },
          {
            name: "package.json",
            file: true
          },
          {
            name: "README.md",
            file: true
          },
          {
            name: "vue.config.js",
            file: true
          },
          {
            name: "yarn.lock",
            file: false
          }
        ]
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
