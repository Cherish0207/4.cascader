<template>
  <div v-click-outside="close" class="cascader">
    <div class="trigger" @click="toggle">
      <slot></slot>
    </div>
    <div class="content" v-if="isVisible">显示面板</div>
  </div>
</template>
<script>
import clickOutside from '../directives/clickOutside'
export default {
  data() {
    return { isVisible: true };
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
</style>
