<template>
  <div v-click-outside="close" class="cascader">
    <div class="trigger" @click="toggle">
      <slot></slot>
    </div>
    <CascaderItem :options="options" :value="value" @input="input" v-if="isVisible" :level="0"></CascaderItem>
  </div>
</template>
<script>
import clickOutside from '../directives/clickOutside'
import CascaderItem from './CascaderItem'
import cloneDeep from 'lodash/cloneDeep'
export default {
  components: {
    CascaderItem
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    },
    lazyLoad: {
      type: Function
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
      const lastItem = value[value.length - 1]
      const id = lastItem.id
      if(this.lazyLoad) {
        this.lazyLoad(id, children => this.handle(id, children))
      }
    },
    handle(id, children) {
      console.log(id, children);
      const cloneOptions = cloneDeep(this.options)
      console.log(cloneOptions);
      let stack = [...cloneOptions]
      let index = 0
      let currentItem
      while(currentItem = stack[index++]) {
        if(currentItem.id !== id) {
          if(currentItem.children) {
            stack.concat(...currentItem.children)
          }
        }else {
          break
        }
      }
      console.log(currentItem);
      if(currentItem) {
        currentItem.children = children
        this.$emit('update:options', cloneOptions)
      }
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
