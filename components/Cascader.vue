<template>
  <div v-click-outside="close" class="cascader">
    <div class="trigger" @click="toggle">
      <slot></slot>
    </div>
    <CascaderItem :options="$attrs.options" v-if="isVisible"></CascaderItem>
  </div>
</template>
<script>
import clickOutside from '../directives/clickOutside'
import CascaderItem from './CascaderItem'
export default {
  components: {
    CascaderItem
  },
  data() {
    return {
      isVisible: true,
    };
  },
  directives: {
    clickOutside,
  },
  methods: {
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
