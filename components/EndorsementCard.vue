<script setup lang="ts">
// workaround for edge case bug
import { unref as _unref } from 'vue';

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
});

const mainStore = useMainStore();
</script>

<template>
  <article class="grid relative grid-cols-12 h-full isolate">
    <div
      id="background"
      class="
        transition
        duration-500
        backdrop-blur-3xl
        w-full
        h-full
        [@supports(backdrop-filter:blur(0))]:bg-white/30
        shadow-2xl
        col-start-1
        md:col-start-2
        col-end-[-1]
        md:mt-[2vw]
        mt-[8vw]
        row-start-1 row-end-2
        z-0
      "
    ></div>
    <div
      class="
        absolute
        col-start-2 col-end-12
        h-[45%]
        md:col-start-1 md:col-end-8 md:h-[97%]
        row-start-1
        w-full
        isolate
        z-[1]
        shadow-2xl
      "
    >
      <img
        :src="props.src"
        :alt="props.alt"
        class="object-cover absolute w-full h-full z-[1]"
      />
      <div
        class="
          absolute
          w-full
          h-full
          bg-gradient-to-b
          md:bg-gradient-to-r
          from-transparent
          to-black/70
          z-[2]
        "
      ></div>
    </div>
    <div
      class="
        col-start-2 col-end-12
        mt-[55%]
        md:col-start-6 md:col-end-12 md:self-center md:mt-[2vw]
        row-start-1
        text-left
        z-[2]
      "
    >
      <h3>
        <slot name="name" />
      </h3>
      <h4>
        <slot name="sub-title" />
      </h4>
      <p>
        <slot name="body" />
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@supports not (backdrop-filter: blur(0)) {
  #background {
    background-color: v-bind('mainStore.bgColor') !important;
  }
}

h3 {
  @apply text-[8.3vw];
  @apply font-extrabold;
  @apply leading-none;
  @apply mb-2;
}

h4 {
  @apply text-[4.3vw];
  @apply font-semibold;
  @apply uppercase;
  @apply leading-tight;
  @apply mb-[5vw];
}

p {
  @apply text-[4.5vw];
}

@screen lg {
  h3 {
    @apply text-[3.3vw];
    @apply leading-tight;
  }

  h4 {
    @apply text-[1.4vw];
    @apply tracking-[0.05vw];
    @apply mb-[2vw];
  }

  p {
    @apply text-[1.5vw];
  }
}
</style>
