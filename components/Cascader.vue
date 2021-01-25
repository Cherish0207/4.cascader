<template>
  <div v-click-outside="close" class="cascader">
    <div class="trigger" @click="toggle">
      <slot></slot>
    </div>
    <div class="content" v-if="isVisible">
      <div class="content-left">
        <div v-for="(item, key) in options" :key="key">
          <div @click="select(item)">{{ item.label }}</div>
        </div>
      </div>
      <div class="content-right" v-if="lists && lists.length">
        <div v-for="(item, key) in lists" :key="key">
          <div>{{ item.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import clickOutside from '../directives/clickOutside'
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    lists() {
      return this.currentSelect && this.currentSelect.children;
    },
  },
  data() {
    return {
      isVisible: true,
      currentSelect: null, // 当前点击的第一层儿子
    };
  },
  directives: {
    clickOutside,
  },
  methods: {
    select(item) {
      this.currentSelect = item;
    },
    close() {
      this.isVisible = false;
    },
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
<style>
.cascader {
  margin: 50px;
}

.trigger {
  width: 150px;
  height: 25px;
  border: 1px solid #ccc;
}
.content {
  display: flex;
}
</style>
