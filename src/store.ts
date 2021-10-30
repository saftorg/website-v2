import { atom, action } from 'nanostores'

export const isMenuOpen = atom(false)
export const toggleIsMenuOpen = action(isMenuOpen, 'toggle', (store) => {
  store.set(!store.get())
  return store.get()
})
