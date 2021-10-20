<script lang="ts">
import {
  watch,
  ref,
  computed,
  h,
  defineComponent,
  CSSProperties,
  PropType,
} from 'vue'
import {
  tryOnMounted,
  useIntersectionObserver,
  useTimeoutFn,
} from '@vueuse/core'

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
    onCompleteEnter: {
      type: Function as PropType<() => {}>,
      default: () => {},
    },
    onCompleteExit: { type: Function as PropType<() => {}>, default: () => {} },
    characterSize: {
      type: String,
      default: '40px',
    },
    rotate: {
      type: Number,
      default: 20,
    },
    staggerDelay: {
      type: Number,
      default: 13,
    },
  },

  setup(props, { slots, attrs }) {
    const hasAppeared = ref(false)
    const el = ref<HTMLElement>()
    const state = ref<'initial' | 'enter' | 'exit'>('initial')
    const visibility = ref<'hidden' | 'visible'>('hidden')
    const slotDefault = slots.default!

    function getChildrenTextContent(children: any): string {
      return children
        .map((node: any) => {
          return typeof node.children === 'string'
            ? node.children
            : Array.isArray(node.children)
            ? getChildrenTextContent(node.children)
            : ''
        })
        .join('')
    }

    const sentenceLength = getChildrenTextContent(slotDefault()).length

    const charStyle = (index: number) => {
      const transition = `transform ${
        props.duration
      }ms cubic-bezier(0.83, 0, 0.17, 1) ${
        props.delay + index * props.staggerDelay
      }ms`
      return computed(() =>
        state.value == 'initial'
          ? ({
              transform: `translateY(calc(1ch + ${props.characterSize})) rotate(${props.rotate}deg)`,
              transition,
              visibility: visibility.value,
            } as CSSProperties)
          : state.value == 'enter'
          ? ({
              transform: `translateY(0px) rotate(0deg)`,
              transition,
              visibility: visibility.value,
            } as CSSProperties)
          : ({
              transform: `translateY(calc(-1ch - ${props.characterSize})) rotate(-${props.rotate}deg)`,
              transition,
              visibility: visibility.value,
            } as CSSProperties)
      )
    }


    const enterAnimation = () => {
      visibility.value = 'visible'
      state.value = 'enter'
      useTimeoutFn(
        props.onCompleteEnter,
        props.duration + props.delay + sentenceLength * props.staggerDelay
      )
    }

    const exitAnimation = () => {
      state.value = 'exit'
      useTimeoutFn(() => {
        props.onCompleteExit()
        visibility.value = 'hidden'
        state.value = 'initial'
      }, props.duration + props.delay + sentenceLength * props.staggerDelay)
    }

    watch(
      () => props.isVisible,
      (val) => {
        if (val) enterAnimation()
        else exitAnimation()
      }
    )

    tryOnMounted(() => {
      if (props.triggeredByScroll) {
        useIntersectionObserver(el, ([{ isIntersecting }]) => {
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
    })

    function generateHFromSlot(children: any) {
      let totalCount = [0]
      return children.map((node: any) => {
        if (typeof node.children === 'string') {
          return node.children
            .trim()
            .split(' ')
            .map((word: string) =>
              h('span', { class: 'clip inline-block' }, [
                [...word].map((letter) =>
                  h(
                    'span',
                    {
                      class: 'inline-block',
                      style: charStyle(totalCount[0]++).value,
                    },
                    letter
                  )
                ),
                h('span', {}, ' '),
              ])
            )
        } else if (node.type == 'br') return h('br')
        else if (Array.isArray(node.children)) {
          return generateHFromSlot(node.children)
        }
      })
    }

    return () =>
      h(
        props.as,
        {
          class: props.class,
          style: { ['white-space']: 'pre-wrap' },
          ref: el,
          ...attrs,
        },

        generateHFromSlot(slotDefault())
      )
  },
})
</script>
