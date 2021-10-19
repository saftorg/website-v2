<script lang="ts">
import { defineComponent, h, VNode, VNodeArrayChildren } from 'vue'
export default defineComponent({
  setup(_, { slots }) {
    function getChildrenTextContent(children: any): string {
      return children
        .map((node: any) => {
          console.log(node.children)
          return typeof node.children === 'string'
            ? node.children
            : Array.isArray(node.children)
            ? getChildrenTextContent(node.children)
            : ''
        })
        .join('')
    }
    return () =>
      h(
        'div',
        {},
        [...getChildrenTextContent(slots.default())].map((letter) =>
          h('span', { class: 'inline-block clip' }, letter)
        )
      )
  },
})
</script>
