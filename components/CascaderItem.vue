<template>
  <div class="content">
    <div class="content-left">
      <div v-for="(item, key) in options" :key="key">
        <div @click="select(item)">{{ item.label }}</div>
      </div>
    </div>
    <div class="content-right" v-if="lists && lists.length">
      <CascaderItem :options="lists" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'CascaderItem',
  props: {
    options: {
      type: Array,
      default: () => []
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
    },
  }
}
</script>
