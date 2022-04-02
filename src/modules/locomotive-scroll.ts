import LocomotiveScroll from 'locomotive-scroll'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app, router, isClient }) => {
  if (isClient)
    app.provide('LocomotiveScroll', () => new LocomotiveScroll)
}
