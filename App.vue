<template>
  <Cascader :options.sync="options" v-model="selected" :lazyLoad="lazyLoad"></Cascader>
</template>

<script>
import Cascader from "./components/Cascader";
import dataList from './dataList.json';
const fetchData = (id)=>{
    return new Promise((resolve)=>{
       setTimeout(()=>{
        let result = dataList.filter(item=>item.pid == id);
        resolve(result); // 将获取到的数据传递出去
       },300)
    })
}
export default {
  components: {
    Cascader,
  },
  async created() {
    this.options = await fetchData(0)
  },
  methods: {
    // async input(value) {
    //   const currentItem = value[value.length - 1]
    //   let children = await fetchData(currentItem.id)
    //   this.$set(currentItem, 'children', children)
    // },
    async lazyLoad(id, callback) {
      let children = await fetchData(id)
      callback(children)
    }
  },
  data() {
    return {
      selected: [],
      options: [],
    };
  },
};
</script>
