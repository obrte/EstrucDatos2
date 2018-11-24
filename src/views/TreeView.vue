<template>
<div>
    <li>
        <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">
            {{ treeData.name }}
            <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <item class="item" v-for="(model, index) in treeData.children" :key="index" :model="treeData">
            </item>
            <li class="add" @click="addChild">+</li>
        </ul>
    </li>

    <p>(You can double click on an item to turn it into a folder.)</p>

    <!-- the demo root element -->
    <!-- <ul id="demo">
        <item class="item" :model="treeData">
        </item>
    </ul> -->
</div>
</template>

<script>
export default {
  data: () => ({
    open: false,
    treeData: {
      name: "My Tree",
      children: [
        {
          name: "hello"
        },
        {
          name: "wat"
        },
        {
          name: "child folder",
          children: [
            {
              name: "child folder",
              children: [
                {
                  name: "hello"
                },
                {
                  name: "wat"
                }
              ]
            },
            {
              name: "hello"
            },
            {
              name: "wat"
            },
            {
              name: "child folder",
              children: [
                {
                  name: "hello"
                },
                {
                  name: "wat"
                }
              ]
            }
          ]
        }
      ]
    }
  }),
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    changeType: function() {
      if (!this.isFolder) {
        Vue.set(this.model, "children", []);
        this.addChild();
        this.open = true;
      }
    },
    addChild: function() {
      this.model.children.push({
        name: "new stuff"
      });
    }
  },
  props: {
    model: Object
  }
};
</script>
