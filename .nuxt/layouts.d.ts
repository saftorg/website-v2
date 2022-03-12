import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module '/Users/stevenjohn/Documents/Projects/SAFT/website-v2/node_modules/nuxt3/dist/pages/runtime/composables' {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}