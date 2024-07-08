const vw = ref(document.documentElement.clientWidth)
const vh = ref(document.documentElement.clientHeight)

document.addEventListener('resize', () => {
  vw.value = document.documentElement.clientWidth
  vh.value = document.documentElement.clientHeight
})

export default function useViewport() {
  return {
    vw,
    vh
  }
}