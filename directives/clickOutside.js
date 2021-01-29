function listener(el, binding, vNode) {
  return function(e) {
    if(e.target === el || el.contains(e.target)) return
    // binding.value()
    let method = binding.expression
    vNode.context[method]()
    // console.log(vNode.context[method] === binding.value); // true
  }
}
export default {
  bind(el) {
    console.log(el.parentNode);
  },
  inserted(el, binding, vNode) {
    window.addEventListener('click', listener(el, binding, vNode))
  },
  unbind(el, binding, vNode) {
    window.removeEventListener('click', listener(el, binding, vNode))
  }
}