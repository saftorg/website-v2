<script lang="ts">
import {
  watch,
  ref,
  h,
  defineComponent,
  PropType,
  getCurrentInstance,
} from 'vue'
import { tryOnMounted } from '@vueuse/core'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default defineComponent({
  props: {
    delay: { type: Number, default: 0 },
    duration: {
      type: Number,
      default: 0.7,
    },
    as: { type: String, default: 'h1' },
    class: { type: String, default: '' },
    triggeredByScroll: Boolean,
    appearOnce: Boolean,
    isVisible: { type: Boolean, default: true },
    onCompleteEnter: {
      type: Function as PropType<() => void>,
      default: () => {},
    },
    onCompleteExit: {
      type: Function as PropType<() => void>,
      default: () => {},
    },
    characterSize: {
      type: String,
      default: '150%',
    },
    rotate: {
      type: Number,
      default: 35,
    },
    staggerDelay: {
      type: Number,
      default: 0.03,
    },
  },

  setup(props, { slots, attrs }) {
    const uid = `data-split-${getCurrentInstance()?.uid}`
    const slotDefault = slots.default!
    const visibility = ref<'visible' | 'hidden'>('hidden')

    const enterAnimation = () => {
      visibility.value = 'visible'
      gsap.fromTo(
        `[${uid}] .char`,
        {
          rotation: props.rotate,
          y: props.characterSize,
        },
        {
          rotation: 0,
          y: 0,
          stagger: props.staggerDelay,
          delay: props.delay,
          duration: props.duration,
          ease: 'expo',
          scrollTrigger: props.triggeredByScroll ? `[${uid}]` : undefined,
          onComplete: props.onCompleteEnter,
        }
      )
    }

    const exitAnimation = () => {
      gsap.fromTo(
        `[${uid}] .char`,
        {
          rotation: 0,
          y: 0,
        },
        {
          rotation: -props.rotate,
          y: `-${props.characterSize}`,
          stagger: { amount: props.staggerDelay, from: 'end' },
          delay: props.delay,
          duration: props.duration - 0.2,
          ease: 'power2',
          onComplete: () => {
            props.onCompleteExit()
            visibility.value = 'hidden'
          },
        }
      )
    }

    tryOnMounted(() => {
      if (props.isVisible) {
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

    function generateHFromSlot(children: any) {
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
                      class: 'char inline-block',
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
          [`${uid}`]: '',
          style: { ['white-space']: 'pre-wrap', visibility: visibility.value },
          ...attrs,
        },

        generateHFromSlot(slotDefault())
      )
  },
})
</script>
