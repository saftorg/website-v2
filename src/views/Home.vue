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
const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils

import Hero from './Head.vue'

import {
  tryOnMounted,
  useBreakpoints,
  breakpointsTailwind,
  useTimeoutFn,
} from '@vueuse/core'

import { ref, nextTick } from 'vue'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

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
  const scroller = document.querySelector('[data-scroll-container]')!
  const scroll = new LocomotiveScroll({
    el: scroller,
    smooth: true,
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
    scroller: scroller,
  })

  gsap.registerPlugin(ScrollTrigger)

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#head-section',
      start: 'top top',
      endTrigger: '#about-section',
      end: 'bottom bottom',
      scrub: 1,
    },
  })
  ScrollTrigger.addEventListener('refresh', () => scroll.update())
  // init instanced mesh matrix
  instances.forEach((geometry, i) => {
    const { position, scale } = geometry
    dummyO.position.copy(position)
    dummyO.scale.set(scale, scale, scale)
    dummyO.updateMatrix()
    imesh.value?.mesh!.setMatrixAt(i, dummyO.matrix)
  })

  imesh.value!.mesh!.instanceMatrix.needsUpdate = true

  const lightVal = light.value?.light
  const cameraVal = camera.value?.camera.position
  const sceneVal = scene.value?.scene.rotation
  renderer.value?.onBeforeRender(() => {
    const { pointer } = renderer.value!.three
    lightVal.position.copy(pointer!.positionV3)
    lightVal.position.z = 10
    sceneVal.z += 0.001
  })
  tl.to(cameraVal!, {
    x: '+=10',
  })
  tl.to(
    '[data-scroll-container]',
    {
      backgroundColor: '#4F46E5',
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
  tl.to(cameraVal!, {
    x: '+=10',
    y: '-=10',
  })
  tl.to(
    sceneVal!,
    {
      x: '+=0.5',
    },
    '<0'
  )

  useTimeoutFn(() => {
    ScrollTrigger.refresh()
  }, 300)
})
</script>

<template>
  <div data-scroll-container class="bg-purple-400">
    <hero id="home" />
    <div
      data-scroll
      data-scroll-sticky
      data-scroll-target="#home"
      class="absolute top-0 z-[-1]"
    >
      <Renderer ref="renderer" alpha antialias resize="window">
        <Camera ref="camera" :position="{ z: 1000 }" :fov="3" />
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
