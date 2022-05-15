import { Fn } from '@vueuse/core'

export const useSharedResizeObserver = (fn: Fn) =>
  createSharedComposable(() => {
    const {width} = useWindowSize()
    watch(width, fn)
  })
