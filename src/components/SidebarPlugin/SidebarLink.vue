<template>
  <component :is="tag" @click.native="hideSidebar" v-bind="$attrs" tag="li">
    <div class="row">
      <div class="col-10">
        <a class="nav-link" v-bind="$attrs">
          <slot>
            <i v-if="link.icon" :class="link.icon"></i>
            <p>{{ link.name }}</p>
          </slot>
        </a>
      </div>
      <div class="col-1">
        <b-icon :icon="isOpen ? 'chevron-down' : 'chevron-right'" style="float: right; margin-top: 20px"
          v-if="lengthChildren > 0"
          @click="toggle('teste')"></b-icon>
        <!-- <i
          :class="isOpen ? 'nc-icon nc-stre-down' : 'nc-icon nc-stre-right'"
          style="float: right; margin-top: 20px"
          v-if="lengthChildren > 0"
          @click="toggle('teste')"
        ></i> -->
      </div>
    </div>
    <ul v-show="isOpen" style="list-style: none" v-if="isFolder">
      <sidebar-link
        style="margin-left:-20px"
        v-for="(child, index) in link.children"
        :key="index"
        :to="child.path"
      >
        <i v-if="child.icon" :class="child.icon"></i>
        <p>{{ child.name }}</p>
      </sidebar-link>
    </ul>
  </component>
</template>
<script>
export default {
  inheritAttrs: false,
  inject: {
    autoClose: {
      default: true
    }
  },

  data: function() {
    return {
      lengthChildren: 0,
      isOpen: false
    };
  },

  props: {
    link: {
      type: [String, Object],
      default: () => {
        return {
          name: "",
          path: "",
          icon: "",
          children: []
        };
      }
    },
    tag: {
      type: String,
      default: "router-link"
    }
  },
  mounted() {
    if (this.addLink) {
      this.addLink(this);
    }
    this.childrenSize(this.link.children);
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    makeFolder: function() {
      if (!this.isFolder) {
        this.$emit("make-folder", this.item);
        this.isOpen = true;
      }
    },
    childrenSize(children) {
      for (var i in children) {
        this.lengthChildren++;
      }
    },
    hideSidebar() {
      if (
        this.autoClose &&
        this.$sidebar &&
        this.$sidebar.showSidebar === true
      ) {
        this.$sidebar.displaySidebar(false);
      }
    }
  },
  computed: {
    isFolder: function() {
      return this.link.children && this.link.children.length;
    }
  }
};
</script>
<style></style>
