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
var imagesLoaded = require("imagesloaded");
var singlePage = require("vite-ssg/single-page");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var gsap__default = /* @__PURE__ */ _interopDefaultLegacy(gsap);
var ScrollTrigger__default = /* @__PURE__ */ _interopDefaultLegacy(ScrollTrigger);
var LocomotiveScroll__default = /* @__PURE__ */ _interopDefaultLegacy(LocomotiveScroll);
var imagesLoaded__default = /* @__PURE__ */ _interopDefaultLegacy(imagesLoaded);
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
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.ssrRenderAttrs(vue.mergeProps({
    viewBox: "0 0 600 566",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M311.206365,230.182669 C311.28819,231.109841 311.286839,232.042481 311.202321,232.969414 L290.024813,465.232255 C289.292636,473.262452 282.559067,479.410009 274.495562,479.41004 L166.544433,479.410425 C163.695771,479.410435 160.901542,480.190766 158.465064,481.666712 L23.6731813,563.319644 C16.3071206,567.781789 6.71846529,565.427698 2.2563204,558.061637 C0.427290617,555.042297 -0.323141886,551.491699 0.127745524,547.990491 L20.9737096,386.118148 C21.0587682,385.45765 21.1014327,384.79239 21.1014327,384.126434 L21.1014327,254.407888 C21.1014327,246.326969 27.2747292,239.584896 35.3243564,238.874529 L294.302214,216.020104 C302.881051,215.263039 310.4493,221.603833 311.206365,230.182669 Z M387.409383,230.579415 C388.191544,222.002834 395.778307,215.684204 404.354899,216.466365 L404.354899,216.466365 L585.822506,233.015738 C593.852599,233.748061 600,240.481608 600,248.545021 L600,248.545021 L600,463.825088 C600,472.437264 593.01846,479.418814 584.406273,479.418814 L584.406273,479.418814 L424.328186,479.418814 C416.271094,479.418814 409.540645,473.28076 408.80041,465.257746 L408.80041,465.257746 L387.41089,233.428306 C387.323462,232.480706 387.322952,231.527098 387.409383,230.579415 Z M584.406273,0 C593.01846,0 600,6.98155054 600,15.5937267 L600,15.5937267 L600,108.093478 C600,116.148064 593.865636,122.877298 585.845418,123.620651 L585.845418,123.620651 L404.263904,140.450638 C403.309215,140.539127 402.348402,140.539377 401.393671,140.451386 C392.817838,139.661024 386.506465,132.068209 387.296838,123.492377 L387.296838,123.492377 L397.372901,14.1626384 C398.112387,6.13894872 404.843128,0 412.900822,0 L412.900822,0 L584.406273,0 Z M285.795441,0 C293.860673,0 300.595104,6.15009303 301.325151,14.1822137 L311.253832,123.419669 C312.033383,131.996489 305.712456,139.581329 297.135626,140.36088 C296.212571,140.444785 295.283881,140.44622 294.360576,140.365174 L35.3412912,117.628938 C27.2885452,116.922075 21.1111112,110.17864 21.1111112,102.094935 L21.1111112,15.5937267 C21.1111112,6.98155054 28.0926617,0 36.7048378,0 L285.795441,0 Z" fill-rule="nonzero"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/SaftLogo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var SaftLogo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
var Head_vue_vue_type_style_index_0_scoped_true_lang = "html.has-scroll-smooth[data-v-691511be] {\n  overflow: hidden;\n}\nhtml.has-scroll-dragging[data-v-691511be] {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.has-scroll-smooth body[data-v-691511be] {\n  overflow: hidden;\n}\n.has-scroll-smooth [data-scroll-container][data-v-691511be] {\n  min-height: 100vh;\n}\n[data-scroll-direction=horizontal] [data-scroll-container][data-v-691511be] {\n  height: 100vh;\n  display: inline-block;\n  white-space: nowrap;\n}\n[data-scroll-direction=horizontal] [data-scroll-section][data-v-691511be] {\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  height: 100%;\n}\n.c-scrollbar[data-v-691511be] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 11px;\n  height: 100%;\n  transform-origin: center right;\n  transition: transform 0.3s, opacity 0.3s;\n  opacity: 0;\n}\n.c-scrollbar[data-v-691511be]:hover {\n  transform: scaleX(1.45);\n}\n.c-scrollbar[data-v-691511be]:hover, .has-scroll-scrolling .c-scrollbar[data-v-691511be], .has-scroll-dragging .c-scrollbar[data-v-691511be] {\n  opacity: 1;\n}\n[data-scroll-direction=horizontal] .c-scrollbar[data-v-691511be] {\n  width: 100%;\n  height: 10px;\n  top: auto;\n  bottom: 0;\n  transform: scaleY(1);\n}\n[data-scroll-direction=horizontal] .c-scrollbar[data-v-691511be]:hover {\n  transform: scaleY(1.3);\n}\n.c-scrollbar_thumb[data-v-691511be] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.5;\n  width: 7px;\n  border-radius: 10px;\n  margin: 2px;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.has-scroll-dragging .c-scrollbar_thumb[data-v-691511be] {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n[data-scroll-direction=horizontal] .c-scrollbar_thumb[data-v-691511be] {\n  right: auto;\n  bottom: 0;\n}\n#seeking-text[data-v-691511be] {\n  font-size: calc(6* 14 * 100vw / 1800);\n  line-height: 1.1;\n  width: max(100rem, 77.7777777778vw);\n  --tw-gradient-from: #60a5fa;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 165, 250, 0));\n  --tw-gradient-to: #fff;\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n  -webkit-background-clip: text;\n          background-clip: text;\n}";
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(_attrs)} data-v-691511be><div id="head-section" class="hero h-screen grid grid-rows-[6vw,auto,auto] overflow-hidden text-white z-10 pl-f-28" data-v-691511be><div data-scroll class="flex z-20 col-span-full row-start-1 place-self-center text-white" data-v-691511be>`);
      _push(serverRenderer.ssrRenderComponent(SaftLogo, { class: "fill-current h-f-12" }, null, _parent));
      _push(`<h2 class="hidden leading-none uppercase md:block ml-f-4" data-v-691511be> SAFT <br data-v-691511be>Apologetics </h2></div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$6, {
        as: "h1",
        "data-scroll": "",
        class: "col-span-full row-start-2 self-end w-[70vw]",
        delay: 1.2,
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
      _push(`<p class="col-span-full row-start-3 mt-[0]" data-v-691511be> We are a web-based Christian initiative that aims to equip the believer defend their faith so that they may effectively evangelise. </p></div><div id="about-section" class="grid place-content-center h-screen text-white" data-v-691511be><h1 data-scroll data-v-691511be>About Us</h1></div></main>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/Head.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Hero = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-691511be"]]);
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
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
    breakpoints.smaller("md");
    core.tryOnMounted(async () => {
      var _a, _b, _c, _d;
      const scroller = "[data-scroll-container]";
      const scroll = new LocomotiveScroll__default["default"]({
        el: document.querySelector(scroller),
        smooth: true
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
        pinType: document.querySelector(scroller).style.transform ? "transform" : "fixed"
      });
      ScrollTrigger__default["default"].defaults({
        immediateRender: false,
        scroller
      });
      let tl = gsap__default["default"].timeline({
        scrollTrigger: {
          trigger: "#head",
          start: "top top",
          endTrigger: "#areopagus",
          end: "bottom bottom",
          scrub: 1
        }
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
      const lightVal = (_a = light.value) == null ? void 0 : _a.light;
      const cameraVal = (_b = camera.value) == null ? void 0 : _b.camera.position;
      const sceneVal = (_c = scene.value) == null ? void 0 : _c.scene.rotation;
      (_d = renderer.value) == null ? void 0 : _d.onBeforeRender(() => {
        const { pointer } = renderer.value.three;
        lightVal.position.copy(pointer.positionV3);
        lightVal.position.z = 10;
        sceneVal.z += 1e-3;
      });
      tl.to(cameraVal, {
        x: "+=10"
      });
      tl.to(sceneVal, {
        y: "+=0.4"
      }, "<0");
      tl.to(cameraVal, {
        x: "+=10",
        y: "-=10"
      });
      tl.to(sceneVal, {
        x: "+=0.5"
      }, "<0");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ "data-scroll-container": "" }, _attrs))}><section data-scroll-section class="absolute top-0 z-[-1]"><div data-scroll id="head" class="h-screen bg-[#8e8be4] hero"></div><div data-scroll id="about" class="h-screen bg-pink-300 hero"></div><div data-scroll id="areopagus" class="h-screen bg-blue-300 hero"></div></section><div data-scroll-section><div data-scroll data-scroll-sticky data-scroll-target="#home" class="fixed z-[-1]">`);
      _push(serverRenderer.ssrRenderComponent(vue.unref(troisjs.Renderer), {
        ref: (_value, _refs) => {
          _refs["renderer"] = _value;
          renderer.value = _value;
        },
        alpha: "",
        antialias: "",
        pointer: "",
        resize: "window"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(vue.unref(troisjs.Camera), {
              ref: (_value, _refs) => {
                _refs["camera"] = _value;
                camera.value = _value;
              },
              position: { z: 1e3 },
              fov: 3
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(vue.unref(troisjs.Scene), {
              ref: (_value, _refs) => {
                _refs["scene"] = _value;
                scene.value = _value;
              }
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(troisjs.AmbientLight), { color: "#ffffff" }, null, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(troisjs.PointLight), {
                    ref: (_value, _refs) => {
                      _refs["light"] = _value;
                      light.value = _value;
                    },
                    color: "#a78bfa",
                    position: { y: 20 },
                    intensity: 0.7
                  }, null, _parent3, _scopeId2));
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(troisjs.InstancedMesh), {
                    ref: (_value, _refs) => {
                      _refs["imesh"] = _value;
                      imesh.value = _value;
                    },
                    count: instances.length
                  }, {
                    default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer.ssrRenderComponent(vue.unref(troisjs.SphereGeometry), {
                          radius: 10,
                          "width-segments": 50,
                          "height-segments": 40
                        }, null, _parent4, _scopeId3));
                        _push4(serverRenderer.ssrRenderComponent(vue.unref(troisjs.StandardMaterial), { color: "#aaaaaa" }, null, _parent4, _scopeId3));
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
                  }, _parent3, _scopeId2));
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
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(vue.unref(troisjs.EffectComposer), null, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.ssrRenderComponent(vue.unref(troisjs.RenderPass), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vue.createVNode(vue.unref(troisjs.RenderPass))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(vue.unref(troisjs.Camera), {
                ref: (_value, _refs) => {
                  _refs["camera"] = _value;
                  camera.value = _value;
                },
                position: { z: 1e3 },
                fov: 3
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
      }, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(Hero, { id: "home" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/views/Home.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Menu_vue_vue_type_style_index_0_scoped_true_lang = "html.has-scroll-smooth[data-v-ec3732c2] {\n  overflow: hidden;\n}\nhtml.has-scroll-dragging[data-v-ec3732c2] {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.has-scroll-smooth body[data-v-ec3732c2] {\n  overflow: hidden;\n}\n.has-scroll-smooth [data-scroll-container][data-v-ec3732c2] {\n  min-height: 100vh;\n}\n[data-scroll-direction=horizontal] [data-scroll-container][data-v-ec3732c2] {\n  height: 100vh;\n  display: inline-block;\n  white-space: nowrap;\n}\n[data-scroll-direction=horizontal] [data-scroll-section][data-v-ec3732c2] {\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  height: 100%;\n}\n.c-scrollbar[data-v-ec3732c2] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 11px;\n  height: 100%;\n  transform-origin: center right;\n  transition: transform 0.3s, opacity 0.3s;\n  opacity: 0;\n}\n.c-scrollbar[data-v-ec3732c2]:hover {\n  transform: scaleX(1.45);\n}\n.c-scrollbar[data-v-ec3732c2]:hover, .has-scroll-scrolling .c-scrollbar[data-v-ec3732c2], .has-scroll-dragging .c-scrollbar[data-v-ec3732c2] {\n  opacity: 1;\n}\n[data-scroll-direction=horizontal] .c-scrollbar[data-v-ec3732c2] {\n  width: 100%;\n  height: 10px;\n  top: auto;\n  bottom: 0;\n  transform: scaleY(1);\n}\n[data-scroll-direction=horizontal] .c-scrollbar[data-v-ec3732c2]:hover {\n  transform: scaleY(1.3);\n}\n.c-scrollbar_thumb[data-v-ec3732c2] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.5;\n  width: 7px;\n  border-radius: 10px;\n  margin: 2px;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.has-scroll-dragging .c-scrollbar_thumb[data-v-ec3732c2] {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n[data-scroll-direction=horizontal] .c-scrollbar_thumb[data-v-ec3732c2] {\n  right: auto;\n  bottom: 0;\n}\n.line[data-v-ec3732c2] {\n  height: max(0.075rem, 0.0583333333vw);\n  width: max(1.5rem, 1.1666666667vw);\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.line-2[data-v-ec3732c2] {\n  margin-top: max(0.75rem, 0.5833333333vw);\n}";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "fixed grid place-content-center left-0 inset-y-0 w-[4vw] border-white border-l-[0.05vw] border-r-[0.05vw] z-40" }, _attrs))} data-v-ec3732c2><div class="line line-1" data-v-ec3732c2></div><div class="line line-2" data-v-ec3732c2></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Menu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Menu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ec3732c2"]]);
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
var App_vue_vue_type_style_index_0_lang = "@font-face {\n    font-family: 'Joyride ALT';\n    src: url('__VITE_ASSET__f2a14eb9__') format('woff2'),\n        url('__VITE_ASSET__7071b53e__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride ALT';\n    src: url('__VITE_ASSET__6910a711__') format('woff2'),\n        url('__VITE_ASSET__5c7de71f__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride ALT Outline';\n    src: url('__VITE_ASSET__d4706e6d__') format('woff2'),\n        url('__VITE_ASSET__42beef83__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride ALT Outline';\n    src: url('__VITE_ASSET__1d95485f__') format('woff2'),\n        url('__VITE_ASSET__4edcbf1e__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE';\n    src: url('__VITE_ASSET__99ad94dc__') format('woff2'),\n        url('__VITE_ASSET__d7be83a2__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD Outline';\n    src: url('__VITE_ASSET__a3b8159c__') format('woff2'),\n        url('__VITE_ASSET__056f0747__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT';\n    src: url('__VITE_ASSET__8b1fc4fb__') format('woff2'),\n        url('__VITE_ASSET__9a0b8d2a__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD Outline';\n    src: url('__VITE_ASSET__b51297ed__') format('woff2'),\n        url('__VITE_ASSET__f3f4e706__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT Outline';\n    src: url('__VITE_ASSET__ef2a7100__') format('woff2'),\n        url('__VITE_ASSET__e30cb2eb__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT';\n    src: url('__VITE_ASSET__a97e6d6a__') format('woff2'),\n        url('__VITE_ASSET__18c817d9__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE';\n    src: url('__VITE_ASSET__6a7bf059__') format('woff2'),\n        url('__VITE_ASSET__eec5d7c6__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride EXT Outline';\n    src: url('__VITE_ASSET__fcc86b2b__') format('woff2'),\n        url('__VITE_ASSET__b47f748f__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD';\n    src: url('__VITE_ASSET__66498a98__') format('woff2'),\n        url('__VITE_ASSET__77302732__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride STD';\n    src: url('__VITE_ASSET__9692674a__') format('woff2'),\n        url('__VITE_ASSET__e5fea958__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE Outline';\n    src: url('__VITE_ASSET__597b2829__') format('woff2'),\n        url('__VITE_ASSET__fb04c048__') format('woff');\n    font-weight: normal;\n    font-style: italic;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Joyride WIDE Outline';\n    src: url('__VITE_ASSET__4798b589__') format('woff2'),\n        url('__VITE_ASSET__5cc08eea__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__f55c88ce__') format('woff2'),\n        url('__VITE_ASSET__0b59e71d__') format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__60d02844__') format('woff2'),\n        url('__VITE_ASSET__889dd891__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__f55c88ce__') format('woff2'),\n        url('__VITE_ASSET__0b59e71d__') format('woff');\n    font-weight: 500;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__0a944ca1__') format('woff2'),\n        url('__VITE_ASSET__e0a978da__') format('woff');\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a120ecbc__') format('woff2'),\n        url('__VITE_ASSET__826f558c__') format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__0a944ca1__') format('woff2'),\n        url('__VITE_ASSET__e0a978da__') format('woff');\n    font-weight: 300;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a120ecbc__') format('woff2'),\n        url('__VITE_ASSET__826f558c__') format('woff');\n    font-weight: bold;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__60d02844__') format('woff2'),\n        url('__VITE_ASSET__889dd891__') format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a5cbb18a__') format('woff2'),\n        url('__VITE_ASSET__06b29d85__') format('woff');\n    font-weight: 100;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__a5cbb18a__') format('woff2'),\n        url('__VITE_ASSET__06b29d85__') format('woff');\n    font-weight: 100;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__17a58d65__') format('woff2'),\n        url('__VITE_ASSET__fbe87b0f__') format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\n@font-face {\n    font-family: 'Manrope';\n    src: url('__VITE_ASSET__17a58d65__') format('woff2'),\n        url('__VITE_ASSET__fbe87b0f__') format('woff');\n    font-weight: 600;\n    font-style: normal;\n    font-display: swap;\n}\nhtml.has-scroll-smooth {\n  overflow: hidden;\n}\nhtml.has-scroll-dragging {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.has-scroll-smooth body {\n  overflow: hidden;\n}\n.has-scroll-smooth [data-scroll-container] {\n  min-height: 100vh;\n}\n[data-scroll-direction=horizontal] [data-scroll-container] {\n  height: 100vh;\n  display: inline-block;\n  white-space: nowrap;\n}\n[data-scroll-direction=horizontal] [data-scroll-section] {\n  display: inline-block;\n  vertical-align: top;\n  white-space: nowrap;\n  height: 100%;\n}\n.c-scrollbar {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 11px;\n  height: 100%;\n  transform-origin: center right;\n  transition: transform 0.3s, opacity 0.3s;\n  opacity: 0;\n}\n.c-scrollbar:hover {\n  transform: scaleX(1.45);\n}\n.c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {\n  opacity: 1;\n}\n[data-scroll-direction=horizontal] .c-scrollbar {\n  width: 100%;\n  height: 10px;\n  top: auto;\n  bottom: 0;\n  transform: scaleY(1);\n}\n[data-scroll-direction=horizontal] .c-scrollbar:hover {\n  transform: scaleY(1.3);\n}\n.c-scrollbar_thumb {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: black;\n  opacity: 0.5;\n  width: 7px;\n  border-radius: 10px;\n  margin: 2px;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.has-scroll-dragging .c-scrollbar_thumb {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n[data-scroll-direction=horizontal] .c-scrollbar_thumb {\n  right: auto;\n  bottom: 0;\n}\n\n/*! tailwindcss v2.2.16 | MIT License | https://tailwindcss.com */\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n	box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n	-moz-tab-size: 4;\n	-o-tab-size: 4;\n	   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n	line-height: 1.15; /* 1 */\n	-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\nbody {\n	margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n	font-family:\n		system-ui,\n		-apple-system, /* Firefox supports this but not yet `system-ui` */\n		'Segoe UI',\n		Roboto,\n		Helvetica,\n		Arial,\n		sans-serif,\n		'Apple Color Emoji',\n		'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n	height: 0; /* 1 */\n	color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n	-webkit-text-decoration: underline dotted;\n	        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n	font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n	font-family:\n		ui-monospace,\n		SFMono-Regular,\n		Consolas,\n		'Liberation Mono',\n		Menlo,\n		monospace; /* 1 */\n	font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n	font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n	font-size: 75%;\n	line-height: 0;\n	position: relative;\n	vertical-align: baseline;\n}\nsub {\n	bottom: -0.25em;\n}\nsup {\n	top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n	text-indent: 0; /* 1 */\n	border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n	font-family: inherit; /* 1 */\n	font-size: 100%; /* 1 */\n	line-height: 1.15; /* 1 */\n	margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n	text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n	-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n	border-style: none;\n	padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n	outline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n	box-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n	padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n	vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n	height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n	-webkit-appearance: textfield; /* 1 */\n	outline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n	-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n	-webkit-appearance: button; /* 1 */\n	font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n	display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n:-moz-focusring {\n	outline: auto;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after {\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n    --tw-border-opacity: 1;\n    border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\nh1 {\n    font-size: calc(6* 14 * 100vw / 1800);\n    line-height: 1.1;\n    font-family: Joyride STD, sans-serif;\n}\nh2 {\n    font-size: calc(1.5* 14 * 100vw / 1800);\n    line-height: calc(2* 14 * 100vw / 1800);\n    font-family: Joyride STD, sans-serif;\n}\np {\n    font-family: Manrope, sans-serif;\n    font-size: calc(1.25* 14 * 100vw / 1800);\n    line-height: calc(1.75* 14 * 100vw / 1800);\n    max-width: 65ch;\n}\n.clip {\n    overflow: hidden;\n}\n.container {\n    width: 100%;\n}\n@media (min-width: 640px) {\n.container {\n        max-width: 640px;\n}\n}\n@media (min-width: 768px) {\n.container {\n        max-width: 768px;\n}\n}\n@media (min-width: 1024px) {\n.container {\n        max-width: 1024px;\n}\n}\n@media (min-width: 1280px) {\n.container {\n        max-width: 1280px;\n}\n}\n@media (min-width: 1536px) {\n.container {\n        max-width: 1536px;\n}\n}\n.container {\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n    width: min(1200px, 100%);\n}\n.hero {\n    width: 100vw;\n}\n.visible {\n    visibility: visible;\n}\n.fixed {\n    position: fixed;\n}\n.absolute {\n    position: absolute;\n}\n.inset-y-0 {\n    top: 0px;\n    bottom: 0px;\n}\n.left-0 {\n    left: 0px;\n}\n.top-0 {\n    top: 0px;\n}\n.z-40 {\n    z-index: 40;\n}\n.z-10 {\n    z-index: 10;\n}\n.z-20 {\n    z-index: 20;\n}\n.z-\\[-1\\] {\n    z-index: -1;\n}\n.z-\\[100\\] {\n    z-index: 100;\n}\n.col-span-full {\n    grid-column: 1 / -1;\n}\n.row-span-full {\n    grid-row: 1 / -1;\n}\n.row-start-1 {\n    grid-row-start: 1;\n}\n.row-start-2 {\n    grid-row-start: 2;\n}\n.row-start-3 {\n    grid-row-start: 3;\n}\n.ml-f-4 {\n    margin-left: calc(1 * 14 * 100vw / 1800);\n}\n.mt-\\[0\\] {\n    margin-top: 0;\n}\n.inline-block {\n    display: inline-block;\n}\n.flex {\n    display: flex;\n}\n.grid {\n    display: grid;\n}\n.hidden {\n    display: none;\n}\n.h-screen {\n    height: 100vh;\n}\n.h-f-12 {\n    height: calc(3 * 14 * 100vw / 1800);\n}\n.h-8 {\n    height: 2rem;\n}\n.h-10 {\n    height: 2.5rem;\n}\n.w-\\[4vw\\] {\n    width: 4vw;\n}\n.w-\\[70vw\\] {\n    width: 70vw;\n}\n.w-screen {\n    width: 100vw;\n}\n.w-8 {\n    width: 2rem;\n}\n.w-10 {\n    width: 2.5rem;\n}\n.transform {\n    transform: var(--tw-transform);\n}\n.transform-gpu {\n    --tw-transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@-webkit-keyframes ping {\n75%, 100% {\n        transform: scale(2);\n        opacity: 0;\n}\n}\n@keyframes ping {\n75%, 100% {\n        transform: scale(2);\n        opacity: 0;\n}\n}\n.animate-ping {\n    -webkit-animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n            animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n.resize {\n    resize: both;\n}\n.grid-rows-\\[6vw\\2c auto\\2c auto\\] {\n    grid-template-rows: 6vw auto auto;\n}\n.place-content-center {\n    place-content: center;\n}\n.place-self-center {\n    place-self: center;\n}\n.self-end {\n    align-self: flex-end;\n}\n.overflow-hidden {\n    overflow: hidden;\n}\n.rounded-full {\n    border-radius: 9999px;\n}\n.border-l-\\[0\\.05vw\\] {\n    border-left-width: 0.05vw;\n}\n.border-r-\\[0\\.05vw\\] {\n    border-right-width: 0.05vw;\n}\n.border-white {\n    --tw-border-opacity: 1;\n    border-color: rgba(255, 255, 255, var(--tw-border-opacity));\n}\n.bg-\\[\\#8e8be4\\] {\n    --tw-bg-opacity: 1;\n    background-color: rgba(142, 139, 228, var(--tw-bg-opacity));\n}\n.bg-pink-300 {\n    --tw-bg-opacity: 1;\n    background-color: rgba(249, 168, 212, var(--tw-bg-opacity));\n}\n.bg-blue-300 {\n    --tw-bg-opacity: 1;\n    background-color: rgba(147, 197, 253, var(--tw-bg-opacity));\n}\n.bg-blue-100 {\n    --tw-bg-opacity: 1;\n    background-color: rgba(219, 234, 254, var(--tw-bg-opacity));\n}\n.bg-blue-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgba(30, 64, 175, var(--tw-bg-opacity));\n}\n.fill-current {\n    fill: currentColor;\n}\n.pl-f-28 {\n    padding-left: calc(7 * 14 * 100vw / 1800);\n}\n.text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n}\n.uppercase {\n    text-transform: uppercase;\n}\n.leading-none {\n    line-height: 1;\n}\n.text-white {\n    --tw-text-opacity: 1;\n    color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.opacity-0 {\n    opacity: 0;\n}\n.transition-transform {\n    transition-property: transform;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.transition {\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    transition-duration: 150ms;\n}\n.duration-300 {\n    transition-duration: 300ms;\n}\n.duration-500 {\n    transition-duration: 500ms;\n}\n.ease-out {\n    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.ease-in-out {\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.will-change-transform {\n    will-change: transform;\n}\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  --tw-text-opacity: 1;\n  color: rgba(31, 41, 55, var(--tw-text-opacity));\n  overflow-x: hidden;\n}\nbody {\n    --tw-bg-opacity: 1;\n    background-color: rgba(219, 234, 254, var(--tw-bg-opacity));\n}\n@media (min-width: 768px) {\n.md\\:block {\n        display: block;\n}\n}";
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
      _push(serverRenderer.ssrRenderComponent(_sfc_main$3, null, null, _parent));
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
