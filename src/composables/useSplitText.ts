import { Ref } from 'vue'
import SplitType from 'split-type'

type ElementSplitType = 'lines' | 'words' | 'chars'
type Splitting =
  | ElementSplitType
  | `${ElementSplitType} ${ElementSplitType}`
  | `${ElementSplitType} ${ElementSplitType} ${ElementSplitType}`

export const useSplitText = (
  target:
    | Ref<HTMLElement>
    | string
    | Ref<HTMLElement | undefined>
    | Ref<HTMLElement | null>,
  elAnimation: (arg0: HTMLElement) => gsap.core.Timeline | gsap.core.Tween,
  splitBy: Splitting = 'lines words',
  wrapping?: { wrapType: keyof HTMLElementTagNameMap; wrapClass: string }
) => {
  const instance = ref<SplitType>()
  const innerSpanTexts = ref<Record<string, string>>({})
  const isSplitByWord = splitBy.includes('words')

  const animate = () => {
    if (isSplitByWord) {
      instance.value!.words!.forEach((word) => {
        if (innerSpanTexts.value[word.textContent!]) {
          word.classList.add(...innerSpanTexts.value[word.textContent!].split(' ') ?? '')
        }
      })
    }

    const length = instance.value!.lines!.length
    instance.value!.lines?.forEach((line, index) => {
      if (wrapping) {
        const { wrapType, wrapClass } = wrapping
        const wrapEl = document.createElement(wrapType)
        wrapEl.classList.add(...wrapClass.split(' '))
        line.parentNode?.appendChild(wrapEl)
        wrapEl.appendChild(line)
      }
      if (index === length - 1)
        elAnimation(line).eventCallback('onComplete', () => {
          // instance.value!.revert()
        })
      else elAnimation(line)
    })
  }

  tryOnMounted(() => {
    let unRefedTarget: HTMLElement | null = null

    if (typeof target !== 'string') unRefedTarget = unrefElement(target)!
    else unRefedTarget = document.querySelector(target)! as HTMLElement

    if (isSplitByWord) {
      const innerSpans = unRefedTarget.querySelectorAll('span')
      innerSpans.forEach((spanEl) => {
        if (spanEl.textContent) {
          spanEl.textContent.split(' ').flatMap((word) => {
            innerSpanTexts.value = {
              ...innerSpanTexts.value,
              [word]: spanEl.className,
            }
          })
        }
      })
    }

    instance.value = new SplitType(unRefedTarget, { types: splitBy })
    animate()

    const { width } = useWindowSize()
    watch(width, () => {
      instance.value?.split({})
      animate()
    })
  })
}
