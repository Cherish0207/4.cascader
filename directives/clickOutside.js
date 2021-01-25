function listener(el, binding) {
  return function(e) {
    if(e.target === el || el.contains(e.target)) return
    binding.value()
  }
}
export default {
  inserted(el, binding) {
    window.addEventListener('click', listener(el, binding))
  },
  unbind(el, binding) {
    window.removeEventListener('click', listener(el, binding))
  }
}