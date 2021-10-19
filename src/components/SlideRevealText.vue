<script lang="ts">
import { watch, ref, h, defineComponent, getCurrentInstance } from 'vue'
import { tryOnMounted, useIntersectionObserver } from '@vueuse/core'
import { useMotion } from '@vueuse/motion'

export default defineComponent({
  props: {
    delay: { type: Number, default: 0 },
    duration: {
      type: Number,
      default: 400,
    },
    as: { type: String, default: 'h1' },
    class: { type: String, default: '' },
    triggeredByScroll: Boolean,
    appearOnce: Boolean,
    isVisible: { type: Boolean, default: true },
    onCompleteEnter: Function,
    onCompleteExit: Function,
    characterSize: {
      type: Number,
      default: 40,
    },
    rotate: {
      type: Number,
      default: 15,
    },
    staggerDelay: {
      type: Number,
      default: 13,
    },
  },

  setup(props, { slots, attrs }) {
    const hasAppeared = ref(false)
    const uid = `data-split-${getCurrentInstance()?.uid}`

    tryOnMounted(() => {
      const el = document.querySelector(`[${uid}]`)
      const variants = Array.from(
        document.querySelectorAll(`[${uid}] .char`)
      ).map((elChar, index) => {
        const { variant } = useMotion(elChar as HTMLElement, {
          initial: {
            y: props.characterSize,
            rotate: props.rotate,
            transition: {
              onComplete: () => {
                el!.classList.remove('invisible')
              },
            },
          },
          enterIn: {
            y: 0,
            rotate: 0,
            transition: {
              delay: props.delay + index * props.staggerDelay,
              ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
              duration: props.duration,
              onComplete: () => {
                if (props.onCompleteEnter) props.onCompleteEnter()
              },
            },
          },
          exit: {
            y: -props.characterSize,
            rotate: -props.rotate,
            transition: {
              delay: props.delay + index * props.staggerDelay,
              ease: 'cubic-bezier(0.83, 0, 0.17, 1)',
              duration: props.duration,
              onComplete: () => {
                if (props.onCompleteExit) props.onCompleteExit()
                el!.classList.add('invisible')
                variant.value = 'initial'
              },
            },
          },
        })

        return variant
      })

      const enterAnimation = () =>
        variants.forEach((variant) => {
          variant.value = 'enterIn'
        })

      const exitAnimation = () =>
        variants.forEach((variant) => {
          variant.value = 'exit'
        })

      if (props.triggeredByScroll) {
        useIntersectionObserver(el as HTMLElement, ([{ isIntersecting }]) => {
          el!.classList.remove('invisible')
          if (
            (isIntersecting && !hasAppeared.value) ||
            (isIntersecting && !props.appearOnce)
          ) {
            if (props.appearOnce) hasAppeared.value = true
            enterAnimation()
          }
        })
      } else if (props.isVisible) {
        enterAnimation()
      }

      watch(
        () => props.isVisible,
        (val) => {
          if (val) enterAnimation()
          else exitAnimation()
        }
      )
    })

    function getChildrenTextContent(children: any) {
      return children.map((node: any) => {
        return typeof node.children === 'string'
          ? node.children
              .trim()
              .split(' ')
              .map((words: string) => [
                h(
                  'span',
                  { class: 'clip inline-block' },
                  [...words].map((letter) =>
                    h('span', { class: 'char inline-block' }, letter)
                  )
                ),
                h('span', {}, ' '),
              ])
          : node.type == 'br'
          ? h('br')
          : Array.isArray(node.children) &&
            getChildrenTextContent(node.children)
      })
    }

    return () =>
      h(
        props.as,
        {
          class: props.class,
          [`${uid}`]: '',
          ...attrs,
        },

        getChildrenTextContent(slots.default())
      )
  },
})
</script>
