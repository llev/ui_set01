export function slide(node, isOpen) {
// Initialise
  let initialHeight = node.offsetHeight
  node.style.height = isOpen ? 'auto' : 0
  node.style.overflow = 'hidden'

  return {
    update: (isOpen) => {
      node.style.height = isOpen ? 'auto' : 0
    }
  }
}