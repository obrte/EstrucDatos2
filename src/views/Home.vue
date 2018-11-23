<template>
<div>
    <v-container class="mt-2 h100">
        <template>
            <v-treeview v-model="tree" :open="open" :items="items" activatable item-key="name" open-on-click>
                <template slot="prepend" slot-scope="{ item, open, leaf }">
                    <v-icon v-if="!item.file">
                        {{ open ? 'folder_open' : 'folder' }}
                    </v-icon>
                    <v-icon v-else>
                        {{ files[item.file] }}
                    </v-icon>
                </template>
            </v-treeview>
        </template>
    </v-container>
</div>
</template>

<script>
export default {
  data: () => ({
    open: ["public"],
    files: {
      html: "assignment",
      js: "assignment",
      json: "assignment",
      md: "assignment",
      pdf: "assignment",
      png: "assignment",
      txt: "assignment",
      xls: "assignment"
    },
    tree: [],
    items: [
      {
        name: ".git"
      },
      {
        name: "node_modules"
      },
      {
        name: "public",
        children: [
          {
            name: "static",
            children: [
              {
                name: "logo.png",
                file: "png"
              }
            ]
          },
          {
            name: "favicon.ico",
            file: "png"
          },
          {
            name: "index.html",
            file: "html"
          }
        ]
      },
      {
        name: ".gitignore",
        file: "txt"
      },
      {
        name: "babel.config.js",
        file: "js"
      },
      {
        name: "package.json",
        file: "json"
      },
      {
        name: "README.md",
        file: "md"
      },
      {
        name: "vue.config.js",
        file: "js"
      },
      {
        name: "yarn.lock",
        file: "txt"
      }
    ]
  })
};
</script>
