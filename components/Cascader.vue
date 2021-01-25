<template>
  <div v-click-outside="close" class="cascader">
    <div class="trigger" @click="toggle">
      <slot></slot>
    </div>
    <CascaderItem :options="$attrs.options" :value="value" @input="input" v-if="isVisible" :level="0"></CascaderItem>
  </div>
</template>
<script>
import clickOutside from '../directives/clickOutside'
import CascaderItem from './CascaderItem'
export default {
  components: {
    CascaderItem
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
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
    input(value) {
      this.$emit('input', value)
    }
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
