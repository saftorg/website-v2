<script setup lang="ts">
import {
  AmbientLight,
  PointLight,
  SphereGeometry,
  StandardMaterial,
  InstancedMesh,
  Renderer,
  Camera,
  Scene,
  EffectComposer,
  RenderPass,
} from 'troisjs'
import { Object3D, MathUtils, Vector3 } from 'three'

import Hero from './Head.vue'

import {
  tryOnMounted,
  useBreakpoints,
  breakpointsTailwind,
  useTimeoutFn,
} from '@vueuse/core'

import { ref } from 'vue'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'
import { autoInit } from 'butter-slider'

gsap.registerPlugin(ScrollTrigger)

const renderer = ref()
const camera = ref()
const scene = ref()
const imesh = ref()
const light = ref()
const instances: {
  position: Vector3
  scale: number
}[] = [
  { position: new Vector3(20, 5, 0), scale: 0.3 },
  { position: new Vector3(30, 15, 20), scale: 1 },
  { position: new Vector3(-15, -20, 5), scale: 1 },
  { position: new Vector3(-5, -10, 0), scale: 0.3 },
]
const dummyO = new Object3D()

// const menu = useStore(isMenuOpen)
// const mouse = reactive(usePointer())
const breakpoints = useBreakpoints(breakpointsTailwind)
const isSmallScreen = breakpoints.smaller('md')

tryOnMounted(async () => {
  autoInit()
  const scroller = document.querySelector('[data-scroll-container]')!
  const scroll = new LocomotiveScroll({
    el: scroller,
    smooth: true,
    tablet: { smooth: true },
    reloadOnContextChange: true,
  })

  instances.forEach((geometry, i) => {
    const { position, scale } = geometry
    dummyO.position.copy(position)
    dummyO.scale.set(scale, scale, scale)
    dummyO.updateMatrix()
    imesh.value?.mesh!.setMatrixAt(i, dummyO.matrix)
  })

  imesh.value!.mesh!.instanceMatrix.needsUpdate = true

  const cameraVal = camera.value?.camera.position
  const sceneVal = scene.value?.scene.rotation
  renderer.value?.onBeforeRender(() => {
    sceneVal.z += 0.001
  })

  scroll.on('scroll', ScrollTrigger.update)
  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      return arguments.length
        ? scroll.scrollTo(value, 0, 0)
        : scroll.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }
    },
    pinType: (scroller as HTMLDivElement).style.transform
      ? 'transform'
      : 'fixed',
  })

  ScrollTrigger.defaults({
    immediateRender: false,
  })

  gsap.fromTo(
    '.zoom-in',
    {
      scale: 0,
      ease: 'power.out',
      duration: 0.5,
      scrollTrigger: {
        scroller,
        trigger: '.zoom-in',
      },
    },
    {
      scale: 1,
    }
  )

  let tl = gsap.timeline({
    ease: 'power.inOut',
    scrollTrigger: {
      scroller,
      trigger: '#head-section',
      endTrigger: '#areopagus-section',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
    },
  })

  tl.to(scroller, {
    backgroundColor: '#4F46E5',
  })

  tl.to(
    '#bg-circle',
    {
      backgroundColor: '#FFFFFF',
    },
    '<0'
  )

  tl.to(
    cameraVal!,
    {
      x: '+=10',
    },
    '<0'
  )

  tl.to(
    sceneVal!,
    {
      y: '+=0.4',
    },
    '<0'
  )

  tl.to(scroller, {
    backgroundColor: '#6D28D9',
  })

  tl.to(
    '#bg-circle',
    {
      backgroundColor: '#EF4444',
    },
    '<0'
  )

  tl.to(
    cameraVal!,
    {
      x: '+=10',
      y: '-=10',
    },
    '<0'
  )

  tl.to(
    sceneVal!,
    {
      x: '+=0.5',
    },
    '<0'
  )

  ScrollTrigger.addEventListener('refresh', () => scroll.update())

  useTimeoutFn(() => {
    ScrollTrigger.refresh()
  }, 1000)
})
</script>

<template>
  <div data-scroll-container class="bg-purple-500">
    <hero id="home" />
    <div
      class="
        bg-blue-500
        opacity-20
        h-[70vw]
        w-[70vw]
        absolute
        top-0
        rounded-[50%]
        blur-[64px]
        z-[-2]
      "
      id="bg-circle"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#home"
    ></div>
    <div
      v-if="!isSmallScreen"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#home"
      class="absolute top-0 z-[-1]"
    >
      <Renderer ref="renderer" alpha antialias resize="window">
        <Camera ref="camera" :position="{z: 90}" :fov="30" />
        <Scene ref="scene">
          <ambient-light color="#ffffff" />
          <point-light
            ref="light"
            color="#a78bfa"
            :position="{ y: 20 }"
            :intensity="0.7"
          />
          <instanced-mesh ref="imesh" :count="instances.length">
            <sphere-geometry
              :radius="10"
              :width-segments="50"
              :height-segments="40"
            />
            <standard-material color="#aaaaaa" />
          </instanced-mesh>
        </Scene>
        <effect-composer>
          <render-pass />
        </effect-composer>
      </Renderer>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
