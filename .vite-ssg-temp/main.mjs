var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
import { createI18n, useI18n } from "vue-i18n";
import LocomotiveScroll from "locomotive-scroll";
import { createPinia, defineStore } from "pinia";
import { ViteSSG } from "vite-ssg";
import { useSSRContext, mergeProps, ref, watch, unref, inject, defineComponent, withCtx, createTextVNode, resolveComponent, computed, watchEffect, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { createSharedComposable, useWindowSize, tryOnMounted, unrefElement, useBreakpoints, breakpointsTailwind } from "@vueuse/core";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger.js";
import SplitType from "split-type";
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";
var de = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xDCber"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Zur\xFCck"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Los"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Startseite"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dunkelmodus umschalten"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Sprachen \xE4ndern"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vite Startvorlage mit Vorlieben"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demo einer dynamischen Route"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Hi, ", _interpolate(_named("name")), "!"]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Auch bekannt als"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Wie hei\xDFt du?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Nicht gefunden"]);
  }
};
var __glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": de
}, Symbol.toStringTag, { value: "Module" }));
var en = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["About"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Back"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["GO"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Home"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Toggle dark mode"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Change languages"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Opinionated Vite Starter Template"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demo of dynamic route"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Hi, ", _interpolate(_named("name")), "!"]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Also known as"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["What's your name?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Not found"]);
  }
};
var __glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": en
}, Symbol.toStringTag, { value: "Module" }));
var es = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Acerca de"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Atr\xE1s"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ir"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Inicio"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Alternar modo oscuro"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cambiar idiomas"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Plantilla de Inicio de Vite Dogm\xE1tica"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demo de ruta din\xE1mica"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\xA1Hola, ", _interpolate(_named("name")), "!"]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tambi\xE9n conocido como"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xBFC\xF3mo te llamas?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["No se ha encontrado"]);
  }
};
var __glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": es
}, Symbol.toStringTag, { value: "Module" }));
var fr = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xC0 propos de"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Retour"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Essayer"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Accueil"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Basculer en mode sombre"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Changer de langue"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Exemple d'application Vite"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["D\xE9mo de route dynamique"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Salut, ", _interpolate(_named("name")), "!"]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Aussi connu sous le nom de"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Comment t'appelles-tu ?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Page non trouv\xE9e"]);
  }
};
var __glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": fr
}, Symbol.toStringTag, { value: "Module" }));
var id = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tentang"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Kembali"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Pergi"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Beranda"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ubah ke mode gelap"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ubah bahasa"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Template awal vite"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Contoh rute dinamik"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Halo, ", _interpolate(_named("name")), "!"]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Juga diketahui sebagai"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Siapa nama anda?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Tidak ditemukan"]);
  }
};
var __glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": id
}, Symbol.toStringTag, { value: "Module" }));
var it = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Su di me"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Indietro"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vai"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Home"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Attiva/disattiva modalit\xE0 scura"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Cambia lingua"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Modello per una Applicazione Vite"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demo di rotta dinamica"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Ciao, ", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Come ti chiami?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Non trovato"]);
  }
};
var __glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": it
}, Symbol.toStringTag, { value: "Module" }));
var ja = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u3053\u308C\u306F\uFF1F"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u623B\u308B"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9032\u3080"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30DB\u30FC\u30E0"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u5207\u308A\u66FF\u3048"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8A00\u8A9E\u5207\u308A\u66FF\u3048"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u56FA\u57F7\u3055\u308C\u305F Vite \u30B9\u30BF\u30FC\u30BF\u30FC\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u52D5\u7684\u30EB\u30FC\u30C8\u306E\u30C7\u30E2"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u3053\u3093\u306B\u3061\u306F\u3001", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u541B\u306E\u540D\u306F\u3002"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"]);
  }
};
var __glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ja
}, Symbol.toStringTag, { value: "Module" }));
var ko = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC18C\uAC1C"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB4A4\uB85C\uAC00\uAE30"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774\uB3D9"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uD648"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2E4\uD06C\uBAA8\uB4DC \uD1A0\uAE00"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC5B8\uC5B4 \uBCC0\uACBD"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Vite \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uB2E4\uC774\uB098\uBBF9 \uB77C\uC6B0\uD2B8 \uB370\uBAA8"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\uC548\uB155, ", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\uC774\uB984\uC774 \uBB50\uC608\uC694?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"]);
  }
};
var __glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ko
}, Symbol.toStringTag, { value: "Module" }));
var pl = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["O nas"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Wr\xF3\u0107"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["WEJD\u0179"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Strona g\u0142\xF3wna"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ustaw tryb nocny"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Zmie\u0144 j\u0119zyk"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Opiniowany szablon startowy Vite"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demonstracja dynamicznego route"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Cze\u015B\u0107, ", _interpolate(_named("name")), "!"]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Znany te\u017C jako"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Jak masz na imi\u0119?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Nie znaleziono"]);
  }
};
var __glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": pl
}, Symbol.toStringTag, { value: "Module" }));
var ptBR = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Sobre"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Voltar"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ir"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["In\xEDcio"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Alternar modo escuro"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Mudar de idioma"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Modelo Opinativo de Partida de Vite"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Demonstra\xE7\xE3o de rota din\xE2mica"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Ol\xE1, ", _interpolate(_named("name")), "!"]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Tamb\xE9m conhecido como"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Qual \xE9 o seu nome?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["N\xE3o encontrado"]);
  }
};
var __glob_1_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ptBR
}, Symbol.toStringTag, { value: "Module" }));
var ru = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041E \u0448\u0430\u0431\u043B\u043E\u043D\u0435"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041D\u0430\u0437\u0430\u0434"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D Vite"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0414\u0435\u043C\u043E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u041F\u0440\u0438\u0432\u0435\u0442, ", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u041A\u0430\u043A \u0442\u0435\u0431\u044F \u0437\u043E\u0432\u0443\u0442?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"]);
  }
};
var __glob_1_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": ru
}, Symbol.toStringTag, { value: "Module" }));
var tr = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Hakk\u0131mda"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Geri"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0130LER\u0130"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Anasayfa"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Karanl\u0131k modu de\u011Fi\u015Ftir"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dilleri de\u011Fi\u015Ftir"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["G\xF6r\xFC\u015Fl\xFC Vite Ba\u015Flang\u0131\xE7 \u015Eablonu"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Dinamik rota demosu"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Merhaba, ", _interpolate(_named("name")), "!"]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ayr\u0131ca \u015F\xF6yle bilinir"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Ad\u0131n\u0131z nedir?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Bulunamad\u0131"]);
  }
};
var __glob_1_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": tr
}, Symbol.toStringTag, { value: "Module" }));
var vi = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["V\u1EC1"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Quay l\u1EA1i"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u0110i"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Kh\u1EDFi \u0111\u1EA7u"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Chuy\u1EC3n \u0111\u1ED5i ch\u1EBF \u0111\u1ED9 t\u1ED1i"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Thay \u0111\u1ED5i ng\xF4n ng\u1EEF"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\xDD ki\u1EBFn c\xE1 nh\xE2n Vite Template \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["B\u1EA3n gi\u1EDBi thi\u1EC7u v\u1EC1 dynamic route"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["Hi, ", _interpolate(_named("name")), "!"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["T\xEAn b\u1EA1n l\xE0 g\xEC?"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["Kh\xF4ng t\xECm th\u1EA5y"]);
  }
};
var __glob_1_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": vi
}, Symbol.toStringTag, { value: "Module" }));
var zhCN = {
  "button": {
    "about": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5173\u4E8E"]);
    },
    "back": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8FD4\u56DE"]);
    },
    "go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u786E\u5B9A"]);
    },
    "home": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9996\u9875"]);
    },
    "toggle_dark": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u6362\u6DF1\u8272\u6A21\u5F0F"]);
    },
    "toggle_langs": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u5207\u6362\u8BED\u8A00"]);
    }
  },
  "intro": {
    "desc": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u56FA\u6267\u5DF1\u89C1\u7684 Vite \u9879\u76EE\u6A21\u677F"]);
    },
    "dynamic-route": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u52A8\u6001\u8DEF\u7531\u6F14\u793A"]);
    },
    "hi": (ctx) => {
      const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
      return _normalize(["\u4F60\u597D\uFF0C", _interpolate(_named("name"))]);
    },
    "aka": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u4E5F\u53EB"]);
    },
    "whats-your-name": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u8F93\u5165\u4F60\u7684\u540D\u5B57"]);
    }
  },
  "not-found": (ctx) => {
    const { normalize: _normalize } = ctx;
    return _normalize(["\u672A\u627E\u5230\u9875\u9762"]);
  }
};
var __glob_1_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": zhCN
}, Symbol.toStringTag, { value: "Module" }));
const messages = Object.fromEntries(Object.entries({ "../../locales/de.yml": __glob_1_0, "../../locales/en.yml": __glob_1_1, "../../locales/es.yml": __glob_1_2, "../../locales/fr.yml": __glob_1_3, "../../locales/id.yml": __glob_1_4, "../../locales/it.yml": __glob_1_5, "../../locales/ja.yml": __glob_1_6, "../../locales/ko.yml": __glob_1_7, "../../locales/pl.yml": __glob_1_8, "../../locales/pt-BR.yml": __glob_1_9, "../../locales/ru.yml": __glob_1_10, "../../locales/tr.yml": __glob_1_11, "../../locales/vi.yml": __glob_1_12, "../../locales/zh-CN.yml": __glob_1_13 }).map(([key, value]) => {
  const yaml = key.endsWith(".yaml");
  return [key.slice(14, yaml ? -5 : -4), value.default];
}));
const install$3 = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages
  });
  app.use(i18n);
};
var __glob_7_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$3
}, Symbol.toStringTag, { value: "Module" }));
const install$2 = ({ app, router, isClient }) => {
  if (isClient)
    app.provide("LocomotiveScroll", LocomotiveScroll);
};
var __glob_7_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$2
}, Symbol.toStringTag, { value: "Module" }));
const install$1 = ({ isClient, initialState, app }) => {
  const pinia = createPinia();
  app.use(pinia);
  if (isClient)
    pinia.state.value = initialState.pinia || {};
  else
    initialState.pinia = pinia.state.value;
};
var __glob_7_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$1
}, Symbol.toStringTag, { value: "Module" }));
const install = ({ isClient, router }) => {
  if (!isClient)
    return;
  router.isReady().then(async () => {
    const { registerSW: registerSW2 } = await Promise.resolve().then(function() {
      return virtual_pwaRegister;
    });
    registerSW2({ immediate: true });
  });
};
var __glob_7_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install
}, Symbol.toStringTag, { value: "Module" }));
var OvalButton_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<a${ssrRenderAttrs(mergeProps({ class: "flex relative justify-center content-center transition-ease-back hover:scale-115" }, _attrs))} data-v-78ddca01><div class="relative border rounded-50% h-35vw md:h-10vw w-screen -rotate-12" data-v-78ddca01></div><p class="absolute top-13vw text-5vw md:top-4vw md:text-1.2vw" data-v-78ddca01>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p></a>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/OvalButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-78ddca01"]]);
var _imports_0 = "/assets/medium-purple.5de9a1f6.png";
var _imports_1 = "/assets/light-blue.17c5e6f0.png";
var _imports_2 = "/assets/3d-circle.370f34f9.svg";
const useMainStore = defineStore("main", () => {
  const isMenuVisible = ref(false);
  const isMenuDark = ref(false);
  const isContentLoading = ref(false);
  const bgColor = ref("#0F6CAF");
  return {
    isMenuVisible,
    isMenuDark,
    isContentLoading,
    bgColor
  };
});
const useSharedResizeObserver = (fn) => createSharedComposable(() => {
  const { width } = useWindowSize();
  watch(width, fn);
});
const useSplitText = (target, elAnimation, splitBy = "lines words", wrapping) => {
  const instance = ref();
  const innerSpanTexts = ref({});
  const isSplitByWord = splitBy.includes("words");
  const animate = () => {
    var _a;
    if (isSplitByWord) {
      instance.value.words.forEach((word) => {
        var _a2;
        if (innerSpanTexts.value[word.textContent]) {
          word.classList.add((_a2 = innerSpanTexts.value[word.textContent]) != null ? _a2 : "");
        }
      });
    }
    const length = instance.value.lines.length;
    (_a = instance.value.lines) == null ? void 0 : _a.forEach((line, index) => {
      var _a2;
      line.style.width = "103%";
      if (wrapping) {
        const { wrapType, wrapClass } = wrapping;
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList.add(wrapClass);
        (_a2 = line.parentNode) == null ? void 0 : _a2.appendChild(wrapEl);
        wrapEl.appendChild(line);
      }
      if (index === length - 1)
        elAnimation(line).eventCallback("onComplete", () => {
        });
      else
        elAnimation(line);
    });
  };
  tryOnMounted(() => {
    let unRefedTarget = null;
    if (typeof target !== "string")
      unRefedTarget = unrefElement(target);
    else
      unRefedTarget = document.querySelector(target);
    if (isSplitByWord) {
      const innerSpans = unRefedTarget.querySelectorAll("span");
      innerSpans.forEach((spanEl) => {
        if (spanEl.textContent) {
          spanEl.textContent.split(" ").flatMap((word) => {
            innerSpanTexts.value = __spreadProps(__spreadValues({}, innerSpanTexts.value), {
              [word]: spanEl.className
            });
          });
        }
      });
    }
    instance.value = new SplitType(unRefedTarget, { types: splitBy });
    animate();
    useSharedResizeObserver(() => {
      var _a;
      (_a = instance.value) == null ? void 0 : _a.split({});
      animate();
    });
  });
};
const useLocomotiveScroll = (elem, options) => {
  gsap.registerPlugin(ScrollTrigger);
  const el = unref(elem);
  const scroll = inject("LocomotiveScroll")(__spreadValues({
    el,
    smooth: true
  }, options));
  scroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(el, {
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
    pinType: el.style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.defaults({});
  ScrollTrigger.addEventListener("refresh", () => scroll.update());
  return scroll;
};
var index_vue_vue_type_style_index_0_lang = "";
var index_vue_vue_type_style_index_1_scoped_true_lang = "";
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    const loading = ref();
    const circleGroup = ref();
    ref();
    ref();
    const scroller = ref();
    const loadIn = () => {
      const onCompleteLoad = () => {
        mainStore.isMenuVisible = true;
      };
      document.querySelector("html");
      const tl = gsap.timeline().to(loading.value, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power4.out",
        autoRound: false,
        onComplete: onCompleteLoad
      }).to(loading.value, {
        strokeWidth: 0,
        duration: 0.8,
        ease: "power4.out",
        autoRound: false
      }).to(".header-blob", {
        opacity: 1,
        duration: 4,
        ease: "power2.out"
      }, 2.5).fromTo(circleGroup.value, { scale: 2, rotate: -35, opacity: 0 }, {
        rotate: 0,
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "expo.out",
        onComplete() {
          circleGroup.value.classList.add("animate-spin-long");
        }
      }, 2.5).to("#tag-line span", {
        className: "stretch",
        stagger: 0.6,
        duration: 2,
        ease: "power4.inOut"
      }, 4);
      tl.eventCallback("onComplete", () => {
        document.querySelector("html").classList.remove("overflow-y-hidden", "touch-none");
      });
      return;
    };
    const bgSections = {
      header: "#0F6CAF",
      desc: "#5B14CE"
    };
    tryOnMounted(() => {
      gsap.registerPlugin(ScrollTrigger);
      loadIn();
      const loco = useLocomotiveScroll(scroller);
      loco.on("call", (func) => {
        mainStore.bgColor = bgSections[func];
      });
    });
    useSplitText("#main-desc", (line) => gsap.fromTo(line, { rotate: -3, y: "150%", opacity: 0 }, {
      transformOrigin: "bottom left",
      rotate: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: line,
        start: "center bottom",
        onEnter() {
          line.querySelectorAll(".thicken").forEach((elem) => {
            elem.classList.add("active-text-anim");
          });
          console.log(line.textContent);
        }
      },
      duration: 0.5,
      ease: "expo.out"
    }), "lines words", void 0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_oval_button = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "scroller",
        ref: scroller,
        "data-scroll-container": ""
      }, _attrs))} data-v-5290dee7><svg class="fixed w-full h-full pointer-events-none stroke-1 z-49 fill-none stroke-white" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" data-v-5290dee7><path class="[stroke-dasharray:1] [stroke-dashoffset:1]" pathLength="1" d="M 0 0 H 100 V 100 H 0 Z" data-v-5290dee7></path></svg><header data-scroll data-scroll-call="header" data-scroll-offset="100%" class="grid relative w-screen h-screen pointer-events-none isolate -z-1" data-v-5290dee7><img data-scroll data-scroll-speed="-2"${ssrRenderAttr("src", _imports_0)} class="header-blob absolute -top-30vh -left-40vw md:-top-50vh -z-1 md:-left-30vw w-150% md:w-90% opacity-0" data-v-5290dee7><img data-scroll data-scroll-speed="-2"${ssrRenderAttr("src", _imports_1)} class="header-blob absolute -z-1 top-40vh left-50vw w-150% md:w-90% opacity-0" data-v-5290dee7><h1 data-scroll data-scroll-speed="1.6" id="tag-line" class="place-self-center" data-v-5290dee7> Equipping the <span data-v-5290dee7>believer</span> to <span data-v-5290dee7>defend</span> their <span data-v-5290dee7>faith</span><br data-v-5290dee7><span data-v-5290dee7>anytime, anywhere</span>. </h1><div class="grid absolute h-screen w-screen pointer-events-none aspect-square -z-1 md:grid-cols-6 md:grid-rows-6 md:aspect-none" data-scroll data-scroll-speed="-1" data-v-5290dee7><img${ssrRenderAttr("src", _imports_2)} alt="3d-circle" class="col-start-2 row-start-6 threed-circle big" data-v-5290dee7><img${ssrRenderAttr("src", _imports_2)} alt="3d-circle" class="col-start-2 row-start-5 place-self-end threed-circle small" data-v-5290dee7><img${ssrRenderAttr("src", _imports_2)} alt="3d-circle" class="col-start-6 row-start-3 threed-circle -rotate-130 big" data-v-5290dee7><img${ssrRenderAttr("src", _imports_2)} alt="3d-circle" class="col-start-5 row-start-3 justify-self-end self-start threed-circle -rotate-135 small" data-v-5290dee7></div></header><section data-scroll data-scroll-call="desc" class="mt-10vh wrapper" data-v-5290dee7><p id="main-desc" class="font-light text-left px-5vw text-9vw leading-relaxed md:text-7vw md:leading-snug col-span-full row-start-1" data-v-5290dee7> Be it English or non-English, churches or youth gatherings, podcasts or videos, closed settings or national conferences, at <span class="thicken" data-v-5290dee7>SAFT</span> we venture into diverse spaces proclaiming the <span class="thicken" data-v-5290dee7>Good News</span> with intellectual vigour, grace and meekness calling all unto the free gift of <span class="thicken" data-v-5290dee7>salvation.</span></p>`);
      _push(ssrRenderComponent(_component_oval_button, {
        class: "col-start-2 col-end-15 lg:col-start-18 lg:col-end-23 row-start-2",
        "data-scroll": ""
      }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn about us`);
          } else {
            return [
              createTextVNode("Learn about us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="min-h-screen" data-v-5290dee7></section></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var _src_pages_index_vue = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-5290dee7"]]);
const routes$1 = [{ "name": "README", "path": "/readme", "component": () => Promise.resolve().then(function() {
  return README;
}), "props": true }, { "name": "all", "path": "/:all(.*)*", "component": () => Promise.resolve().then(function() {
  return ____all_;
}), "props": true, "meta": { "layout": 404 } }, { "name": "about", "path": "/about", "component": () => Promise.resolve().then(function() {
  return about;
}), "props": true }, { "name": "index", "path": "/", "component": _src_pages_index_vue, "props": true }, { "name": "hi-name", "path": "/hi/:name", "component": () => Promise.resolve().then(function() {
  return _name_;
}), "props": true }];
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const { t: t2 } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<main${ssrRenderAttrs(mergeProps({
        p: "x4 y10",
        text: "center teal-700 dark:gray-200"
      }, _attrs))}><div text-4xl><div i-carbon-warning inline-block></div></div>`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`<div><button btn text-sm m="3 t8">${ssrInterpolate(unref(t2)("button.back"))}</button></div></main>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/404.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var default_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    useBreakpoints(breakpointsTailwind).smaller("md");
    ref(false);
    const isDark = ref(true);
    ref(false);
    ref();
    ref();
    ref();
    ref();
    tryOnMounted(() => {
      document.querySelector("body").style.backgroundColor = mainStore.bgColor;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "text-center text-white" }, _attrs))} data-v-9e843e32><svg class="fixed w-full h-full pointer-events-none z-49 fill-white" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" data-v-9e843e32><path vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" data-v-9e843e32></path></svg><div class="${ssrRenderClass([{
        "text-white": isDark.value,
        "text-#01124F": !isDark.value,
        "-translate-y-7vh": !unref(mainStore).isMenuVisible
      }, "grid fixed z-50 grid-cols-12 items-center mx-auto w-screen transition duration-300 mt-2vh"])}" data-v-9e843e32><svg class="hidden col-span-full row-start-1 mx-auto fill-current md:block w-12vw" viewBox="0 0 1651 286" xmlns="http://www.w3.org/2000/svg" data-v-9e843e32><path d="M149.726509,123.875581 C149.765877,124.323759 149.765226,124.774582 149.724563,125.222645 L139.535716,237.494489 C139.183453,241.376148 135.943822,244.347771 132.064337,244.347786 L80.1272705,244.347972 C78.7567323,244.347977 77.4123825,244.725175 76.2401527,245.438622 L11.3895575,284.908239 C7.84562436,287.065162 3.23236433,285.927235 1.08555292,282.366609 C0.205576555,280.907112 -0.155468885,279.190814 0.061460476,277.498391 L10.0907972,199.252097 C10.1317203,198.932823 10.1522469,198.611248 10.1522469,198.289337 L10.1522469,135.585633 C10.1522469,131.679456 13.1223215,128.420455 16.9951298,128.077076 L141.593644,117.029641 C145.721063,116.663689 149.362273,119.728719 149.726509,123.875581 Z M188.853794,123.657512 C189.236967,119.63038 192.953653,116.663469 197.155247,117.030732 L197.155247,117.030732 L286.054575,124.801486 C289.988444,125.145348 293,128.307085 293,132.093258 L293,132.093258 L293,233.177969 C293,237.221814 289.579807,240.5 285.360775,240.5 L285.360775,240.5 L206.939979,240.5 C202.992883,240.5 199.695697,237.617878 199.333063,233.850673 L199.333063,233.850673 L188.854532,124.995208 C188.811702,124.550263 188.811452,124.102496 188.853794,123.657512 Z M285.364902,13 C289.581655,13 293,16.2295036 293,20.2132969 L293,20.2132969 L293,63.0015405 C293,66.7274055 289.996454,69.8401932 286.069545,70.1840511 L286.069545,70.1840511 L197.162465,77.9692134 C196.695024,78.0101465 196.224585,78.0102619 195.757124,77.9695596 C191.558171,77.6039561 188.467957,74.091696 188.854944,70.1247145 L188.854944,70.1247145 L193.788449,19.5513086 C194.150521,15.8397356 197.446069,13 201.391327,13 L201.391327,13 L285.364902,13 Z M137.730031,13 C141.530019,13 144.702992,15.8467604 145.046958,19.5646753 L149.724924,70.1286028 C150.092215,74.0986486 147.114067,77.6095262 143.073035,77.9703655 C142.638132,78.0092034 142.200573,78.0098674 141.765552,77.9723529 L19.7268676,67.4481845 C15.932762,67.1209908 13.0222222,63.9995841 13.0222222,60.2577919 L13.0222222,20.2180377 C13.0222222,16.2316261 16.3116269,13 20.3693118,13 L137.730031,13 Z" id="New-Logo" data-v-9e843e32></path><path d="M672.710644,141.030841 C713.174422,141.030841 734.789671,154.540202 734.789671,192.366414 C734.789671,232.894495 713.174693,243.701984 672.710374,243.701984 C634.820128,243.701984 610.503548,232.894495 610.503548,192.366411 C610.503548,154.540202 632.118254,141.030841 672.710644,141.030841 Z M913.933958,141.030841 C954.397736,141.030841 976.012985,154.540202 976.012985,192.366414 C976.012985,232.894495 954.398007,243.701984 913.933688,243.701984 C876.043442,243.701984 851.726862,232.894495 851.726862,192.366411 C851.726862,154.540202 873.341569,141.030841 913.933958,141.030841 Z M1455.71374,141.030845 C1492.05689,141.030845 1513.19067,151.9329 1517.11919,181.558929 L1517.11919,181.558929 L1484.2039,181.558929 C1480.98786,168.864182 1471.18547,165.347695 1455.71401,165.347695 C1436.73687,165.347695 1425.92938,170.751438 1425.92938,192.366416 C1425.92938,213.981393 1436.73687,219.385137 1455.71401,219.385137 C1470.91393,219.385137 1480.88276,215.86865 1484.17364,203.173902 L1484.17364,203.173902 L1517.20267,203.173905 C1513.493,234.857139 1492.31546,243.701988 1455.71374,243.701988 C1417.82349,243.701988 1393.50664,232.894499 1393.50664,192.366416 C1393.50664,154.540206 1415.12162,141.030845 1455.71374,141.030845 Z M1047.88515,141.030845 C1083.10163,141.030845 1104.03762,151.267159 1108.87641,178.857055 L1108.87641,178.857055 L1075.54206,178.857055 C1071.65838,168.3565 1062.19751,165.347695 1047.88515,165.347695 C1028.90801,165.347695 1018.10052,170.751438 1018.10052,192.366416 C1018.10052,213.981393 1028.90801,219.385137 1047.88515,219.385137 C1059.15439,219.385137 1067.54775,217.451947 1072.47705,211.27952 L1072.47705,211.27952 L1050.52326,211.27952 L1050.52326,189.664542 L1109.96418,189.664544 L1109.96418,241.000114 L1088.3492,241.000114 L1088.3492,236.7498 C1078.24393,241.834183 1064.69242,243.701988 1047.88515,243.701988 C1009.99491,243.701988 985.678057,232.894499 985.678057,192.366416 C985.678057,154.540206 1007.29304,141.030845 1047.88515,141.030845 Z M1586.00154,141.022464 C1623.82775,141.022464 1644.09179,146.426209 1644.09179,176.146802 L1644.09179,176.146802 L1614.3712,176.146802 C1614.3712,165.555463 1603.98728,165.343636 1587.04687,165.3394 L1584.98148,165.339367 C1584.81271,165.339394 1584.64457,165.339435 1584.47706,165.339496 L1583.47957,165.340158 C1567.80693,165.3562 1557.90369,165.677047 1557.90369,172.093995 C1557.90369,180.324707 1569.3037,179.617358 1586.41844,180.204474 L1586.41844,180.204474 L1586.4822,180.206636 L1586.48194,180.206636 L1586.54543,180.208803 C1622.80131,181.452203 1645.50649,184.252154 1645.50649,211.270875 L1645.50649,211.270875 L1645.44273,211.270875 C1645.44273,238.289596 1622.34226,243.69334 1586.0653,243.69334 C1548.23882,243.69334 1526.62412,238.289594 1526.62412,208.569002 L1526.62412,208.569002 L1556.34471,208.569002 C1556.34471,218.944191 1567.64927,219.359198 1583.99614,219.375799 L1585.02432,219.376404 C1585.3692,219.37649 1585.71622,219.37649 1586.0653,219.37649 L1586.5776,219.37648 C1586.74788,219.37647 1586.91767,219.376451 1587.08697,219.376415 L1588.09675,219.375932 C1604.15625,219.362857 1615.51409,219.043965 1615.51409,211.270873 C1615.51409,201.757582 1602.82691,202.396574 1585.7119,201.809458 C1585.69056,201.808646 1585.66948,201.808106 1585.64841,201.807296 L1585.58464,201.805133 C1549.32876,200.561731 1527.97505,197.761782 1527.97505,172.093995 C1527.97505,146.426207 1549.72431,141.022464 1586.00154,141.022464 Z M444.043426,143.732984 L491.779563,240.999843 L459.310355,240.999843 L454.036571,230.192624 L401.722111,230.192624 L396.39429,240.999843 L363.861046,240.999843 L411.542065,143.732984 L444.043426,143.732984 Z M566.231365,143.732715 C586.343831,143.732715 602.706639,160.095525 602.706639,180.207991 C602.706639,200.320457 586.343831,216.683265 566.231365,216.683265 L566.231365,216.683265 L529.756091,216.683265 L529.756091,241.000114 L500.035498,241.000114 L500.035498,143.732715 Z M777.788128,143.732717 L777.788128,216.683265 L845.334934,216.683267 L845.334934,241.000117 L748.067535,241.000117 L748.067535,143.732717 L777.788128,143.732717 Z M1224.7398,143.732717 L1224.7398,168.049566 L1154.49113,168.049566 L1154.49113,180.207991 L1219.33606,180.207991 L1219.33606,204.52484 L1154.49113,204.52484 L1154.49113,216.683265 L1224.7398,216.683267 L1224.7398,241.000117 L1124.77053,241.000117 L1124.77053,143.732717 L1224.7398,143.732717 Z M1340.81231,143.732715 L1340.81231,168.049564 L1301.63516,168.049564 L1301.63516,241.000112 L1271.91457,241.000112 L1271.91457,168.049564 L1232.73742,168.049564 L1232.73742,143.732715 L1340.81231,143.732715 Z M1380.42955,143.732715 L1380.42955,241.000114 L1350.70896,241.000114 L1350.70896,143.732715 L1380.42955,143.732715 Z M672.710374,165.34769 C653.733503,165.34769 642.926015,170.751434 642.926015,192.366411 C642.926015,213.981389 653.733503,219.385133 672.710374,219.385133 C691.559715,219.385133 702.367204,213.981389 702.367204,192.366411 C702.367204,170.751434 691.896638,165.34769 672.710374,165.34769 Z M913.933688,165.34769 C894.956818,165.34769 884.149329,170.751434 884.149329,192.366411 C884.149329,213.981389 894.956818,219.385133 913.933688,219.385133 C932.78303,219.385133 943.590519,213.981389 943.590519,192.366411 C943.590519,170.751434 933.119952,165.34769 913.933688,165.34769 Z M427.742221,176.864153 L413.439861,205.875774 L441.89976,205.875774 L427.742221,176.864153 Z M560.827622,168.049566 L529.756091,168.049566 L529.756091,192.366416 L560.827622,192.366416 C567.531506,192.366416 572.986046,186.912146 572.986046,180.207991 C572.986046,173.503836 567.531777,168.049566 560.827622,168.049566 L560.827622,168.049566 Z M428.379748,11.0224639 C466.20596,11.0224639 486.470001,16.4262093 486.470001,46.1468021 L486.470001,46.1468021 L456.749409,46.1468021 C456.749409,35.555463 446.365486,35.3436362 429.425079,35.3393997 L427.359688,35.3393673 C427.190921,35.3393943 427.022778,35.3394348 426.855265,35.3394956 L425.857781,35.3401576 C410.185137,35.3562 400.281902,35.6770473 400.281902,42.0939946 C400.281902,50.3247072 411.681911,49.617358 428.796648,50.2044735 L428.796648,50.2044735 L428.860413,50.2066362 L428.891992,50.2077183 L428.891992,50.2077183 L428.923637,50.2088031 C465.179519,51.4522035 487.884702,54.2521542 487.884702,81.2708753 L487.884702,81.2708753 L487.820937,81.2708753 C487.820937,108.289596 464.72047,113.69334 428.443512,113.69334 C390.617031,113.69334 369.002325,108.289594 369.002325,78.5690015 L369.002325,78.5690015 L398.722917,78.5690015 C398.722917,88.9441908 410.027474,89.3591984 426.374344,89.3757987 L427.402533,89.3764039 C427.747413,89.3764904 428.094425,89.3764904 428.443512,89.3764904 L428.955807,89.3764797 C429.126086,89.3764699 429.295878,89.3764511 429.465175,89.3764153 L430.474956,89.3759318 C446.534454,89.3628573 457.892298,89.0439651 457.892298,81.2708732 C457.892298,71.757582 445.205118,72.3965739 428.090109,71.8094584 L428.090109,71.8094584 L427.962851,71.8051331 C391.706967,70.5617306 370.353261,67.7617819 370.353261,42.0939946 C370.353261,16.4262072 392.102521,11.0224639 428.379748,11.0224639 Z M571.185899,13.7329841 L618.922035,110.999843 L586.452828,110.999843 L581.179044,100.192624 L528.864584,100.192624 L523.536763,110.999843 L491.003519,110.999843 L538.684537,13.7329841 L571.185899,13.7329841 Z M724.445368,13.7327169 L724.445368,38.0495663 L656.898563,38.0495663 L656.898563,50.207991 L719.041625,50.207991 L719.041625,74.5248404 L656.898563,74.5248404 L656.898563,111.000117 L627.177969,111.000117 L627.177969,13.7327169 L724.445368,13.7327169 Z M837.661605,13.7327148 L837.661605,38.0495642 L798.484455,38.0495642 L798.484455,111.000112 L768.763862,111.000112 L768.763862,38.0495642 L729.586716,38.0495642 L729.586716,13.7327148 L837.661605,13.7327148 Z M554.884693,46.8641526 L540.582333,75.8757741 L569.042233,75.8757741 L554.884693,46.8641526 Z" id="Combined-Shape" data-v-9e843e32></path></svg><svg class="block col-span-full row-start-1 mx-auto fill-current md:hidden w-11vw" viewBox="0 0 293 272" data-v-9e843e32><path d="M 149 111 L 139 223 C 139 227 135 230 132 230 L 80 230 C 79 230 77 230 76 231 L 11 271 C 7 273 3 272 1 268 C 0 266 0 265 0 263 L 10 185 L 10 122 C 10 118 13 115 17 114 L 142 103 C 146 103 150 106 149 112 Z M 188 111 C 188 107 192 104 196 104 L 196 104 L 285 112 C 289 112 292 116 292 119 L 292 119 L 292 220 C 292 224 289 227 284 227 L 284 227 L 205 227 C 201 227 198 224 197 220 L 197 220 Z M 285 0 C 289 0 293 3 293 7 L 293 7 L 293 50 C 293 54 290 57 286 57 L 286 57 L 196 66 C 192 66 188 63 188 58 L 193 8 C 193 4 196 0 200 0 Z M 137 0 C 141 0 144 3 144 7 L 149 58 C 149 62 146 66 142 66 L 20 55 C 16 55 13 52 13 48 L 13 8 C 13 3 16 0 20 0 Z" data-v-9e843e32></path></svg><button class="flex col-start-10 col-end-12 row-start-1 items-center w-full h-full cursor-pointer" data-v-9e843e32><div class="ml-auto md:mb-0 w-fit mb-0.5vh" data-v-9e843e32><div id="menu-1" class="h-px bg-current origin-center w-10vw md:w-2vw" data-v-9e843e32></div><div id="menu-2" class="h-px bg-current origin-center mt-1.2vh w-10vw md:mt-1vh md:w-2vw" data-v-9e843e32></div></div></button></div><nav class="${ssrRenderClass([{ "text-white": isDark.value, "text-#01124F": !isDark.value }, "fixed my-auto w-full pointer-events-none md:px-0 md:my-0 md:h-fit px-3vw h-80vh z-51 translate-y-22vh"])}" data-v-9e843e32><div class="flex flex-col mx-auto w-fit md:flex-row md:space-x-7vw" data-v-9e843e32><!--[-->`);
      ssrRenderList(["Home", "About", "Podcast", "Areopagus"], (link) => {
        _push(`<div class="overflow-hidden" data-v-9e843e32><a class="menu-link" data-v-9e843e32>${ssrInterpolate(link)} <span data-v-9e843e32></span></a></div>`);
      });
      _push(`<!--]--></div></nav><div class="fixed -z-1 w-screen h-screen top-0 left-0 bg-#0F6CAF pointer-events-none transition duration-500" style="${ssrRenderStyle({ backgroundColor: unref(mainStore).bgColor })}" data-v-9e843e32><div id="noise" data-v-9e843e32></div></div><div class="overflow-x-hidden relative top-0 left-0 w-screen" data-v-9e843e32>`);
      _push(ssrRenderComponent(_component_router_view, null, null, _parent));
      _push(`</div><svg class="hidden absolute bottom-0" viewBox="0 0 1440 236" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9e843e32><path d="M1836.84 144.671C1837.55 158.541 1828.18 172.713 1809.39 186.995C1790.63 201.261 1762.57 215.545 1726.18 229.653C1653.41 257.865 1547.39 285.327 1415.92 310.538C1152.98 360.959 788.288 402.366 384.17 422.802C-19.9478 443.239 -386.956 438.835 -653.64 415.197C-786.986 403.378 -895.229 386.752 -970.481 366.025C-1008.11 355.661 -1037.46 344.28 -1057.57 331.979C-1077.7 319.666 -1088.45 306.511 -1089.15 292.641C-1089.85 278.77 -1080.49 264.599 -1061.7 250.317C-1042.93 236.051 -1014.88 221.766 -978.49 207.659C-905.712 179.446 -799.699 151.985 -668.226 126.774C-405.287 76.3526 -40.5954 34.9462 363.523 14.5097C767.64 -5.92687 1134.65 -1.52317 1401.33 22.1146C1534.68 33.9338 1642.92 50.5601 1718.17 71.2866C1755.8 81.6508 1785.15 93.0323 1805.26 105.333C1825.4 117.646 1836.14 130.801 1836.84 144.671Z" stroke="currentColor" data-v-9e843e32></path></svg></main>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var __layout_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-9e843e32"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  const _component_Footer = resolveComponent("Footer");
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "px-4 py-10 text-center text-gray-700 dark:text-gray-200" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<div class="mt-5 mx-auto text-center opacity-25 text-sm"> [Home Layout] </div></main>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/home.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var __layout_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender]]);
const layouts = {
  "404": _sfc_main$7,
  "default": __layout_1,
  "home": __layout_2
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "default"],
      children: [__spreadProps(__spreadValues({}, route), { path: "" })]
    };
  });
}
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Vitesse",
      meta: [{ name: "description", content: "Opinionated Vite Starter Template" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_view = resolveComponent("router-view");
      _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var tailwind = "";
var main = "";
var __uno = "";
const routes = setupLayouts(routes$1);
const createApp = ViteSSG(_sfc_main$4, { routes, base: "/" }, (ctx) => {
  Object.values({ "./modules/i18n.ts": __glob_7_0, "./modules/locomotive-scroll.ts": __glob_7_1, "./modules/pinia.ts": __glob_7_2, "./modules/pwa.ts": __glob_7_3 }).forEach((i2) => {
    var _a;
    return (_a = i2.install) == null ? void 0 : _a.call(i2, ctx);
  });
});
try {
  self["workbox:window:6.5.1"] && _();
} catch (n2) {
}
function n(n2, t2) {
  return new Promise(function(r2) {
    var e2 = new MessageChannel();
    e2.port1.onmessage = function(n3) {
      r2(n3.data);
    }, n2.postMessage(t2, [e2.port2]);
  });
}
function t(n2, t2) {
  for (var r2 = 0; r2 < t2.length; r2++) {
    var e2 = t2[r2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(n2, e2.key, e2);
  }
}
function r(n2, t2) {
  (t2 == null || t2 > n2.length) && (t2 = n2.length);
  for (var r2 = 0, e2 = new Array(t2); r2 < t2; r2++)
    e2[r2] = n2[r2];
  return e2;
}
function e(n2, t2) {
  var e2;
  if (typeof Symbol == "undefined" || n2[Symbol.iterator] == null) {
    if (Array.isArray(n2) || (e2 = function(n3, t3) {
      if (n3) {
        if (typeof n3 == "string")
          return r(n3, t3);
        var e3 = Object.prototype.toString.call(n3).slice(8, -1);
        return e3 === "Object" && n3.constructor && (e3 = n3.constructor.name), e3 === "Map" || e3 === "Set" ? Array.from(n3) : e3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3) ? r(n3, t3) : void 0;
      }
    }(n2)) || t2 && n2 && typeof n2.length == "number") {
      e2 && (n2 = e2);
      var i2 = 0;
      return function() {
        return i2 >= n2.length ? { done: true } : { done: false, value: n2[i2++] };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  return (e2 = n2[Symbol.iterator]()).next.bind(e2);
}
try {
  self["workbox:core:6.5.1"] && _();
} catch (n2) {
}
var i = function() {
  var n2 = this;
  this.promise = new Promise(function(t2, r2) {
    n2.resolve = t2, n2.reject = r2;
  });
};
function o(n2, t2) {
  var r2 = location.href;
  return new URL(n2, r2).href === new URL(t2, r2).href;
}
var u = function(n2, t2) {
  this.type = n2, Object.assign(this, t2);
};
function a(n2, t2, r2) {
  return r2 ? t2 ? t2(n2) : n2 : (n2 && n2.then || (n2 = Promise.resolve(n2)), t2 ? n2.then(t2) : n2);
}
function c() {
}
var f = { type: "SKIP_WAITING" };
function s(n2, t2) {
  if (!t2)
    return n2 && n2.then ? n2.then(c) : Promise.resolve();
}
var v = function(r2) {
  var e2, c2;
  function v2(n2, t2) {
    var e3, c3;
    return t2 === void 0 && (t2 = {}), (e3 = r2.call(this) || this).nn = {}, e3.tn = 0, e3.rn = new i(), e3.en = new i(), e3.on = new i(), e3.un = 0, e3.an = /* @__PURE__ */ new Set(), e3.cn = function() {
      var n3 = e3.fn, t3 = n3.installing;
      e3.tn > 0 || !o(t3.scriptURL, e3.sn.toString()) || performance.now() > e3.un + 6e4 ? (e3.vn = t3, n3.removeEventListener("updatefound", e3.cn)) : (e3.hn = t3, e3.an.add(t3), e3.rn.resolve(t3)), ++e3.tn, t3.addEventListener("statechange", e3.ln);
    }, e3.ln = function(n3) {
      var t3 = e3.fn, r3 = n3.target, i2 = r3.state, o2 = r3 === e3.vn, a2 = { sw: r3, isExternal: o2, originalEvent: n3 };
      !o2 && e3.mn && (a2.isUpdate = true), e3.dispatchEvent(new u(i2, a2)), i2 === "installed" ? e3.wn = self.setTimeout(function() {
        i2 === "installed" && t3.waiting === r3 && e3.dispatchEvent(new u("waiting", a2));
      }, 200) : i2 === "activating" && (clearTimeout(e3.wn), o2 || e3.en.resolve(r3));
    }, e3.dn = function(n3) {
      var t3 = e3.hn, r3 = t3 !== navigator.serviceWorker.controller;
      e3.dispatchEvent(new u("controlling", { isExternal: r3, originalEvent: n3, sw: t3, isUpdate: e3.mn })), r3 || e3.on.resolve(t3);
    }, e3.gn = (c3 = function(n3) {
      var t3 = n3.data, r3 = n3.ports, i2 = n3.source;
      return a(e3.getSW(), function() {
        e3.an.has(i2) && e3.dispatchEvent(new u("message", { data: t3, originalEvent: n3, ports: r3, sw: i2 }));
      });
    }, function() {
      for (var n3 = [], t3 = 0; t3 < arguments.length; t3++)
        n3[t3] = arguments[t3];
      try {
        return Promise.resolve(c3.apply(this, n3));
      } catch (n4) {
        return Promise.reject(n4);
      }
    }), e3.sn = n2, e3.nn = t2, navigator.serviceWorker.addEventListener("message", e3.gn), e3;
  }
  c2 = r2, (e2 = v2).prototype = Object.create(c2.prototype), e2.prototype.constructor = e2, e2.__proto__ = c2;
  var h, l, w = v2.prototype;
  return w.register = function(n2) {
    var t2 = (n2 === void 0 ? {} : n2).immediate, r3 = t2 !== void 0 && t2;
    try {
      var e3 = this;
      return function(n3, t3) {
        var r4 = n3();
        if (r4 && r4.then)
          return r4.then(t3);
        return t3(r4);
      }(function() {
        if (!r3 && document.readyState !== "complete")
          return s(new Promise(function(n3) {
            return window.addEventListener("load", n3);
          }));
      }, function() {
        return e3.mn = Boolean(navigator.serviceWorker.controller), e3.yn = e3.pn(), a(e3.bn(), function(n3) {
          e3.fn = n3, e3.yn && (e3.hn = e3.yn, e3.en.resolve(e3.yn), e3.on.resolve(e3.yn), e3.yn.addEventListener("statechange", e3.ln, { once: true }));
          var t3 = e3.fn.waiting;
          return t3 && o(t3.scriptURL, e3.sn.toString()) && (e3.hn = t3, Promise.resolve().then(function() {
            e3.dispatchEvent(new u("waiting", { sw: t3, wasWaitingBeforeRegister: true }));
          }).then(function() {
          })), e3.hn && (e3.rn.resolve(e3.hn), e3.an.add(e3.hn)), e3.fn.addEventListener("updatefound", e3.cn), navigator.serviceWorker.addEventListener("controllerchange", e3.dn), e3.fn;
        });
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, w.update = function() {
    try {
      return this.fn ? s(this.fn.update()) : void 0;
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w.getSW = function() {
    return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise;
  }, w.messageSW = function(t2) {
    try {
      return a(this.getSW(), function(r3) {
        return n(r3, t2);
      });
    } catch (n2) {
      return Promise.reject(n2);
    }
  }, w.messageSkipWaiting = function() {
    this.fn && this.fn.waiting && n(this.fn.waiting, f);
  }, w.pn = function() {
    var n2 = navigator.serviceWorker.controller;
    return n2 && o(n2.scriptURL, this.sn.toString()) ? n2 : void 0;
  }, w.bn = function() {
    try {
      var n2 = this;
      return function(n3, t2) {
        try {
          var r3 = n3();
        } catch (n4) {
          return t2(n4);
        }
        if (r3 && r3.then)
          return r3.then(void 0, t2);
        return r3;
      }(function() {
        return a(navigator.serviceWorker.register(n2.sn, n2.nn), function(t2) {
          return n2.un = performance.now(), t2;
        });
      }, function(n3) {
        throw n3;
      });
    } catch (n3) {
      return Promise.reject(n3);
    }
  }, h = v2, (l = [{ key: "active", get: function() {
    return this.en.promise;
  } }, { key: "controlling", get: function() {
    return this.on.promise;
  } }]) && t(h.prototype, l), v2;
}(function() {
  function n2() {
    this.Pn = /* @__PURE__ */ new Map();
  }
  var t2 = n2.prototype;
  return t2.addEventListener = function(n3, t3) {
    this.Sn(n3).add(t3);
  }, t2.removeEventListener = function(n3, t3) {
    this.Sn(n3).delete(t3);
  }, t2.dispatchEvent = function(n3) {
    n3.target = this;
    for (var t3, r2 = e(this.Sn(n3.type)); !(t3 = r2()).done; ) {
      (0, t3.value)(n3);
    }
  }, t2.Sn = function(n3) {
    return this.Pn.has(n3) || this.Pn.set(n3, /* @__PURE__ */ new Set()), this.Pn.get(n3);
  }, n2;
}());
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  let wb;
  const updateServiceWorker = async (reloadPage = true) => {
  };
  if ("serviceWorker" in navigator) {
    wb = new v("/sw.js", { scope: "/", type: "classic" });
    wb.addEventListener("activated", (event) => {
      if (event.isUpdate)
        window.location.reload();
      else
        onOfflineReady == null ? void 0 : onOfflineReady();
    });
    wb.register({ immediate }).then((r2) => {
      onRegistered == null ? void 0 : onRegistered(r2);
    }).catch((e2) => {
      onRegisterError == null ? void 0 : onRegisterError(e2);
    });
  }
  return updateServiceWorker;
}
var virtual_pwaRegister = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  registerSW
}, Symbol.toStringTag, { value: "Module" }));
const meta$1 = [];
const _sfc_main$3 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "meta": [] };
    expose({ frontmatter });
    const head = { "meta": [] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "prose prose-sm m-auto text-left" }, _attrs))}><h2>File-based Routing</h2><p>Routes will be auto-generated for Vue files in this dir with the same file structure. Check out <a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noopener"><code>vite-plugin-pages</code></a> for more details.</p><h3>Path Aliasing</h3><p><code>~/</code> is aliased to <code>./src/</code> folder.</p><p>For example, instead of having</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> isDark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../../../../composables&#39;</span>
</code></pre><p>now, you can use</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> isDark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;~/composables&#39;</span>
</code></pre></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/README.md");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var README = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  meta: meta$1,
  "default": _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
var block0 = {};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const { t: t2 } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate(unref(t2)("not-found"))}</div>`);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/[...all].vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var ____all_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const title = "About";
const meta = [{ "property": "og:title", "content": "About" }];
const _sfc_main$1 = {
  __ssrInlineRender: true,
  setup(__props, { expose }) {
    const frontmatter = { "title": "About", "meta": [{ "property": "og:title", "content": "About" }] };
    expose({ frontmatter });
    const head = { "title": "About", "meta": [{ "property": "og:title", "content": "About" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "prose prose-sm m-auto text-left" }, _attrs))}><div class="text-center"><div i-carbon-dicom-overlay class="text-4xl -mb-6 m-auto"></div><h3>About</h3></div><p><a href="https://github.com/antfu/vitesse" target="_blank" rel="noopener">Vitesse</a> is an opinionated <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener">Vite</a> starter template made by <a href="https://github.com/antfu" target="_blank" rel="noopener">@antfu</a> for mocking apps swiftly. With <strong>file-based routing</strong>, <strong>components auto importing</strong>, <strong>markdown support</strong>, I18n, PWA and uses <strong>UnoCSS</strong> for styling and icons.</p><pre class="language-js"><code class="language-js"><span class="token comment">// syntax highlighting example</span>
<span class="token keyword">function</span> <span class="token function">vitesse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><p>Check out the <a href="https://github.com/antfu/vitesse" target="_blank" rel="noopener">GitHub repo</a> for more details.</p></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/about.md");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var about = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title,
  meta,
  "default": _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const useUserStore = defineStore("user", () => {
  const savedName = ref("");
  const previousNames = ref(/* @__PURE__ */ new Set());
  const usedNames = computed(() => Array.from(previousNames.value));
  const otherNames = computed(() => usedNames.value.filter((name) => name !== savedName.value));
  function setNewName(name) {
    if (savedName.value)
      previousNames.value.add(savedName.value);
    savedName.value = name;
  }
  return {
    setNewName,
    otherNames,
    savedName
  };
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __ssrInlineRender: true,
  props: {
    name: null
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const user = useUserStore();
    const { t: t2 } = useI18n();
    watchEffect(() => {
      user.setNewName(props.name);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(_attrs)}><div text-4xl><div i-carbon-pedestrian inline-block></div></div><p>${ssrInterpolate(unref(t2)("intro.hi", { name: props.name }))}</p><p text-sm opacity-50><em>${ssrInterpolate(unref(t2)("intro.dynamic-route"))}</em></p>`);
      if (unref(user).otherNames.length) {
        _push(`<p text-sm mt-4><span opacity-75>${ssrInterpolate(unref(t2)("intro.aka"))}:</span><ul><!--[-->`);
        ssrRenderList(unref(user).otherNames, (otherName) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: `/hi/${otherName}`,
            replace: ""
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(otherName)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(otherName), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><button btn m="3 t6" text-sm>${ssrInterpolate(unref(t2)("button.back"))}</button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/hi/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _name_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export { createApp };
