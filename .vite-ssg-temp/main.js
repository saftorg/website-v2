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
var core = require("@vueuse/core");
var anime = require("animejs");
var singlePage = require("vite-ssg/single-page");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var anime__default = /* @__PURE__ */ _interopDefaultLegacy(anime);
var _imports_0 = "/assets/head.1ee2dc44.webp";
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    class: String
  },
  setup(__props) {
    const props = __props;
    const target = vue.ref(null);
    const isOutside = vue.ref(true);
    const parallax = vue.reactive(core.useParallax(target));
    const initialCardStyle = `
  transition-duration: 500ms;
  transform: perspective(500px) scale(1,1) rotateY(0deg) rotateX(0deg);
  will-change: transform;
`;
    const cardStyle = vue.computed(() => isOutside.value ? initialCardStyle : `transform: perspective(500px) scale(${1 + Math.abs(parallax.tilt * 0.017)}, ${1 + Math.abs(parallax.roll * 0.017)})
       rotateY(${parallax.tilt * 12}deg) rotateX(${parallax.roll * 12}deg);
   will-change: transform;`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref: (_value, _refs) => {
          _refs["target"] = _value;
          target.value = _value;
        },
        class: [props.class, "transition-transform duration-300 ease-out shadow-3xl transform-gpu"],
        style: vue.unref(cardStyle)
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/ParallaxMedia.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var splitting = "/* Recommended styles for Splitting */\n.splitting .word,\n.splitting .char {\n  display: inline-block;\n}\n\n/* Psuedo-element chars */\n.splitting .char {\n  position: relative;\n}\n\n/**\n * Populate the psuedo elements with the character to allow for expanded effects\n * Set to `display: none` by default; just add `display: block` when you want\n * to use the psuedo elements\n */\n.splitting .char::before,\n.splitting .char::after {\n  content: attr(data-char);\n  position: absolute;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  transition: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n/* Expanded CSS Variables */\n\n.splitting {\n  /* The center word index */\n  --word-center: calc((var(--word-total) - 1) / 2);\n\n  /* The center character index */\n  --char-center: calc((var(--char-total) - 1) / 2);\n\n  /* The center character index */\n  --line-center: calc((var(--line-total) - 1) / 2);\n}\n\n.splitting .word {\n  /* Pecent (0-1) of the word's position */\n  --word-percent: calc(var(--word-index) / var(--word-total));\n\n  /* Pecent (0-1) of the line's position */\n  --line-percent: calc(var(--line-index) / var(--line-total));\n}\n\n.splitting .char {\n  /* Percent (0-1) of the char's position */\n  --char-percent: calc(var(--char-index) / var(--char-total));\n\n  /* Offset from center, positive & negative */\n  --char-offset: calc(var(--char-index) - var(--char-center));\n\n  /* Absolute distance from center, only positive */\n  --distance: calc(\n     (var(--char-offset) * var(--char-offset)) / var(--char-center)\n  );\n\n  /* Distance from center where -1 is the far left, 0 is center, 1 is far right */\n  --distance-sine: calc(var(--char-offset) / var(--char-center));\n\n  /* Distance from center where 1 is far left/far right, 0 is center */\n  --distance-percent: calc((var(--distance) / var(--char-center)));\n}\n";
var splittingCells = ".splitting.cells img { width: 100%; display: block; }\n\n@supports ( display: grid ) {\n  .splitting.cells {\n    position: relative;\n    overflow: hidden;\n    background-size: cover;\n    visibility: hidden;\n  }\n\n  .splitting .cell-grid {\n    background: inherit;\n    position: absolute;\n    top: 0; \n    left: 0; \n    width: 100%; \n    height: 100%;\n    display: grid;\n    grid-template: repeat( var(--row-total), 1fr ) / repeat( var(--col-total), 1fr );\n  }\n\n  .splitting .cell {\n    background: inherit;\n    position: relative;\n    overflow: hidden;\n  }\n\n  .splitting .cell-inner {\n    background: inherit;\n    position: absolute;\n    visibility: visible;\n    /* Size to fit the whole container size */\n    width: calc(100% * var(--col-total));\n    height: calc(100% * var(--row-total));\n    /* Position properly */\n    left: calc(-100% * var(--col-index));\n    top: calc(-100% * var(--row-index));\n  }\n\n  /* Helper variables for advanced effects */\n  .splitting .cell {\n    --center-x: calc((var(--col-total) - 1) / 2);\n    --center-y: calc((var(--row-total) - 1) / 2);\n\n    /* Offset from center, positive & negative */\n    --offset-x: calc(var(--col-index) - var(--center-x));\n    --offset-y: calc(var(--row-index) - var(--center-y));\n\n    /* Absolute distance from center, only positive */\n    --distance-x: calc( (var(--offset-x) * var(--offset-x)) / var(--center-x) );\n\n    /* Absolute distance from center, only positive */\n    --distance-y: calc( (var(--offset-y) * var(--offset-y)) / var(--center-y) );\n  }\n}\n\n";
Promise.resolve().then(function() {
  return /* @__PURE__ */ _interopNamespace(require("splitting/dist/splitting.js"));
});
const _sfc_main$3 = {
  props: {
    delay: Number,
    duration: {
      type: Number,
      default: 500
    },
    as: { type: String, default: "h1" },
    class: { type: String, default: "" },
    triggeredByScroll: Boolean,
    appearOnce: Boolean,
    exit: Boolean,
    enter: Boolean,
    onCompleteEnter: Function,
    onCompleteExit: Function,
    characterSize: {
      type: Number,
      default: 1.1
    },
    staggerDelay: {
      type: Number,
      default: 15
    }
  },
  setup(props, { slots, attrs }) {
    const uniqueId = `data-splitting-${Math.floor(Math.random() * 1e4)}`;
    const hasAppeared = vue.ref(false);
    core.tryOnMounted(() => {
      const el = document.querySelector(`#${uniqueId}`);
      const enterAnimation = () => {
        el.classList.remove("invisible");
        anime__default["default"]({
          targets: `#${uniqueId} .word .char`,
          translateY: [`${props.characterSize}ch`, 0],
          rotate: [10, 0],
          delay: anime__default["default"].stagger(props.staggerDelay, { start: props.delay }),
          duration: props.duration,
          easing: "easeOutExpo",
          complete: () => props.onCompleteEnter !== void 0 ? props.onCompleteEnter() : void 0
        });
      };
      const exitAnimation = () => {
        anime__default["default"]({
          targets: `#${uniqueId} .word .char`,
          translateY: [0, `-${props.characterSize + 0.1}ch`],
          rotate: [0, -10],
          delay: anime__default["default"].stagger(props.staggerDelay, { start: props.delay, direction: "reverse" }),
          duration: props.duration,
          easing: "easeInExpo",
          complete: () => {
            el.classList.add("invisible");
            props.onCompleteExit !== void 0 ? props.onCompleteExit() : void 0;
          }
        });
      };
      el.classList.add("invisible");
      Splitting({
        target: `#${uniqueId}`,
        by: "chars"
      });
      document.querySelectorAll(`#${uniqueId} .word`).forEach((el2) => {
        el2.classList.add("clip");
      });
      if (props.triggeredByScroll) {
        core.useIntersectionObserver(el, ([{ isIntersecting }]) => {
          el.classList.remove("invisible");
          if (isIntersecting && !hasAppeared.value || isIntersecting && !props.appearOnce) {
            if (props.appearOnce)
              hasAppeared.value = true;
            enterAnimation();
          }
        });
      } else if (!props.enter) {
        enterAnimation();
      }
      vue.watch(() => props.enter, (val) => {
        if (val)
          enterAnimation();
      });
      vue.watch(() => props.exit, (val) => {
        if (val)
          exitAnimation();
      });
    });
    return () => vue.h(props.as, __spreadValues({
      id: uniqueId,
      class: props.class
    }, attrs), slots.default());
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/SlideRevealText.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Home_vue_vue_type_style_index_0_scoped_true_lang = ".circle[data-v-5a61862a] {\n  filter: blur(64px);\n  position: absolute;\n  border-radius: 9999px;\n  mix-blend-mode: multiply;\n}";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const circleAnim = () => anime__default["default"]({
      targets: ".circle",
      easing: "easeInOutSine",
      duration: 1e4,
      translateY: () => anime__default["default"].random(-270, 270),
      translateX: () => anime__default["default"].random(-270, 270),
      complete: circleAnim
    });
    core.tryOnMounted(() => {
      circleAnim();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero px-0 top-0" }, _attrs))} data-v-5a61862a><div class="grid grid-rows-[max-content,auto] overflow-hidden" data-v-5a61862a><div class="relative -m-4 col-span-full row-span-full z-[-1]" data-v-5a61862a><div class="bg-blue-100/40 backdrop-blur-3xl absolute inset-0 z-[1]" data-v-5a61862a></div><div class="relative xl:w-[Min(1200px,100%)] xl:mx-auto h-full" data-v-5a61862a><div class="circle top-[-20%] left-[-12%] bg-blue-400 w-80 h-80" data-v-5a61862a></div><div class="circle top-1/2 left-[10%] bg-indigo-300 w-96 h-96" data-v-5a61862a></div><div class="circle top-[40%] right-[10%] bg-[#EA7FED] w-96 h-96" data-v-5a61862a></div><div class="circle top-[-30%] right-[25%] bg-[#EA7FED] w-80 h-80" data-v-5a61862a></div><div class="circle top-[-10%] right-[-20%] bg-[#60EBBD] w-96 h-96" data-v-5a61862a></div></div></div><div class="flex pt-10 space-x-4 row-start-1 col-span-full place-self-center" data-v-5a61862a><svg class="fill-current h-12" viewBox="0 0 600 566" xmlns="http://www.w3.org/2000/svg" data-v-5a61862a><path d="M311.206365,230.182669 C311.28819,231.109841 311.286839,232.042481 311.202321,232.969414 L290.024813,465.232255 C289.292636,473.262452 282.559067,479.410009 274.495562,479.41004 L166.544433,479.410425 C163.695771,479.410435 160.901542,480.190766 158.465064,481.666712 L23.6731813,563.319644 C16.3071206,567.781789 6.71846529,565.427698 2.2563204,558.061637 C0.427290617,555.042297 -0.323141886,551.491699 0.127745524,547.990491 L20.9737096,386.118148 C21.0587682,385.45765 21.1014327,384.79239 21.1014327,384.126434 L21.1014327,254.407888 C21.1014327,246.326969 27.2747292,239.584896 35.3243564,238.874529 L294.302214,216.020104 C302.881051,215.263039 310.4493,221.603833 311.206365,230.182669 Z M387.409383,230.579415 C388.191544,222.002834 395.778307,215.684204 404.354899,216.466365 L404.354899,216.466365 L585.822506,233.015738 C593.852599,233.748061 600,240.481608 600,248.545021 L600,248.545021 L600,463.825088 C600,472.437264 593.01846,479.418814 584.406273,479.418814 L584.406273,479.418814 L424.328186,479.418814 C416.271094,479.418814 409.540645,473.28076 408.80041,465.257746 L408.80041,465.257746 L387.41089,233.428306 C387.323462,232.480706 387.322952,231.527098 387.409383,230.579415 Z M584.406273,0 C593.01846,0 600,6.98155054 600,15.5937267 L600,15.5937267 L600,108.093478 C600,116.148064 593.865636,122.877298 585.845418,123.620651 L585.845418,123.620651 L404.263904,140.450638 C403.309215,140.539127 402.348402,140.539377 401.393671,140.451386 C392.817838,139.661024 386.506465,132.068209 387.296838,123.492377 L387.296838,123.492377 L397.372901,14.1626384 C398.112387,6.13894872 404.843128,0 412.900822,0 L412.900822,0 L584.406273,0 Z M285.795441,0 C293.860673,0 300.595104,6.15009303 301.325151,14.1822137 L311.253832,123.419669 C312.033383,131.996489 305.712456,139.581329 297.135626,140.36088 C296.212571,140.444785 295.283881,140.44622 294.360576,140.365174 L35.3412912,117.628938 C27.2885452,116.922075 21.1111112,110.17864 21.1111112,102.094935 L21.1111112,15.5937267 C21.1111112,6.98155054 28.0926617,0 36.7048378,0 L285.795441,0 Z" fill-rule="nonzero" data-v-5a61862a></path></svg>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$3, {
        as: "h2",
        class: "hidden md:block leading-[1.45rem] uppercase"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` SAFT <br data-v-5a61862a${_scopeId}>Apologetics `);
          } else {
            return [
              vue.createTextVNode(" SAFT "),
              vue.createVNode("br"),
              vue.createTextVNode("Apologetics ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="container my-14 md:my-40 flex md:grid grid-cols-2 row-start-2 col-span-full items-center place-content-center flex-wrap space-y-10 md:space-x-16" data-v-5a61862a>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$4, { class: "w-full" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="Head Image" data-v-5a61862a${_scopeId}>`);
          } else {
            return [
              vue.createVNode("img", {
                src: _imports_0,
                alt: "Head Image"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div data-v-5a61862a>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$3, {
        as: "h1",
        delay: 200,
        "triggered-by-scroll": true,
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
      _push(`<p class="mt-4 max-w-[45ch] text-lg" data-v-5a61862a>We are a web-based Christian initiative that aims to equip the believer defend their faith so that they may effectively evangelise.</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/Home.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5a61862a"]]);
var Menu_vue_vue_type_style_index_0_scoped_true_lang = "a.link[data-v-31ccc2fb] {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n  font-family: Joyride STD, sans-serif;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.line-1[data-v-31ccc2fb], .line-3[data-v-31ccc2fb] {\n  width: 20px;\n  height: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.line-1[data-v-31ccc2fb] {\n  transform: var(--20ed232d);\n  transform-origin: top left;\n}\n.line-3[data-v-31ccc2fb] {\n  transform: var(--6aa5f113);\n  transform-origin: bottom left;\n}";
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    vue.useCssVars((_ctx) => ({
      "20ed232d": lineOneTemplate,
      "6aa5f113": lineTwoTemplate
    }));
    const { width } = core.useWindowSize();
    const isMenuOpen = vue.ref(false);
    const menuLineDisplacement = 4;
    const lineOneTemplate = `translateY(-${menuLineDisplacement}px)`;
    const lineTwoTemplate = `translateY(${menuLineDisplacement}px)`;
    const links = [
      { title: "Home", href: "#" },
      { title: "About", href: "#" },
      { title: "Areopagus", href: "#" },
      { title: "Podcast", href: "#" }
    ];
    const hasClosingAnimationFinished = vue.ref(true);
    vue.watch(() => !hasClosingAnimationFinished.value, (val) => {
      if (val) {
        anime__default["default"].timeline({
          easing: "easeOutExpo",
          duration: 700
        }).add({
          targets: ".line-1",
          width: 40,
          translateY: [-menuLineDisplacement, 15],
          translateX: "0.75rem",
          rotate: -45
        }, 50).add({
          targets: ".line-3",
          width: 40,
          translateY: [menuLineDisplacement, -15],
          translateX: "0.75rem",
          rotate: 45
        }, 50);
      } else {
        anime__default["default"].timeline({
          easing: "easeOutExpo",
          duration: 500
        }).add({
          targets: ".line-1",
          width: 20,
          translateY: [15, -menuLineDisplacement],
          translateX: 0,
          rotate: 0
        }, 0).add({
          targets: ".line-3",
          width: 20,
          translateY: [-15, menuLineDisplacement],
          translateX: 0,
          rotate: 0
        }, 0);
      }
    });
    const menuStyle = vue.computed(() => {
      if (!hasClosingAnimationFinished.value) {
        if (width.value >= 1200) {
          return {
            borderRadius: 0,
            rotate: "0deg",
            top: 0,
            left: 0,
            width: "50vw",
            height: "100vh",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
          };
        } else {
          return {
            borderRadius: 0,
            rotate: "0deg",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
          };
        }
      } else {
        return {
          borderRadius: "50%",
          rotate: "45deg",
          top: "2.5rem",
          left: width.value >= 1200 ? `${0.5 * width.value - 586.5}px` : "0.75rem",
          width: "2.5rem",
          height: "2.5rem",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
        };
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "20ed232d": lineOneTemplate,
        "6aa5f113": lineTwoTemplate
      } };
      _push(`<!--[--><div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        id: "menu-circle",
        class: "w-10 h-10 rounded-[50%] fixed bg-gray-800 text-white shadow-2xl z-50 ease-out duration-700 origin-center",
        style: vue.unref(menuStyle)
      }, _cssVars))} data-v-31ccc2fb></div><div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: {
          "container h-[60%] top-[150px] lg:top-[300px] left-3 lg:left-[calc(calc(50vw-600px)+0.75rem)] grid grid-rows-4 content-center fixed z-[-1]": true,
          "z-[51]": !hasClosingAnimationFinished.value
        }
      }, _cssVars))} data-v-31ccc2fb><!--[-->`);
      serverRenderer.ssrRenderList(links, ({ title, href }, index) => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$3, {
          as: "a",
          href,
          class: "link",
          delay: index * 100,
          enter: isMenuOpen.value,
          exit: !isMenuOpen.value,
          "on-complete-exit": () => {
            if (index == links.length - 1)
              hasClosingAnimationFinished.value = true;
          }
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(title)}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        id: "menu-button",
        class: "line w-10 h-10 fixed z-[53] top-10 left-3 lg:left-[calc(calc(50vw-600px)+0.75rem)] grid place-content-center cursor-pointer"
      }, _cssVars))} data-v-31ccc2fb><div class="line-1" data-v-31ccc2fb></div><div class="line-3" data-v-31ccc2fb></div></div><div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: { "absolute inset-0 linear duration-500": true, "bg-black/50 z-[49]": isMenuOpen.value, "z-[-1]": !isMenuOpen.value }
      }, _cssVars))} data-v-31ccc2fb></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Menu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-31ccc2fb"]]);
var App_vue_vue_type_style_index_0_lang = "@font-face {\n    font-family: 'Joyride ALT';\n    src: url('data:font/woff2;base64,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') format('woff2'),\n        url('__VITE_ASSET__7071b53e__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride ALT';\n    src: url('data:font/woff2;base64,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') format('woff2'),\n        url('__VITE_ASSET__5c7de71f__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride ALT Outline';\n    src: url('__VITE_ASSET__d4706e6d__') format('woff2'),\n        url('__VITE_ASSET__42beef83__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride ALT Outline';\n    src: url('__VITE_ASSET__1d95485f__') format('woff2'),\n        url('__VITE_ASSET__4edcbf1e__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE';\n    src: url('__VITE_ASSET__99ad94dc__') format('woff2'),\n        url('__VITE_ASSET__d7be83a2__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD Outline';\n    src: url('__VITE_ASSET__a3b8159c__') format('woff2'),\n        url('__VITE_ASSET__056f0747__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT';\n    src: url('__VITE_ASSET__8b1fc4fb__') format('woff2'),\n        url('__VITE_ASSET__9a0b8d2a__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD Outline';\n    src: url('__VITE_ASSET__b51297ed__') format('woff2'),\n        url('__VITE_ASSET__f3f4e706__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT Outline';\n    src: url('__VITE_ASSET__ef2a7100__') format('woff2'),\n        url('__VITE_ASSET__e30cb2eb__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT';\n    src: url('__VITE_ASSET__a97e6d6a__') format('woff2'),\n        url('__VITE_ASSET__18c817d9__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE';\n    src: url('__VITE_ASSET__6a7bf059__') format('woff2'),\n        url('__VITE_ASSET__eec5d7c6__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT Outline';\n    src: url('__VITE_ASSET__fcc86b2b__') format('woff2'),\n        url('__VITE_ASSET__b47f748f__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD';\n    src: url('__VITE_ASSET__66498a98__') format('woff2'),\n        url('__VITE_ASSET__77302732__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD';\n    src: url('__VITE_ASSET__9692674a__') format('woff2'),\n        url('__VITE_ASSET__e5fea958__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE Outline';\n    src: url('__VITE_ASSET__597b2829__') format('woff2'),\n        url('__VITE_ASSET__fb04c048__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE Outline';\n    src: url('__VITE_ASSET__4798b589__') format('woff2'),\n        url('__VITE_ASSET__5cc08eea__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__f55c88ce__') format('woff2'),\n        url('__VITE_ASSET__0b59e71d__') format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__60d02844__') format('woff2'),\n        url('__VITE_ASSET__889dd891__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__f55c88ce__') format('woff2'),\n        url('__VITE_ASSET__0b59e71d__') format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__0a944ca1__') format('woff2'),\n        url('__VITE_ASSET__e0a978da__') format('woff');\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a120ecbc__') format('woff2'),\n        url('__VITE_ASSET__826f558c__') format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__0a944ca1__') format('woff2'),\n        url('__VITE_ASSET__e0a978da__') format('woff');\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a120ecbc__') format('woff2'),\n        url('__VITE_ASSET__826f558c__') format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__60d02844__') format('woff2'),\n        url('__VITE_ASSET__889dd891__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a5cbb18a__') format('woff2'),\n        url('__VITE_ASSET__06b29d85__') format('woff');\n    font-weight: 100;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a5cbb18a__') format('woff2'),\n        url('__VITE_ASSET__06b29d85__') format('woff');\n    font-weight: 100;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__17a58d65__') format('woff2'),\n        url('__VITE_ASSET__fbe87b0f__') format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__17a58d65__') format('woff2'),\n        url('__VITE_ASSET__fbe87b0f__') format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\n\n/*! tailwindcss v2.2.16 | MIT License | https://tailwindcss.com */\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n	box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n	-moz-tab-size: 4;\n	-o-tab-size: 4;\n	   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n	line-height: 1.15; /* 1 */\n	-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\nbody {\n	margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n	font-family:\n		system-ui,\n		-apple-system, /* Firefox supports this but not yet `system-ui` */\n		'Segoe UI',\n		Roboto,\n		Helvetica,\n		Arial,\n		sans-serif,\n		'Apple Color Emoji',\n		'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n	height: 0; /* 1 */\n	color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n	-webkit-text-decoration: underline dotted;\n	        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n	font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n	font-family:\n		ui-monospace,\n		SFMono-Regular,\n		Consolas,\n		'Liberation Mono',\n		Menlo,\n		monospace; /* 1 */\n	font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n	font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n	font-size: 75%;\n	line-height: 0;\n	position: relative;\n	vertical-align: baseline;\n}\nsub {\n	bottom: -0.25em;\n}\nsup {\n	top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n	text-indent: 0; /* 1 */\n	border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n	font-family: inherit; /* 1 */\n	font-size: 100%; /* 1 */\n	line-height: 1.15; /* 1 */\n	margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n	text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n	-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n	border-style: none;\n	padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n	outline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n	box-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n	padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n	vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n	height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n	-webkit-appearance: textfield; /* 1 */\n	outline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n	-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n	-webkit-appearance: button; /* 1 */\n	font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n	display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n:-moz-focusring {\n	outline: auto;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after {\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-blur: var(--tw-empty,/*!*/ /*!*/);\n    --tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n    --tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n    --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n    --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n    --tw-invert: var(--tw-empty,/*!*/ /*!*/);\n    --tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n    --tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n    --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n    --tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n    --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\n    --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\n    --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\n    --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\n    --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n    --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\n    --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\n    --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\n    --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\n    --tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\nh1 {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n    font-family: Joyride STD, sans-serif;\n    line-height: 1.25;\n}\nh2 {\n    font-size: 1.5rem;\n    line-height: 2rem;\n    font-family: Joyride STD, sans-serif;\n    line-height: 1;\n}\np {\n    font-family: Manrope, sans-serif;\n    max-width: 65ch;\n    font-size: 1rem;\n    line-height: 1.5rem;\n}\n.clip {\n    display: block;\n    -webkit-clip-path: view-box;\n            clip-path: view-box;\n}\n.container {\n    width: 100%;\n}\n@media (min-width: 640px) {\n.container {\n        max-width: 640px;\n}\n}\n@media (min-width: 768px) {\n.container {\n        max-width: 768px;\n}\n}\n@media (min-width: 1024px) {\n.container {\n        max-width: 1024px;\n}\n}\n@media (min-width: 1280px) {\n.container {\n        max-width: 1280px;\n}\n}\n@media (min-width: 1536px) {\n.container {\n        max-width: 1536px;\n}\n}\n.container {\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    width: min(1200px, 100%);\n}\n.hero {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    width: 100vw;\n}\n.invisible {\n    visibility: hidden;\n}\n.fixed {\n    position: fixed;\n}\n.absolute {\n    position: absolute;\n}\n.relative {\n    position: relative;\n}\n.inset-0 {\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n}\n.top-\\[150px\\] {\n    top: 150px;\n}\n.left-3 {\n    left: 0.75rem;\n}\n.top-10 {\n    top: 2.5rem;\n}\n.top-0 {\n    top: 0px;\n}\n.top-\\[-20\\%\\] {\n    top: -20%;\n}\n.left-\\[-12\\%\\] {\n    left: -12%;\n}\n.top-1\\/2 {\n    top: 50%;\n}\n.left-\\[10\\%\\] {\n    left: 10%;\n}\n.top-\\[40\\%\\] {\n    top: 40%;\n}\n.right-\\[10\\%\\] {\n    right: 10%;\n}\n.top-\\[-30\\%\\] {\n    top: -30%;\n}\n.right-\\[25\\%\\] {\n    right: 25%;\n}\n.top-\\[-10\\%\\] {\n    top: -10%;\n}\n.right-\\[-20\\%\\] {\n    right: -20%;\n}\n.z-50 {\n    z-index: 50;\n}\n.z-\\[-1\\] {\n    z-index: -1;\n}\n.z-\\[51\\] {\n    z-index: 51;\n}\n.z-\\[53\\] {\n    z-index: 53;\n}\n.z-\\[49\\] {\n    z-index: 49;\n}\n.z-\\[1\\] {\n    z-index: 1;\n}\n.col-span-full {\n    grid-column: 1 / -1;\n}\n.row-span-full {\n    grid-row: 1 / -1;\n}\n.row-start-1 {\n    grid-row-start: 1;\n}\n.row-start-2 {\n    grid-row-start: 2;\n}\n.-m-4 {\n    margin: -1rem;\n}\n.my-14 {\n    margin-top: 3.5rem;\n    margin-bottom: 3.5rem;\n}\n.mt-4 {\n    margin-top: 1rem;\n}\n.flex {\n    display: flex;\n}\n.grid {\n    display: grid;\n}\n.hidden {\n    display: none;\n}\n.h-10 {\n    height: 2.5rem;\n}\n.h-\\[60\\%\\] {\n    height: 60%;\n}\n.h-full {\n    height: 100%;\n}\n.h-80 {\n    height: 20rem;\n}\n.h-96 {\n    height: 24rem;\n}\n.h-12 {\n    height: 3rem;\n}\n.w-10 {\n    width: 2.5rem;\n}\n.w-80 {\n    width: 20rem;\n}\n.w-96 {\n    width: 24rem;\n}\n.w-full {\n    width: 100%;\n}\n.max-w-\\[45ch\\] {\n    max-width: 45ch;\n}\n.origin-center {\n    transform-origin: center;\n}\n.transform {\n    transform: var(--tw-transform);\n}\n.transform-gpu {\n    --tw-transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer {\n    cursor: pointer;\n}\n.grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-4 {\n    grid-template-rows: repeat(4, minmax(0, 1fr));\n}\n.grid-rows-\\[max-content\\2c auto\\] {\n    grid-template-rows: -webkit-max-content auto;\n    grid-template-rows: max-content auto;\n}\n.flex-wrap {\n    flex-wrap: wrap;\n}\n.place-content-center {\n    place-content: center;\n}\n.content-center {\n    align-content: center;\n}\n.items-center {\n    align-items: center;\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(1rem * var(--tw-space-x-reverse));\n    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-10 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));\n}\n.place-self-center {\n    place-self: center;\n}\n.overflow-hidden {\n    overflow: hidden;\n}\n.rounded-\\[50\\%\\] {\n    border-radius: 50%;\n}\n.bg-gray-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n.bg-black\\/50 {\n    background-color: rgba(0, 0, 0, 0.5);\n}\n.bg-blue-100\\/40 {\n    background-color: rgba(219, 234, 254, 0.4);\n}\n.bg-blue-400 {\n    --tw-bg-opacity: 1;\n    background-color: rgba(96, 165, 250, var(--tw-bg-opacity));\n}\n.bg-indigo-300 {\n    --tw-bg-opacity: 1;\n    background-color: rgba(165, 180, 252, var(--tw-bg-opacity));\n}\n.bg-\\[\\#EA7FED\\] {\n    --tw-bg-opacity: 1;\n    background-color: rgba(234, 127, 237, var(--tw-bg-opacity));\n}\n.bg-\\[\\#60EBBD\\] {\n    --tw-bg-opacity: 1;\n    background-color: rgba(96, 235, 189, var(--tw-bg-opacity));\n}\n.fill-current {\n    fill: currentColor;\n}\n.px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n.pt-10 {\n    padding-top: 2.5rem;\n}\n.text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n}\n.uppercase {\n    text-transform: uppercase;\n}\n.leading-\\[1\\.45rem\\] {\n    line-height: 1.45rem;\n}\n.text-white {\n    --tw-text-opacity: 1;\n    color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.shadow-2xl {\n    --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.blur {\n    --tw-blur: blur(8px);\n    filter: var(--tw-filter);\n}\n.filter {\n    filter: var(--tw-filter);\n}\n.backdrop-blur-3xl {\n    --tw-backdrop-blur: blur(64px);\n    -webkit-backdrop-filter: var(--tw-backdrop-filter);\n            backdrop-filter: var(--tw-backdrop-filter);\n}\n.transition-transform {\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.duration-700 {\n    transition-duration: 700ms;\n}\n.duration-500 {\n    transition-duration: 500ms;\n}\n.duration-300 {\n    transition-duration: 300ms;\n}\n.ease-out {\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  --tw-text-opacity: 1;\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\n  overflow-x: hidden;\n}\n@media (min-width: 768px) {\n.md\\:my-40 {\n        margin-top: 10rem;\n        margin-bottom: 10rem;\n}\n.md\\:block {\n        display: block;\n}\n.md\\:grid {\n        display: grid;\n}\n.md\\:space-x-16 > :not([hidden]) ~ :not([hidden]) {\n        --tw-space-x-reverse: 0;\n        margin-right: calc(4rem * var(--tw-space-x-reverse));\n        margin-left: calc(4rem * calc(1 - var(--tw-space-x-reverse)));\n}\n}\n@media (min-width: 1024px) {\n.lg\\:top-\\[300px\\] {\n        top: 300px;\n}\n.lg\\:left-\\[calc\\(calc\\(50vw-600px\\)\\+0\\.75rem\\)\\] {\n        left: calc(calc(50vw - 600px) + 0.75rem);\n}\n}\n@media (min-width: 1280px) {\n.xl\\:mx-auto {\n        margin-left: auto;\n        margin-right: auto;\n}\n.xl\\:w-\\[Min\\(1200px\\2c 100\\%\\)\\] {\n        width: Min(1200px,100%);\n}\n}";
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(Menu, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(Home, null, null, _parent));
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
