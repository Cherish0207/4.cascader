<template>
  <div class="content">
    <!-- {{value}} {{level}} -->
    <div class="content-left">
      <div v-for="(item, key) in options" :key="key">
        <div @click="select(item)">{{ item.label }}</div>
      </div>
    </div>
    <div class="content-right" v-if="lists && lists.length">
      <CascaderItem :options="lists" :value="value" @input="input" :level="level+1"/>
    </div>
  </div>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'CascaderItem',
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number
    }
  },
  data() {
    return {
      currentSelect: null, // 当前点击的第一层儿子
    }
  },
  computed: {
    lists() {
      return this.currentSelect && this.currentSelect.children;
    },
  },
  methods: {
    select(item) {
      this.currentSelect = item;
      const Value = cloneDeep(this.value)
      Value[this.level] = item
      this.$emit('input', Value)
    },
    input(value) {
      this.$emit('input', value)
    }
  }
}
</script>
