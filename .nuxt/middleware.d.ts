import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module '/Users/stevenjohn/Documents/Projects/SAFT/website-v2/node_modules/nuxt3/dist/pages/runtime/composables' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}