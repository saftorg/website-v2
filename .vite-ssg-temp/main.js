"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var troisjs = require("troisjs");
var three = require("three");
var core = require("@vueuse/core");
var gsap = require("gsap");
var ScrollTrigger = require("gsap/dist/ScrollTrigger");
var LocomotiveScroll = require("locomotive-scroll");
var butterSlider = require("butter-slider");
var imagesLoaded = require("imagesloaded");
var singlePage = require("vite-ssg/single-page");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var gsap__default = /* @__PURE__ */ _interopDefaultLegacy(gsap);
var ScrollTrigger__default = /* @__PURE__ */ _interopDefaultLegacy(ScrollTrigger);
var LocomotiveScroll__default = /* @__PURE__ */ _interopDefaultLegacy(LocomotiveScroll);
var imagesLoaded__default = /* @__PURE__ */ _interopDefaultLegacy(imagesLoaded);
var _imports_0 = "/assets/ep-62.f0824bd2.jpg";
var _imports_1 = "/assets/Event-Poster.4a2cadbd.png";
var _imports_2 = "/assets/jacob-varghese.9d7e21f2.jpg";
var _imports_3 = "/assets/ankit-nayak.5ed0859f.jpg";
var _imports_4 = "/assets/steven-john.cfd5273d.jpg";
var _imports_5 = "/assets/william-lane-craig.221aefca.jpg";
var _imports_6 = "/assets/frank-turek.e7e79c88.jpg";
var _imports_7 = "/assets/sean-mcdowell.06364819.jpg";
var _imports_8 = "/assets/alisa-childers.87b2f22d.jpg";
gsap__default["default"].registerPlugin(ScrollTrigger__default["default"]);
const _sfc_main$6 = vue.defineComponent({
  props: {
    delay: { type: Number, default: 0 },
    duration: {
      type: Number,
      default: 1.2
    },
    as: { type: String, default: "h1" },
    class: { type: String, default: "" },
    triggeredByScroll: Boolean,
    appearOnce: Boolean,
    isVisible: { type: Boolean, default: true },
    onCompleteEnter: {
      type: Function,
      default: () => {
      }
    },
    onCompleteExit: {
      type: Function,
      default: () => {
      }
    },
    characterSize: {
      type: String,
      default: "150%"
    },
    rotate: {
      type: Number,
      default: 15
    },
    staggerDelay: {
      type: Number,
      default: 0.03
    }
  },
  setup(props, { slots, attrs }) {
    var _a;
    const uid = `data-split-${(_a = vue.getCurrentInstance()) == null ? void 0 : _a.uid}`;
    const slotDefault = slots.default;
    const visibility = vue.ref("hidden");
    let inTimeline = gsap__default["default"].timeline({
      defaults: {
        duration: props.duration,
        delay: props.delay,
        ease: "expo"
      }
    });
    let outTimeline = gsap__default["default"].timeline({
      defaults: {
        duration: props.duration - 0.5,
        delay: props.delay,
        ease: "power2"
      }
    });
    const selector = `[${uid}] .char`;
    const enterAnimation = () => {
      visibility.value = "visible";
      if (outTimeline.isActive()) {
        outTimeline.kill();
      }
      inTimeline = gsap__default["default"].timeline({
        defaults: {
          duration: props.duration,
          delay: props.delay,
          ease: "expo"
        }
      });
      inTimeline.fromTo(selector, {
        rotate: props.rotate,
        y: props.characterSize
      }, {
        rotate: 0,
        y: 0,
        stagger: props.staggerDelay,
        scrollTrigger: props.triggeredByScroll ? `[${uid}]` : void 0,
        onComplete: props.onCompleteEnter
      });
    };
    const exitAnimation = () => {
      if (inTimeline.isActive()) {
        inTimeline.kill();
      }
      outTimeline = gsap__default["default"].timeline({
        defaults: {
          duration: props.duration - 0.5,
          delay: props.delay,
          ease: "power2"
        }
      });
      outTimeline.to(selector, {
        rotate: -props.rotate + 5,
        y: `-${props.characterSize}`,
        stagger: { amount: props.staggerDelay, from: "end" },
        onComplete: () => {
          props.onCompleteExit();
          visibility.value = "hidden";
        }
      });
    };
    core.tryOnMounted(() => {
      if (props.isVisible) {
        enterAnimation();
      }
      vue.watch(() => props.isVisible, (val) => {
        if (val)
          enterAnimation();
        else
          exitAnimation();
      });
    });
    function generateHFromSlot(children) {
      return children.map((node) => {
        if (typeof node.children === "string") {
          return node.children.trim().split(" ").map((word) => vue.h("span", { class: "clip inline-block" }, [
            [...word].map((letter) => vue.h("span", {
              class: "char inline-block will-change-transform"
            }, letter)),
            vue.h("span", {}, " ")
          ]));
        } else if (node.type == "br")
          return vue.h("br");
        else if (Array.isArray(node.children)) {
          return generateHFromSlot(node.children);
        }
      });
    }
    return () => vue.h(props.as, __spreadValues({
      class: props.class,
      [`${uid}`]: "",
      style: {
        ["white-space"]: "pre-wrap",
        visibility: visibility.value
      }
    }, attrs), generateHFromSlot(slotDefault()));
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/SlideRevealText.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var Head_vue_vue_type_style_index_0_scoped_true_lang = "html.has-scroll-smooth[data-v-f9fde618] {\n  overflow: hidden;\n}\nhtml.has-scroll-dragging[data-v-f9fde618] {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.has-scroll-smooth body[data-v-f9fde618] {\n  overflow: hidden;\n}\n.has-scroll-smooth [data-scroll-container][data-v-f9fde618] {\n  min-height: 100vh;\n}\n[data-scroll-direction=horizontal] [data-scroll-container][data-v-f9fde618] {\n  height: 100vh;\n  display: inline-block;\n  white-space: nowrap;\n}\n[data-scroll-direction=horizontal] [data-scroll-section][data-v-f9fde618] {\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  height: 100%;\n}\n.c-scrollbar[data-v-f9fde618] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 11px;\n  height: 100%;\n  transform-origin: center right;\n  transition: transform 0.3s, opacity 0.3s;\n  opacity: 0;\n}\n.c-scrollbar[data-v-f9fde618]:hover {\n  transform: scaleX(1.45);\n}\n.c-scrollbar[data-v-f9fde618]:hover, .has-scroll-scrolling .c-scrollbar[data-v-f9fde618], .has-scroll-dragging .c-scrollbar[data-v-f9fde618] {\n  opacity: 1;\n}\n[data-scroll-direction=horizontal] .c-scrollbar[data-v-f9fde618] {\n  width: 100%;\n  height: 10px;\n  top: auto;\n  bottom: 0;\n  transform: scaleY(1);\n}\n[data-scroll-direction=horizontal] .c-scrollbar[data-v-f9fde618]:hover {\n  transform: scaleY(1.3);\n}\n.c-scrollbar_thumb[data-v-f9fde618] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.5;\n  width: 7px;\n  border-radius: 10px;\n  margin: 2px;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.has-scroll-dragging .c-scrollbar_thumb[data-v-f9fde618] {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n[data-scroll-direction=horizontal] .c-scrollbar_thumb[data-v-f9fde618] {\n  right: auto;\n  bottom: 0;\n}\n.img[data-v-f9fde618] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.button[data-v-f9fde618] {\n  display: flex;\n  border-width: 2px;\n  padding-left: calc(1.75 * 14 * 100vw / 1800);\n  padding-right: calc(1.75 * 14 * 100vw / 1800);\n  padding-top: calc(0.75 * 14 * 100vw / 1800);\n  padding-bottom: calc(0.75 * 14 * 100vw / 1800);\n  font-family: Joyride STD, sans-serif;\n  text-transform: uppercase;\n  align-items: center;\n}\n.button > svg[data-v-f9fde618] {\n  margin-right: calc(0.375 * 14 * 100vw / 1800);\n  width: 8vw;\n}\n@media (min-width: 768px) {\n.button > svg[data-v-f9fde618] {\n    width: calc(2.5 * 14 * 100vw / 1800);\n}\n}\n.slider[data-v-f9fde618] {\n  width: 100vw;\n  overflow-x: hidden;\n  margin-top: calc(3.5 * 14 * 100vw / 1800);\n  margin-bottom: calc(3.5 * 14 * 100vw / 1800);\n}\n@media (min-width: 768px) {\n.slider[data-v-f9fde618] {\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n}\n.slider .slides[data-v-f9fde618] {\n  display: flex;\n  overflow-x: visible;\n}\n.slider .slides[data-v-f9fde618] > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(calc(8 * 14 * 100vw / 1800) * var(--tw-space-x-reverse));\n  margin-left: calc(calc(8 * 14 * 100vw / 1800) * calc(1 - var(--tw-space-x-reverse)));\n}\n.slider .slides[data-v-f9fde618] {\n  margin-left: calc(3.5 * 14 * 100vw / 1800);\n  margin-right: calc(3.5 * 14 * 100vw / 1800);\n}\n@media (min-width: 768px) {\n.slider .slides[data-v-f9fde618] {\n    margin-left: calc(10 * 14 * 100vw / 1800);\n    margin-right: calc(10 * 14 * 100vw / 1800);\n}\n}\n.slider .slides[data-v-f9fde618] {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.slider .slides.active[data-v-f9fde618] {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.slider .slides .slide[data-v-f9fde618] {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n  padding-left: calc(5 * 14 * 100vw / 1800);\n  padding-right: calc(5 * 14 * 100vw / 1800);\n}\n@media (min-width: 768px) {\n.slider .slides .slide[data-v-f9fde618] {\n    padding-top: calc(2.5 * 14 * 100vw / 1800);\n    padding-bottom: calc(2.5 * 14 * 100vw / 1800);\n}\n.slider .slides .slide[data-v-f9fde618] {\n    padding-left: 0px;\n}\n.slider .slides .slide[data-v-f9fde618] {\n    padding-right: calc(4 * 14 * 100vw / 1800);\n}\n}\n.slider .slides .slide[data-v-f9fde618] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: grid;\n  grid-template-rows: repeat(4,-webkit-max-content);\n  grid-template-rows: repeat(4,max-content);\n  grid-template-columns: auto;\n}\n@media (min-width: 768px) {\n.slider .slides .slide[data-v-f9fde618] {\n    grid-template-rows: repeat(3,-webkit-max-content);\n    grid-template-rows: repeat(3,max-content);\n}\n.slider .slides .slide[data-v-f9fde618] {\n    grid-template-columns: -webkit-max-content auto;\n    grid-template-columns: max-content auto;\n}\n.slider .slides .slide[data-v-f9fde618] {\n    gap: 0px;\n}\n}\n.slider .slides .slide div[data-v-f9fde618] {\n  width: 85vw;\n  height: 50vw;\n}\n@media (min-width: 768px) {\n.slider .slides .slide div[data-v-f9fde618] {\n    margin-right: calc(1.25 * 14 * 100vw / 1800);\n}\n.slider .slides .slide div[data-v-f9fde618] {\n    width: calc(20 * 14 * 100vw / 1800);\n}\n.slider .slides .slide div[data-v-f9fde618] {\n    height: 110%;\n}\n}\n.slider .slides .slide div[data-v-f9fde618] {\n  background-size: cover;\n  background-position: center;\n  margin-bottom: calc(4 * 14 * 100vw / 1800);\n}\n@media (min-width: 768px) {\n.slider .slides .slide div[data-v-f9fde618] {\n    margin-bottom: 0px;\n}\n.slider .slides .slide div[data-v-f9fde618] {\n    margin-left: calc(calc(1.25 * 14 * 100vw / 1800) * -1);\n}\n}\n.slider .slides .slide div[data-v-f9fde618] {\n  grid-row-start: 1;\n}\n@media (min-width: 768px) {\n.slider .slides .slide div[data-v-f9fde618] {\n    grid-row: 1 / -1;\n}\n}\n.slider .slides .slide div[data-v-f9fde618] {\n  grid-column: span 1 / span 1;\n}\n@media (min-width: 768px) {\n.slider .slides .slide div[data-v-f9fde618] {\n    grid-column-start: 1;\n}\n.slider .slides .slide div[data-v-f9fde618] {\n    grid-column-end: 2;\n}\n}\n.slider .slides .slide div[data-v-f9fde618] {\n  align-self: center;\n}\n.slider .slides .slide h3[data-v-f9fde618] {\n  grid-column-start: 1;\n  grid-row-start: 2;\n}\n@media (min-width: 768px) {\n.slider .slides .slide h3[data-v-f9fde618] {\n    grid-column-start: 2;\n}\n.slider .slides .slide h3[data-v-f9fde618] {\n    grid-row-start: 1;\n}\n}\n.slider .slides .slide h3[data-v-f9fde618] {\n  font-size: 10vw;\n  line-height: 1;\n  margin-bottom: calc(4 * 14 * 100vw / 1800);\n}\n@media (min-width: 768px) {\n.slider .slides .slide h3[data-v-f9fde618] {\n    font-size: calc(3.75* 14 * 100vw / 1800);\n    line-height: 1.1;\n}\n.slider .slides .slide h3[data-v-f9fde618] {\n    margin-bottom: calc(1.25 * 14 * 100vw / 1800);\n}\n}\n.slider .slides .slide h4[data-v-f9fde618] {\n  grid-column-start: 1;\n  grid-row-start: 3;\n}\n@media (min-width: 768px) {\n.slider .slides .slide h4[data-v-f9fde618] {\n    grid-column-start: 2;\n}\n.slider .slides .slide h4[data-v-f9fde618] {\n    grid-row-start: 2;\n}\n}\n.slider .slides .slide h4[data-v-f9fde618] {\n  font-weight: 600;\n  margin-bottom: calc(9 * 14 * 100vw / 1800);\n  font-size: calc(8* 14 * 100vw / 1800);\n  line-height: 1;\n}\n@media (min-width: 768px) {\n.slider .slides .slide h4[data-v-f9fde618] {\n    margin-bottom: calc(3 * 14 * 100vw / 1800);\n}\n.slider .slides .slide h4[data-v-f9fde618] {\n    font-size: calc(1.875* 14 * 100vw / 1800);\n    line-height: calc(2.25* 14 * 100vw / 1800);\n}\n}\n.slider .slides .slide p[data-v-f9fde618] {\n  grid-column-start: 1;\n  grid-row-start: 4;\n}\n@media (min-width: 768px) {\n.slider .slides .slide p[data-v-f9fde618] {\n    grid-column-start: 2;\n}\n.slider .slides .slide p[data-v-f9fde618] {\n    grid-row-start: 3;\n}\n}\n.slider .slides .slide p[data-v-f9fde618] {\n  margin-bottom: calc(5 * 14 * 100vw / 1800);\n}\n@media (min-width: 768px) {\n.slider .slides .slide p[data-v-f9fde618] {\n    margin-bottom: 0px;\n}\n}\n.slider .slides .slide p[data-v-f9fde618] {\n  font-size: calc(6* 14 * 100vw / 1800);\n  line-height: 1.375;\n}\n@media (min-width: 768px) {\n.slider .slides .slide p[data-v-f9fde618] {\n    font-size: calc(1.25* 14 * 100vw / 1800);\n    line-height: calc(1.75* 14 * 100vw / 1800);\n}\n}";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ id: "home" }, _attrs))} data-v-f9fde618><div id="head-section" class="overflow-hidden place-content-center h-screen text-white hero wrapper" data-v-f9fde618>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$6, {
        as: "h1",
        "data-scroll": "",
        class: "col-start-1 col-end-[16]",
        "appear-once": true
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Seeking Answers, Finding Truth. `);
          } else {
            return [
              vue.createTextVNode(" Seeking Answers, Finding Truth. ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="row-start-2 w-[80vw] md:w-screen" data-v-f9fde618> We are a web-based Christian initiative that aims to equip the believer defend their faith so that they may effectively evangelise. </p><div class="row-start-3 flex space-x-f-14 mt-[5.5vw] md:mt-f-10" data-v-f9fde618><a href="#" class="button p" data-v-f9fde618><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f9fde618><path fill-rule="evenodd" clip-rule="evenodd" d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z" fill="currentColor" data-v-f9fde618></path></svg> Listen </a><a href="#" class="button" data-v-f9fde618><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f9fde618><path d="M15 12.3301L9 16.6603L9 8L15 12.3301Z" fill="currentColor" data-v-f9fde618></path></svg></a></div></div><div id="about-section" class="min-h-screen text-white md:mt-f-96" data-v-f9fde618><div class="wrapper md:mt-f-9" data-v-f9fde618><h1 class="col-start-1 col-end-[16] lowercase md:col-end-10" data-v-f9fde618> About Us </h1><p class="col-start-1 col-end-[15] md:col-end-9 mt-f-9" data-v-f9fde618> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl, tempus, eget non interdum ipsum, nascetur scelerisque semper. Urna quam consequat ultrices commodo cursus cursus eu. A sollicitudin at massa vitae aliquet et tortor. Sapien, phasellus auctor non commodo. </p></div><div data-scroll data-scroll-speed="1" class="overflow-hidden wrapper mt-f-48 md:-mt-f-96" data-v-f9fde618><img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="Episode" class="col-span-full md:col-start-[12] md:col-end-[23]" data-v-f9fde618></div><div data-scroll data-scroll-speed="3" class="overflow-hidden wrapper -mt-f-80 md:-mt-f-60" data-v-f9fde618><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="Episode" class="col-start-7 col-end-[15] md:col-start-[18] md:col-end-[24]" data-v-f9fde618></div><div class="wrapper mt-f-40 md:mt-[18vw]" data-v-f9fde618><h2 class="col-span-full md:col-start-[15] md:col-end-[24]" data-v-f9fde618> Sagittis nulla congue duis rutrum ultricies massa. Vitae, semper cras ut orci, integer massa mauris. </h2></div><div data-scroll data-scroll-speed="1" class="overflow-hidden wrapper h-[60vw] md:h-f-96 mt-f-96 md:-mt-f-96" data-v-f9fde618><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="Episode" class="col-start-2 col-end-10 md:col-start-2 md:col-end-6 img" data-v-f9fde618></div><div data-scroll data-scroll-speed="1.6" class="overflow-hidden wrapper h-[60vw] md:h-f-96 mt-[-25vw] md:-mt-f-52" data-v-f9fde618><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="Episode" class="col-start-8 col-end-[16] md:col-start-5 md:col-end-9 img" data-v-f9fde618></div><div data-scroll data-scroll-speed="2" class="overflow-hidden wrapper h-[60vw] md:h-f-96 mt-[-42vw] md:-mt-f-48" data-v-f9fde618><img${serverRenderer.ssrRenderAttr("src", _imports_4)} alt="Episode" class="col-start-1 col-end-9 md:col-end-5 img" data-v-f9fde618></div><div data-scroll data-scroll-speed="2.6" class="wrapper mt-[-18vw] md:-mt-f-40 lg:-mt-f-48 zoom-in" data-v-f9fde618><a class="flex relative justify-center content-center col-start-6 col-end-[16] md:col-start-4 md:col-end-10" data-v-f9fde618><div class="relative -top-1/2 border rounded-[50%] h-[22vw] md:h-f-48 w-screen -rotate-12" data-v-f9fde618></div><p class="absolute -top-f-14 md:-top-f-3.5" data-v-f9fde618>Meet the team</p></a></div><div class="relative z-10 wrapper mt-f-96" data-v-f9fde618><div class="col-start-1 col-end-[15] md:col-end-8 bg-gray-50 -rotate-3 py-f-6" data-v-f9fde618><h2 class="mx-auto w-max text-gray-900 uppercase font-joyride" data-v-f9fde618> Endorsements </h2></div></div><div class="slider" data-butter-container="plip" data-v-f9fde618><div class="slides" data-butter-slidable="plip" data-butter-plip-options="dragSpeed:2,smoothAmount:0.1" data-v-f9fde618><!--[-->`);
      serverRenderer.ssrRenderList(4, (i) => {
        _push(`<div class="slide" data-v-f9fde618><div class="bg-[url(&#39;/src/assets/alisa-childers.jpg&#39;)]" data-v-f9fde618></div><h3 data-v-f9fde618>Alisa Childers</h3><h4 data-v-f9fde618>Another Gospel?</h4><p data-v-f9fde618> Lectus vitae mattis aliquam lorem. Iaculis vestibulum nunc eros, suscipit magna et erat at. Laoreet lacus, vel sit adipiscing massa egestas justo molestie odio. </p></div>`);
      });
      _push(`<!--]--></div></div><div class="wrapper mt-f-44" data-v-f9fde618></div><div class="relative mt-[30vw] md:my-f-96" data-v-f9fde618><div class="absolute z-10 md:inset-x-0 md:top-0 md:left-0 -left-f-12 -top-f-48 md:wrapper" data-v-f9fde618><div class="bg-gray-50 md:col-start-[6] md:col-end-[18] h-[80vw] w-[130vw] md:w-auto md:h-f-80 -rotate-2" data-v-f9fde618></div></div><div class="absolute inset-0 z-20 wrapper" data-v-f9fde618><p class="col-span-full md:col-start-[7] md:col-end-[17] self-center text-gray-800 h3 uppercase text-center text-[8.8vw] leading-none md:text-f-4xl" data-v-f9fde618> Equipping the <span class="font-joyride-wide" data-v-f9fde618>believer</span> to <span class="font-joyride-wide" data-v-f9fde618>defend</span> their <span class="font-joyride-wide" data-v-f9fde618>faith </span><span class="font-joyride-ext" data-v-f9fde618>anytime, anywhere.</span></p></div><div class="hidden md:block" data-v-f9fde618><!--[-->`);
      serverRenderer.ssrRenderList(4, (i) => {
        _push(`<div data-v-f9fde618><h3 data-scroll data-scroll-direction="horizontal"${serverRenderer.ssrRenderAttr("data-scroll-speed", 1 + i * 0.1)} class="overflow-visible w-max text-f-4xl -ml-f-12" data-v-f9fde618>${serverRenderer.ssrInterpolate("SEEKING ANSWERS FINDING TRUTH ".repeat(6))}</h3><h3 data-scroll data-scroll-direction="horizontal"${serverRenderer.ssrRenderAttr("data-scroll-speed", -1 - i * 0.1)} class="overflow-visible w-max text-f-4xl -ml-f-12 font-joyride-out" data-v-f9fde618>${serverRenderer.ssrInterpolate("SEEKING ANSWERS FINDING TRUTH ".repeat(6))}</h3></div>`);
      });
      _push(`<!--]--></div></div><div class="wrapper mt-[120vw] md:mt-f-32" data-v-f9fde618></div></div><div id="podcast-section" class="text-white mt-f-24" data-v-f9fde618><div data-scroll class="wrapper mt-f-9" data-v-f9fde618><h1 class="col-span-full lowercase md:col-end-10" data-v-f9fde618>Podcast</h1><p class="col-span-full md:col-end-8 mt-f-9" data-v-f9fde618> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl, tempus, eget non interdum ipsum, nascetur scelerisque semper. Urna quam consequat ultrices commodo cursus cursus eu. A sollicitudin at massa vitae aliquet et tortor. Sapien, phasellus auctor non commodo. </p></div><div data-scroll data-scroll-speed="1" class="overflow-hidden wrapper h-[50vw] md:h-[24vw] mt-f-96 md:-mt-f-96" data-v-f9fde618><img${serverRenderer.ssrRenderAttr("src", _imports_5)} alt="Episode" class="col-start-1 col-end-7 md:col-start-11 md:col-end-[16] img" data-v-f9fde618></div><div data-scroll data-scroll-speed="1.5" class="overflow-hidden wrapper h-[50vw] md:h-[24vw] mt-[-35vw] md:-mt-f-96" data-v-f9fde618><img${serverRenderer.ssrRenderAttr("src", _imports_6)} alt="Episode" class="col-start-6 col-end-[12] md:col-start-[15] md:col-end-[20] img" data-v-f9fde618></div><div data-scroll data-scroll-speed="2.2" class="overflow-hidden wrapper h-[30vw] md:h-f-96 mt-[-68vw] md:mt-[-28vw]" data-v-f9fde618><img${serverRenderer.ssrRenderAttr("src", _imports_7)} alt="Episode" class="col-start-[11] col-end-[15] md:col-start-[19] md:col-end-[23] img" data-v-f9fde618></div><div data-scroll data-scroll-speed="2.2" class="overflow-hidden wrapper h-[40vw] md:h-f-96 mt-f-96 md:mt-f-9" data-v-f9fde618><img${serverRenderer.ssrRenderAttr("src", _imports_8)} alt="Episode" class="col-start-2 col-end-7 md:col-start-[12] md:col-end-[16] img" data-v-f9fde618></div><div data-scroll data-scroll-speed="2.6" class="wrapper mt-[-18vw] md:-mt-f-48 lg:-mt-f-56 zoom-in" data-v-f9fde618><a class="flex relative justify-center content-center col-start-6 col-end-[16] md:col-start-[17] md:col-end-[23]" data-v-f9fde618><div class="relative -top-1/2 border rounded-[50%] h-[22vw] md:h-f-48 w-screen -rotate-12" data-v-f9fde618></div><p class="absolute -top-f-14 md:-top-f-3.5" data-v-f9fde618>Meet our guests</p></a></div></div><div id="areopagus-section" class="h-screen" data-v-f9fde618></div></main>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/Head.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Hero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f9fde618"]]);
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    gsap__default["default"].registerPlugin(ScrollTrigger__default["default"]);
    const renderer = vue.ref();
    const camera = vue.ref();
    const scene = vue.ref();
    const imesh = vue.ref();
    const light = vue.ref();
    const instances = [
      { position: new three.Vector3(20, 5, 0), scale: 0.3 },
      { position: new three.Vector3(30, 15, 20), scale: 1 },
      { position: new three.Vector3(-15, -20, 5), scale: 1 },
      { position: new three.Vector3(-5, -10, 0), scale: 0.3 }
    ];
    const dummyO = new three.Object3D();
    const breakpoints = core.useBreakpoints(core.breakpointsTailwind);
    const isSmallScreen = breakpoints.smaller("md");
    core.tryOnMounted(async () => {
      var _a, _b, _c;
      butterSlider.autoInit();
      const scroller = document.querySelector("[data-scroll-container]");
      const scroll = new LocomotiveScroll__default["default"]({
        el: scroller,
        smooth: true,
        reloadOnContextChange: true
      });
      instances.forEach((geometry, i) => {
        var _a2;
        const { position, scale } = geometry;
        dummyO.position.copy(position);
        dummyO.scale.set(scale, scale, scale);
        dummyO.updateMatrix();
        (_a2 = imesh.value) == null ? void 0 : _a2.mesh.setMatrixAt(i, dummyO.matrix);
      });
      imesh.value.mesh.instanceMatrix.needsUpdate = true;
      const cameraVal = (_a = camera.value) == null ? void 0 : _a.camera.position;
      const sceneVal = (_b = scene.value) == null ? void 0 : _b.scene.rotation;
      (_c = renderer.value) == null ? void 0 : _c.onBeforeRender(() => {
        sceneVal.z += 1e-3;
      });
      scroll.on("scroll", ScrollTrigger__default["default"].update);
      ScrollTrigger__default["default"].scrollerProxy(scroller, {
        scrollTop(value) {
          return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: scroller.style.transform ? "transform" : "fixed"
      });
      ScrollTrigger__default["default"].defaults({
        immediateRender: false
      });
      gsap__default["default"].fromTo(".zoom-in", {
        scale: 0,
        ease: "power.out",
        duration: 0.5,
        scrollTrigger: {
          scroller,
          trigger: ".zoom-in"
        }
      }, {
        scale: 1
      });
      let tl = gsap__default["default"].timeline({
        ease: "power.inOut",
        scrollTrigger: {
          scroller,
          trigger: "#head-section",
          endTrigger: "#areopagus-section",
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });
      tl.to(scroller, {
        backgroundColor: "#4F46E5"
      });
      tl.to("#bg-circle", {
        backgroundColor: "#FFFFFF"
      }, "<0");
      tl.to(cameraVal, {
        x: "+=10"
      }, "<0");
      tl.to(sceneVal, {
        y: "+=0.4"
      }, "<0");
      tl.to(scroller, {
        backgroundColor: "#6D28D9"
      });
      tl.to("#bg-circle", {
        backgroundColor: "#EF4444"
      }, "<0");
      tl.to(cameraVal, {
        x: "+=10",
        y: "-=10"
      }, "<0");
      tl.to(sceneVal, {
        x: "+=0.5"
      }, "<0");
      ScrollTrigger__default["default"].addEventListener("refresh", () => scroll.update());
      core.useTimeoutFn(() => {
        ScrollTrigger__default["default"].refresh();
      }, 1e3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = vue.resolveComponent("client-only");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        "data-scroll-container": "",
        class: "relative bg-purple-500"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(Hero, { id: "home" }, null, _parent));
      _push(`<div class="bg-blue-500 opacity-20 h-[70vw] w-[70vw] fixed bg-blend-multiply top-0 rounded-[50%] blur-[64px] z-[-1] lg:z-[-2]" id="bg-circle" data-scroll data-scroll-sticky data-scroll-target="#home"></div>`);
      _push(serverRenderer.ssrRenderComponent(_component_client_only, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!vue.unref(isSmallScreen)) {
              _push2(`<div data-scroll data-scroll-sticky data-scroll-target="#home" class="absolute top-0 z-[-1]"${_scopeId}>`);
              _push2(serverRenderer.ssrRenderComponent(vue.unref(troisjs.Renderer), {
                ref: (_value, _refs) => {
                  _refs["renderer"] = _value;
                  renderer.value = _value;
                },
                alpha: "",
                antialias: "",
                resize: "window"
              }, {
                default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer.ssrRenderComponent(vue.unref(troisjs.Camera), {
                      ref: (_value, _refs) => {
                        _refs["camera"] = _value;
                        camera.value = _value;
                      },
                      position: { z: 90 },
                      fov: 30
                    }, null, _parent3, _scopeId2));
                    _push3(serverRenderer.ssrRenderComponent(vue.unref(troisjs.Scene), {
                      ref: (_value, _refs) => {
                        _refs["scene"] = _value;
                        scene.value = _value;
                      }
                    }, {
                      default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer.ssrRenderComponent(vue.unref(troisjs.AmbientLight), { color: "#ffffff" }, null, _parent4, _scopeId3));
                          _push4(serverRenderer.ssrRenderComponent(vue.unref(troisjs.PointLight), {
                            ref: (_value, _refs) => {
                              _refs["light"] = _value;
                              light.value = _value;
                            },
                            color: "#a78bfa",
                            position: { y: 20 },
                            intensity: 0.7
                          }, null, _parent4, _scopeId3));
                          _push4(serverRenderer.ssrRenderComponent(vue.unref(troisjs.InstancedMesh), {
                            ref: (_value, _refs) => {
                              _refs["imesh"] = _value;
                              imesh.value = _value;
                            },
                            count: instances.length
                          }, {
                            default: vue.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer.ssrRenderComponent(vue.unref(troisjs.SphereGeometry), {
                                  radius: 10,
                                  "width-segments": 50,
                                  "height-segments": 40
                                }, null, _parent5, _scopeId4));
                                _push5(serverRenderer.ssrRenderComponent(vue.unref(troisjs.StandardMaterial), { color: "#aaaaaa" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vue.createVNode(vue.unref(troisjs.SphereGeometry), {
                                    radius: 10,
                                    "width-segments": 50,
                                    "height-segments": 40
                                  }),
                                  vue.createVNode(vue.unref(troisjs.StandardMaterial), { color: "#aaaaaa" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            vue.createVNode(vue.unref(troisjs.AmbientLight), { color: "#ffffff" }),
                            vue.createVNode(vue.unref(troisjs.PointLight), {
                              ref: (_value, _refs) => {
                                _refs["light"] = _value;
                                light.value = _value;
                              },
                              color: "#a78bfa",
                              position: { y: 20 },
                              intensity: 0.7
                            }, null, 8, ["intensity"]),
                            vue.createVNode(vue.unref(troisjs.InstancedMesh), {
                              ref: (_value, _refs) => {
                                _refs["imesh"] = _value;
                                imesh.value = _value;
                              },
                              count: instances.length
                            }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(vue.unref(troisjs.SphereGeometry), {
                                  radius: 10,
                                  "width-segments": 50,
                                  "height-segments": 40
                                }),
                                vue.createVNode(vue.unref(troisjs.StandardMaterial), { color: "#aaaaaa" })
                              ]),
                              _: 1
                            }, 8, ["count"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(serverRenderer.ssrRenderComponent(vue.unref(troisjs.EffectComposer), null, {
                      default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer.ssrRenderComponent(vue.unref(troisjs.RenderPass), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vue.createVNode(vue.unref(troisjs.RenderPass))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vue.createVNode(vue.unref(troisjs.Camera), {
                        ref: (_value, _refs) => {
                          _refs["camera"] = _value;
                          camera.value = _value;
                        },
                        position: { z: 90 },
                        fov: 30
                      }, null, 512),
                      vue.createVNode(vue.unref(troisjs.Scene), {
                        ref: (_value, _refs) => {
                          _refs["scene"] = _value;
                          scene.value = _value;
                        }
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(troisjs.AmbientLight), { color: "#ffffff" }),
                          vue.createVNode(vue.unref(troisjs.PointLight), {
                            ref: (_value, _refs) => {
                              _refs["light"] = _value;
                              light.value = _value;
                            },
                            color: "#a78bfa",
                            position: { y: 20 },
                            intensity: 0.7
                          }, null, 8, ["intensity"]),
                          vue.createVNode(vue.unref(troisjs.InstancedMesh), {
                            ref: (_value, _refs) => {
                              _refs["imesh"] = _value;
                              imesh.value = _value;
                            },
                            count: instances.length
                          }, {
                            default: vue.withCtx(() => [
                              vue.createVNode(vue.unref(troisjs.SphereGeometry), {
                                radius: 10,
                                "width-segments": 50,
                                "height-segments": 40
                              }),
                              vue.createVNode(vue.unref(troisjs.StandardMaterial), { color: "#aaaaaa" })
                            ]),
                            _: 1
                          }, 8, ["count"])
                        ]),
                        _: 1
                      }, 512),
                      vue.createVNode(vue.unref(troisjs.EffectComposer), null, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(troisjs.RenderPass))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              !vue.unref(isSmallScreen) ? (vue.openBlock(), vue.createBlock("div", {
                key: 0,
                "data-scroll": "",
                "data-scroll-sticky": "",
                "data-scroll-target": "#home",
                class: "absolute top-0 z-[-1]"
              }, [
                vue.createVNode(vue.unref(troisjs.Renderer), {
                  ref: (_value, _refs) => {
                    _refs["renderer"] = _value;
                    renderer.value = _value;
                  },
                  alpha: "",
                  antialias: "",
                  resize: "window"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(troisjs.Camera), {
                      ref: (_value, _refs) => {
                        _refs["camera"] = _value;
                        camera.value = _value;
                      },
                      position: { z: 90 },
                      fov: 30
                    }, null, 512),
                    vue.createVNode(vue.unref(troisjs.Scene), {
                      ref: (_value, _refs) => {
                        _refs["scene"] = _value;
                        scene.value = _value;
                      }
                    }, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(troisjs.AmbientLight), { color: "#ffffff" }),
                        vue.createVNode(vue.unref(troisjs.PointLight), {
                          ref: (_value, _refs) => {
                            _refs["light"] = _value;
                            light.value = _value;
                          },
                          color: "#a78bfa",
                          position: { y: 20 },
                          intensity: 0.7
                        }, null, 8, ["intensity"]),
                        vue.createVNode(vue.unref(troisjs.InstancedMesh), {
                          ref: (_value, _refs) => {
                            _refs["imesh"] = _value;
                            imesh.value = _value;
                          },
                          count: instances.length
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(vue.unref(troisjs.SphereGeometry), {
                              radius: 10,
                              "width-segments": 50,
                              "height-segments": 40
                            }),
                            vue.createVNode(vue.unref(troisjs.StandardMaterial), { color: "#aaaaaa" })
                          ]),
                          _: 1
                        }, 8, ["count"])
                      ]),
                      _: 1
                    }, 512),
                    vue.createVNode(vue.unref(troisjs.EffectComposer), null, {
                      default: vue.withCtx(() => [
                        vue.createVNode(vue.unref(troisjs.RenderPass))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 512)
              ])) : vue.createCommentVNode("v-if", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/Home.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    viewBox: "0 0 600 566",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M311.206365,230.182669 C311.28819,231.109841 311.286839,232.042481 311.202321,232.969414 L290.024813,465.232255 C289.292636,473.262452 282.559067,479.410009 274.495562,479.41004 L166.544433,479.410425 C163.695771,479.410435 160.901542,480.190766 158.465064,481.666712 L23.6731813,563.319644 C16.3071206,567.781789 6.71846529,565.427698 2.2563204,558.061637 C0.427290617,555.042297 -0.323141886,551.491699 0.127745524,547.990491 L20.9737096,386.118148 C21.0587682,385.45765 21.1014327,384.79239 21.1014327,384.126434 L21.1014327,254.407888 C21.1014327,246.326969 27.2747292,239.584896 35.3243564,238.874529 L294.302214,216.020104 C302.881051,215.263039 310.4493,221.603833 311.206365,230.182669 Z M387.409383,230.579415 C388.191544,222.002834 395.778307,215.684204 404.354899,216.466365 L404.354899,216.466365 L585.822506,233.015738 C593.852599,233.748061 600,240.481608 600,248.545021 L600,248.545021 L600,463.825088 C600,472.437264 593.01846,479.418814 584.406273,479.418814 L584.406273,479.418814 L424.328186,479.418814 C416.271094,479.418814 409.540645,473.28076 408.80041,465.257746 L408.80041,465.257746 L387.41089,233.428306 C387.323462,232.480706 387.322952,231.527098 387.409383,230.579415 Z M584.406273,0 C593.01846,0 600,6.98155054 600,15.5937267 L600,15.5937267 L600,108.093478 C600,116.148064 593.865636,122.877298 585.845418,123.620651 L585.845418,123.620651 L404.263904,140.450638 C403.309215,140.539127 402.348402,140.539377 401.393671,140.451386 C392.817838,139.661024 386.506465,132.068209 387.296838,123.492377 L387.296838,123.492377 L397.372901,14.1626384 C398.112387,6.13894872 404.843128,0 412.900822,0 L412.900822,0 L584.406273,0 Z M285.795441,0 C293.860673,0 300.595104,6.15009303 301.325151,14.1822137 L311.253832,123.419669 C312.033383,131.996489 305.712456,139.581329 297.135626,140.36088 C296.212571,140.444785 295.283881,140.44622 294.360576,140.365174 L35.3412912,117.628938 C27.2885452,116.922075 21.1111112,110.17864 21.1111112,102.094935 L21.1111112,15.5937267 C21.1111112,6.98155054 28.0926617,0 36.7048378,0 L285.795441,0 Z" fill-rule="nonzero"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/SaftLogo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var SaftLogo = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
var Menu_vue_vue_type_style_index_0_scoped_true_lang = "html.has-scroll-smooth[data-v-1f942ad2] {\n  overflow: hidden;\n}\nhtml.has-scroll-dragging[data-v-1f942ad2] {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.has-scroll-smooth body[data-v-1f942ad2] {\n  overflow: hidden;\n}\n.has-scroll-smooth [data-scroll-container][data-v-1f942ad2] {\n  min-height: 100vh;\n}\n[data-scroll-direction=horizontal] [data-scroll-container][data-v-1f942ad2] {\n  height: 100vh;\n  display: inline-block;\n  white-space: nowrap;\n}\n[data-scroll-direction=horizontal] [data-scroll-section][data-v-1f942ad2] {\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  height: 100%;\n}\n.c-scrollbar[data-v-1f942ad2] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 11px;\n  height: 100%;\n  transform-origin: center right;\n  transition: transform 0.3s, opacity 0.3s;\n  opacity: 0;\n}\n.c-scrollbar[data-v-1f942ad2]:hover {\n  transform: scaleX(1.45);\n}\n.c-scrollbar[data-v-1f942ad2]:hover, .has-scroll-scrolling .c-scrollbar[data-v-1f942ad2], .has-scroll-dragging .c-scrollbar[data-v-1f942ad2] {\n  opacity: 1;\n}\n[data-scroll-direction=horizontal] .c-scrollbar[data-v-1f942ad2] {\n  width: 100%;\n  height: 10px;\n  top: auto;\n  bottom: 0;\n  transform: scaleY(1);\n}\n[data-scroll-direction=horizontal] .c-scrollbar[data-v-1f942ad2]:hover {\n  transform: scaleY(1.3);\n}\n.c-scrollbar_thumb[data-v-1f942ad2] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.5;\n  width: 7px;\n  border-radius: 10px;\n  margin: 2px;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.has-scroll-dragging .c-scrollbar_thumb[data-v-1f942ad2] {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n[data-scroll-direction=horizontal] .c-scrollbar_thumb[data-v-1f942ad2] {\n  right: auto;\n  bottom: 0;\n}\n.line[data-v-1f942ad2] {\n  height: 1px;\n  width: 1.5rem;\n}\n@media (min-width: 768px) {\n.line[data-v-1f942ad2] {\n    width: calc(2.25 * 14 * 100vw / 1800);\n}\n}\n.line[data-v-1f942ad2] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.line-2[data-v-1f942ad2] {\n  margin-top: 0.75rem;\n}\n@media (min-width: 768px) {\n.line-2[data-v-1f942ad2] {\n    margin-top: calc(1 * 14 * 100vw / 1800);\n}\n}";
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "fixed z-50 grid w-screen pt-f-28 md:pt-f-14 text-white grid-cols-12" }, _attrs))} data-v-1f942ad2><div class="mx-auto flex col-start-6 col-end-8" data-v-1f942ad2>`);
      _push(serverRenderer.ssrRenderComponent(SaftLogo, { class: "flex-none h-8 fill-current md:h-f-12" }, null, _parent));
      _push(`<h3 class="hidden leading-none uppercase md:block ml-f-4" data-v-1f942ad2> SAFT <br data-v-1f942ad2>Apologetics </h3></div><div class="w-full cursor-pointer self-center justify-self-end col-start-11 col-end-11" data-v-1f942ad2><div class="line line-1" data-v-1f942ad2></div><div class="line line-2" data-v-1f942ad2></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Menu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Menu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1f942ad2"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "grid w-screen h-screen bg-blue-100 z-[100]" }, _attrs))}><div class="col-span-full row-span-full place-self-center w-8 h-8 text-3xl bg-blue-800 rounded-full"></div><div class="col-span-full row-span-full place-self-center w-10 h-10 text-3xl bg-blue-800 rounded-full animate-ping"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/Loading.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Loading = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
var App_vue_vue_type_style_index_0_lang = "@font-face {\n    font-family: 'Joyride ALT';\n    src: url('__VITE_ASSET__f2a14eb9__') format('woff2'),\n        url('__VITE_ASSET__7071b53e__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride ALT';\n    src: url('__VITE_ASSET__6910a711__') format('woff2'),\n        url('__VITE_ASSET__5c7de71f__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride ALT Outline';\n    src: url('__VITE_ASSET__d4706e6d__') format('woff2'),\n        url('__VITE_ASSET__42beef83__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride ALT Outline';\n    src: url('__VITE_ASSET__1d95485f__') format('woff2'),\n        url('__VITE_ASSET__4edcbf1e__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE';\n    src: url('__VITE_ASSET__99ad94dc__') format('woff2'),\n        url('__VITE_ASSET__d7be83a2__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD Outline';\n    src: url('__VITE_ASSET__a3b8159c__') format('woff2'),\n        url('__VITE_ASSET__056f0747__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT';\n    src: url('__VITE_ASSET__8b1fc4fb__') format('woff2'),\n        url('__VITE_ASSET__9a0b8d2a__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD Outline';\n    src: url('__VITE_ASSET__b51297ed__') format('woff2'),\n        url('__VITE_ASSET__f3f4e706__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT Outline';\n    src: url('__VITE_ASSET__ef2a7100__') format('woff2'),\n        url('__VITE_ASSET__e30cb2eb__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT';\n    src: url('__VITE_ASSET__a97e6d6a__') format('woff2'),\n        url('__VITE_ASSET__18c817d9__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE';\n    src: url('__VITE_ASSET__6a7bf059__') format('woff2'),\n        url('__VITE_ASSET__eec5d7c6__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT Outline';\n    src: url('__VITE_ASSET__fcc86b2b__') format('woff2'),\n        url('__VITE_ASSET__b47f748f__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD';\n    src: url('__VITE_ASSET__66498a98__') format('woff2'),\n        url('__VITE_ASSET__77302732__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD';\n    src: url('__VITE_ASSET__9692674a__') format('woff2'),\n        url('__VITE_ASSET__e5fea958__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE Outline';\n    src: url('__VITE_ASSET__597b2829__') format('woff2'),\n        url('__VITE_ASSET__fb04c048__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE Outline';\n    src: url('__VITE_ASSET__4798b589__') format('woff2'),\n        url('__VITE_ASSET__5cc08eea__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__f55c88ce__') format('woff2'),\n        url('__VITE_ASSET__0b59e71d__') format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__60d02844__') format('woff2'),\n        url('__VITE_ASSET__889dd891__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__f55c88ce__') format('woff2'),\n        url('__VITE_ASSET__0b59e71d__') format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__0a944ca1__') format('woff2'),\n        url('__VITE_ASSET__e0a978da__') format('woff');\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a120ecbc__') format('woff2'),\n        url('__VITE_ASSET__826f558c__') format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__0a944ca1__') format('woff2'),\n        url('__VITE_ASSET__e0a978da__') format('woff');\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a120ecbc__') format('woff2'),\n        url('__VITE_ASSET__826f558c__') format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__60d02844__') format('woff2'),\n        url('__VITE_ASSET__889dd891__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a5cbb18a__') format('woff2'),\n        url('__VITE_ASSET__06b29d85__') format('woff');\n    font-weight: 100;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a5cbb18a__') format('woff2'),\n        url('__VITE_ASSET__06b29d85__') format('woff');\n    font-weight: 100;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__17a58d65__') format('woff2'),\n        url('__VITE_ASSET__fbe87b0f__') format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__17a58d65__') format('woff2'),\n        url('__VITE_ASSET__fbe87b0f__') format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\nhtml.has-scroll-smooth {\n  overflow: hidden;\n}\nhtml.has-scroll-dragging {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.has-scroll-smooth body {\n  overflow: hidden;\n}\n.has-scroll-smooth [data-scroll-container] {\n  min-height: 100vh;\n}\n[data-scroll-direction=horizontal] [data-scroll-container] {\n  height: 100vh;\n  display: inline-block;\n  white-space: nowrap;\n}\n[data-scroll-direction=horizontal] [data-scroll-section] {\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  height: 100%;\n}\n.c-scrollbar {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 11px;\n  height: 100%;\n  transform-origin: center right;\n  transition: transform 0.3s, opacity 0.3s;\n  opacity: 0;\n}\n.c-scrollbar:hover {\n  transform: scaleX(1.45);\n}\n.c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {\n  opacity: 1;\n}\n[data-scroll-direction=horizontal] .c-scrollbar {\n  width: 100%;\n  height: 10px;\n  top: auto;\n  bottom: 0;\n  transform: scaleY(1);\n}\n[data-scroll-direction=horizontal] .c-scrollbar:hover {\n  transform: scaleY(1.3);\n}\n.c-scrollbar_thumb {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.5;\n  width: 7px;\n  border-radius: 10px;\n  margin: 2px;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.has-scroll-dragging .c-scrollbar_thumb {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n[data-scroll-direction=horizontal] .c-scrollbar_thumb {\n  right: auto;\n  bottom: 0;\n}\n\n/*\n! tailwindcss v3.0.1 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse;  /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;  /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n[hidden] {\n  display: none;\n}\n.-rotate-12, .-rotate-3, .-rotate-2, .transform {\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.border {\n    --tw-border-opacity: 1;\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.blur-\\[64px\\] {\n    --tw-blur: var(--tw-empty,/*!*/ /*!*/);\n    --tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n    --tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n    --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n    --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n    --tw-invert: var(--tw-empty,/*!*/ /*!*/);\n    --tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n    --tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n    --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n    --tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\nh1, .h1 {\n    font-size: 14vw;\n    line-height: 1.1;\n}\n@media (min-width: 768px) {\nh1, .h1 {\n        font-size: calc(6* 14 * 100vw / 1800);\n        line-height: 1.1;\n}\n}\nh1, .h1 {\n    font-family: Joyride STD, sans-serif;\n}\n.grid-cols-24 {\n    grid-template-columns: minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr);\n}\nh2, .h2 {\n    font-size: 6.5vw;\n}\n@media (min-width: 768px) {\nh2, .h2 {\n        font-size: calc(2.25* 14 * 100vw / 1800);\n        line-height: calc(2.5* 14 * 100vw / 1800);\n}\n}\nh2, .h2 {\n    font-family: Manrope, sans-serif;\n    font-weight: 600;\n}\nh3, .h3 {\n    font-size: calc(1.5* 14 * 100vw / 1800);\n    line-height: calc(2* 14 * 100vw / 1800);\n    font-family: Joyride STD, sans-serif;\n}\np, .p {\n    font-family: Manrope, sans-serif;\n    font-weight: 600;\n    font-size: 4.5vw;\n}\n@media (min-width: 768px) {\np, .p {\n        font-size: calc(1.5* 14 * 100vw / 1800);\n        line-height: calc(2* 14 * 100vw / 1800);\n}\n}\np, .p {\n    max-width: 65ch;\n}\n.clip {\n    overflow: hidden;\n}\n.container {\n    width: 100%;\n}\n@media (min-width: 640px) {\n.container {\n        max-width: 640px;\n}\n}\n@media (min-width: 768px) {\n.container {\n        max-width: 768px;\n}\n}\n@media (min-width: 1024px) {\n.container {\n        max-width: 1024px;\n}\n}\n@media (min-width: 1280px) {\n.container {\n        max-width: 1280px;\n}\n}\n@media (min-width: 1536px) {\n.container {\n        max-width: 1536px;\n}\n}\n.container {\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    width: min(1200px, 100%);\n}\n.hero {\n    margin-left: calc(6 * 14 * 100vw / 1800);\n    margin-right: calc(6 * 14 * 100vw / 1800);\n}\n.wrapper {\n    margin-left: calc(6 * 14 * 100vw / 1800);\n    margin-right: calc(6 * 14 * 100vw / 1800);\n    display: grid;\n    grid-template-rows: auto;\n    grid-row-gap: 3.8888888889vw;\n    grid-template-columns: minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr);\n}\n@media (min-width: 768px) {\n.wrapper {\n      grid-row-gap: 0px;\n      grid-template-columns: minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr);\n}\n}\n.visible {\n    visibility: visible;\n}\n.fixed {\n    position: fixed;\n}\n.absolute {\n    position: absolute;\n}\n.relative {\n    position: relative;\n}\n.inset-0 {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n}\n.-top-1\\/2 {\n    top: -50%;\n}\n.-top-f-14 {\n    top: calc(calc(3.5 * 14 * 100vw / 1800) * -1);\n}\n.-left-f-12 {\n    left: calc(calc(3 * 14 * 100vw / 1800) * -1);\n}\n.-top-f-48 {\n    top: calc(calc(12 * 14 * 100vw / 1800) * -1);\n}\n.top-0 {\n    top: 0px;\n}\n.z-50 {\n    z-index: 50;\n}\n.z-10 {\n    z-index: 10;\n}\n.z-20 {\n    z-index: 20;\n}\n.z-\\[-1\\] {\n    z-index: -1;\n}\n.z-\\[100\\] {\n    z-index: 100;\n}\n.col-span-full {\n    grid-column: 1 / -1;\n}\n.col-start-6 {\n    grid-column-start: 6;\n}\n.col-start-11 {\n    grid-column-start: 11;\n}\n.col-start-1 {\n    grid-column-start: 1;\n}\n.col-start-7 {\n    grid-column-start: 7;\n}\n.col-start-2 {\n    grid-column-start: 2;\n}\n.col-start-8 {\n    grid-column-start: 8;\n}\n.col-start-\\[11\\] {\n    grid-column-start: 11;\n}\n.col-end-8 {\n    grid-column-end: 8;\n}\n.col-end-11 {\n    grid-column-end: 11;\n}\n.col-end-\\[16\\] {\n    grid-column-end: 16;\n}\n.col-end-\\[15\\] {\n    grid-column-end: 15;\n}\n.col-end-10 {\n    grid-column-end: 10;\n}\n.col-end-9 {\n    grid-column-end: 9;\n}\n.col-end-7 {\n    grid-column-end: 7;\n}\n.col-end-\\[12\\] {\n    grid-column-end: 12;\n}\n.row-span-full {\n    grid-row: 1 / -1;\n}\n.row-start-2 {\n    grid-row-start: 2;\n}\n.row-start-3 {\n    grid-row-start: 3;\n}\n.mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n}\n.ml-f-4 {\n    margin-left: calc(1 * 14 * 100vw / 1800);\n}\n.mt-\\[5\\.5vw\\] {\n    margin-top: 5.5vw;\n}\n.mt-f-9 {\n    margin-top: calc(2.25 * 14 * 100vw / 1800);\n}\n.mt-f-48 {\n    margin-top: calc(12 * 14 * 100vw / 1800);\n}\n.-mt-f-80 {\n    margin-top: calc(calc(20 * 14 * 100vw / 1800) * -1);\n}\n.mt-f-40 {\n    margin-top: calc(10 * 14 * 100vw / 1800);\n}\n.mt-f-96 {\n    margin-top: calc(24 * 14 * 100vw / 1800);\n}\n.mt-\\[-25vw\\] {\n    margin-top: -25vw;\n}\n.mt-\\[-42vw\\] {\n    margin-top: -42vw;\n}\n.mt-\\[-18vw\\] {\n    margin-top: -18vw;\n}\n.mt-f-44 {\n    margin-top: calc(11 * 14 * 100vw / 1800);\n}\n.mt-\\[30vw\\] {\n    margin-top: 30vw;\n}\n.-ml-f-12 {\n    margin-left: calc(calc(3 * 14 * 100vw / 1800) * -1);\n}\n.mt-\\[120vw\\] {\n    margin-top: 120vw;\n}\n.mt-f-24 {\n    margin-top: calc(6 * 14 * 100vw / 1800);\n}\n.mt-\\[-35vw\\] {\n    margin-top: -35vw;\n}\n.mt-\\[-68vw\\] {\n    margin-top: -68vw;\n}\n.mr-f-1 {\n    margin-right: calc(0.25 * 14 * 100vw / 1800);\n}\n.inline-block {\n    display: inline-block;\n}\n.flex {\n    display: flex;\n}\n.grid {\n    display: grid;\n}\n.hidden {\n    display: none;\n}\n.h-8 {\n    height: 2rem;\n}\n.h-screen {\n    height: 100vh;\n}\n.h-\\[60vw\\] {\n    height: 60vw;\n}\n.h-\\[22vw\\] {\n    height: 22vw;\n}\n.h-\\[80vw\\] {\n    height: 80vw;\n}\n.h-\\[50vw\\] {\n    height: 50vw;\n}\n.h-\\[30vw\\] {\n    height: 30vw;\n}\n.h-\\[40vw\\] {\n    height: 40vw;\n}\n.h-\\[70vw\\] {\n    height: 70vw;\n}\n.h-10 {\n    height: 2.5rem;\n}\n.min-h-screen {\n    min-height: 100vh;\n}\n.w-screen {\n    width: 100vw;\n}\n.w-full {\n    width: 100%;\n}\n.w-\\[80vw\\] {\n    width: 80vw;\n}\n.w-max {\n    width: -webkit-max-content;\n    width: -moz-max-content;\n    width: max-content;\n}\n.w-\\[130vw\\] {\n    width: 130vw;\n}\n.w-\\[70vw\\] {\n    width: 70vw;\n}\n.w-8 {\n    width: 2rem;\n}\n.w-10 {\n    width: 2.5rem;\n}\n.flex-none {\n    flex: none;\n}\n.-rotate-12 {\n    --tw-rotate: -12deg;\n    transform: var(--tw-transform);\n}\n.-rotate-3 {\n    --tw-rotate: -3deg;\n    transform: var(--tw-transform);\n}\n.-rotate-2 {\n    --tw-rotate: -2deg;\n    transform: var(--tw-transform);\n}\n.transform {\n    transform: var(--tw-transform);\n}\n.transform-gpu {\n    --tw-transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@-webkit-keyframes ping {\n75%, 100% {\n        transform: scale(2);\n        opacity: 0;\n}\n}\n@keyframes ping {\n75%, 100% {\n        transform: scale(2);\n        opacity: 0;\n}\n}\n.animate-ping {\n    -webkit-animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n            animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n.cursor-pointer {\n    cursor: pointer;\n}\n.resize {\n    resize: both;\n}\n.grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n}\n.place-content-center {\n    place-content: center;\n}\n.content-center {\n    align-content: center;\n}\n.justify-center {\n    justify-content: center;\n}\n.space-x-f-14 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(calc(3.5 * 14 * 100vw / 1800) * var(--tw-space-x-reverse));\n    margin-left: calc(calc(3.5 * 14 * 100vw / 1800) * calc(1 - var(--tw-space-x-reverse)));\n}\n.place-self-center {\n    place-self: center;\n}\n.self-center {\n    align-self: center;\n}\n.justify-self-end {\n    justify-self: end;\n}\n.overflow-hidden {\n    overflow: hidden;\n}\n.overflow-visible {\n    overflow: visible;\n}\n.rounded-\\[50\\%\\] {\n    border-radius: 50%;\n}\n.rounded-full {\n    border-radius: 9999px;\n}\n.border {\n    border-width: 1px;\n}\n.bg-gray-50 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n.bg-purple-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(168 85 247 / var(--tw-bg-opacity));\n}\n.bg-blue-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.bg-blue-100 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n.bg-blue-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 64 175 / var(--tw-bg-opacity));\n}\n.bg-\\[url\\(\\'\\/src\\/assets\\/alisa-childers\\.jpg\\'\\)\\] {\n    background-image: url('__VITE_ASSET__87b2f22d__');\n}\n.fill-current {\n    fill: currentColor;\n}\n.py-f-6 {\n    padding-top: calc(1.5 * 14 * 100vw / 1800);\n    padding-bottom: calc(1.5 * 14 * 100vw / 1800);\n}\n.pt-f-28 {\n    padding-top: calc(7 * 14 * 100vw / 1800);\n}\n.text-center {\n    text-align: center;\n}\n.font-joyride {\n    font-family: Joyride STD, sans-serif;\n}\n.font-joyride-wide {\n    font-family: Joyride WIDE, sans-serif;\n}\n.font-joyride-ext {\n    font-family: Joyride EXT, sans-serif;\n}\n.font-joyride-out {\n    font-family: Joyride STD Outline, sans-serif;\n}\n.text-\\[8\\.8vw\\] {\n    font-size: 8.8vw;\n}\n.text-f-4xl {\n    font-size: calc(2.25* 14 * 100vw / 1800);\n    line-height: calc(2.5* 14 * 100vw / 1800);\n}\n.text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n}\n.uppercase {\n    text-transform: uppercase;\n}\n.lowercase {\n    text-transform: lowercase;\n}\n.leading-none {\n    line-height: 1;\n}\n.text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-gray-900 {\n    --tw-text-opacity: 1;\n    color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.text-gray-800 {\n    --tw-text-opacity: 1;\n    color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n.opacity-20 {\n    opacity: 0.2;\n}\n.opacity-0 {\n    opacity: 0;\n}\n.bg-blend-multiply {\n    background-blend-mode: multiply;\n}\n.blur-\\[64px\\] {\n    --tw-blur: blur(64px);\n    filter: var(--tw-filter);\n}\n.transition-transform {\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.transition {\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.duration-300 {\n    transition-duration: 300ms;\n}\n.duration-500 {\n    transition-duration: 500ms;\n}\n.ease-out {\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.ease-in-out {\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.will-change-transform {\n    will-change: transform;\n}\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n  overflow-x: hidden;\n}\nbody {\n    --tw-bg-opacity: 1;\n    background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n@media (min-width: 768px) {\n.md\\:wrapper {\n        margin-left: calc(6 * 14 * 100vw / 1800);\n        margin-right: calc(6 * 14 * 100vw / 1800);\n}\n.md\\:wrapper {\n        display: grid;\n}\n.md\\:wrapper {\n        grid-template-columns: repeat(12, minmax(0, 1fr));\n}\n.md\\:wrapper {\n        grid-template-rows: auto;\n}\n.md\\:wrapper {\n    grid-row-gap: 3.8888888889vw;\n    grid-template-columns: minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr) minmax(0vw, 1.1fr) minmax(0vw, 1fr);\n}\n@media (min-width: 768px) {\n.md\\:wrapper {\n      grid-row-gap: 0px;\n      grid-template-columns: minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr) minmax(0vw, 1.3fr) minmax(0vw, 1fr);\n}\n}\n.md\\:inset-x-0 {\n        left: 0px;\n        right: 0px;\n}\n.md\\:-top-f-3\\.5 {\n        top: calc(calc(0.875 * 14 * 100vw / 1800) * -1);\n}\n.md\\:-top-f-3 {\n        top: calc(calc(0.75 * 14 * 100vw / 1800) * -1);\n}\n.md\\:top-0 {\n        top: 0px;\n}\n.md\\:left-0 {\n        left: 0px;\n}\n.md\\:col-start-\\[12\\] {\n        grid-column-start: 12;\n}\n.md\\:col-start-\\[18\\] {\n        grid-column-start: 18;\n}\n.md\\:col-start-\\[15\\] {\n        grid-column-start: 15;\n}\n.md\\:col-start-2 {\n        grid-column-start: 2;\n}\n.md\\:col-start-5 {\n        grid-column-start: 5;\n}\n.md\\:col-start-4 {\n        grid-column-start: 4;\n}\n.md\\:col-start-\\[6\\] {\n        grid-column-start: 6;\n}\n.md\\:col-start-\\[7\\] {\n        grid-column-start: 7;\n}\n.md\\:col-start-11 {\n        grid-column-start: 11;\n}\n.md\\:col-start-\\[19\\] {\n        grid-column-start: 19;\n}\n.md\\:col-start-\\[17\\] {\n        grid-column-start: 17;\n}\n.md\\:col-end-10 {\n        grid-column-end: 10;\n}\n.md\\:col-end-9 {\n        grid-column-end: 9;\n}\n.md\\:col-end-\\[23\\] {\n        grid-column-end: 23;\n}\n.md\\:col-end-\\[24\\] {\n        grid-column-end: 24;\n}\n.md\\:col-end-6 {\n        grid-column-end: 6;\n}\n.md\\:col-end-5 {\n        grid-column-end: 5;\n}\n.md\\:col-end-8 {\n        grid-column-end: 8;\n}\n.md\\:col-end-\\[18\\] {\n        grid-column-end: 18;\n}\n.md\\:col-end-\\[17\\] {\n        grid-column-end: 17;\n}\n.md\\:col-end-\\[16\\] {\n        grid-column-end: 16;\n}\n.md\\:col-end-\\[20\\] {\n        grid-column-end: 20;\n}\n.md\\:my-f-96 {\n        margin-top: calc(24 * 14 * 100vw / 1800);\n        margin-bottom: calc(24 * 14 * 100vw / 1800);\n}\n.md\\:mt-f-10 {\n        margin-top: calc(2.5 * 14 * 100vw / 1800);\n}\n.md\\:mt-f-96 {\n        margin-top: calc(24 * 14 * 100vw / 1800);\n}\n.md\\:mt-f-9 {\n        margin-top: calc(2.25 * 14 * 100vw / 1800);\n}\n.md\\:-mt-f-96 {\n        margin-top: calc(calc(24 * 14 * 100vw / 1800) * -1);\n}\n.md\\:-mt-f-60 {\n        margin-top: calc(calc(15 * 14 * 100vw / 1800) * -1);\n}\n.md\\:mt-\\[18vw\\] {\n        margin-top: 18vw;\n}\n.md\\:-mt-f-52 {\n        margin-top: calc(calc(13 * 14 * 100vw / 1800) * -1);\n}\n.md\\:-mt-f-48 {\n        margin-top: calc(calc(12 * 14 * 100vw / 1800) * -1);\n}\n.md\\:-mt-f-40 {\n        margin-top: calc(calc(10 * 14 * 100vw / 1800) * -1);\n}\n.md\\:mt-f-32 {\n        margin-top: calc(8 * 14 * 100vw / 1800);\n}\n.md\\:mt-\\[-28vw\\] {\n        margin-top: -28vw;\n}\n.md\\:block {\n        display: block;\n}\n.md\\:h-f-12 {\n        height: calc(3 * 14 * 100vw / 1800);\n}\n.md\\:h-f-96 {\n        height: calc(24 * 14 * 100vw / 1800);\n}\n.md\\:h-f-48 {\n        height: calc(12 * 14 * 100vw / 1800);\n}\n.md\\:h-f-80 {\n        height: calc(20 * 14 * 100vw / 1800);\n}\n.md\\:h-\\[24vw\\] {\n        height: 24vw;\n}\n.md\\:w-screen {\n        width: 100vw;\n}\n.md\\:w-auto {\n        width: auto;\n}\n.md\\:pt-f-14 {\n        padding-top: calc(3.5 * 14 * 100vw / 1800);\n}\n.md\\:text-f-4xl {\n        font-size: calc(2.25* 14 * 100vw / 1800);\n        line-height: calc(2.5* 14 * 100vw / 1800);\n}\n}\n@media (min-width: 1024px) {\n.lg\\:z-\\[-2\\] {\n        z-index: -2;\n}\n.lg\\:-mt-f-48 {\n        margin-top: calc(calc(12 * 14 * 100vw / 1800) * -1);\n}\n.lg\\:-mt-f-56 {\n        margin-top: calc(calc(14 * 14 * 100vw / 1800) * -1);\n}\n}";
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const imgsAreLoaded = vue.ref(false);
    core.tryOnMounted(() => {
      imagesLoaded__default["default"](document.querySelectorAll("img"), { background: true }, () => imgsAreLoaded.value = true);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (!imgsAreLoaded.value) {
        _push(serverRenderer.ssrRenderComponent(Loading, _attrs, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(Menu, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createApp = singlePage.ViteSSG(_sfc_main);
exports.createApp = createApp;
