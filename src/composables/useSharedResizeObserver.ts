import { Fn } from "@vueuse/core";

export const useSharedResizeObserver = (fn: Fn) => createSharedComposable(useEventListener(window, 'resize', fn))
