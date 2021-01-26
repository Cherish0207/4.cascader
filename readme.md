如果你希望对某个元素拥有一系列的操作你可以封装一个指令(自定义指令)

指令是一个方法指令有自己的生命周期
[钩子函数](https://cn.vuejs.org/v2/guide/custom-directive.html#ad)

递归组件
1.把要递归循环的部分拆分出来 cascader组件
2.cascader组件 设置name属性，这样可以让组件调用自己(必须要给当前组件起个名)
加了name, vue内部就会给这个组件vnode命名为vue-component-cid值-name值。这样vue在组件vnode渲染的时候就知道是同样的组件了,内部有个以父构造器的d作为key的缓存

二叉查找
遍历树可以采用深度或者广度
去树中如何找到当前id为这一项的那个人