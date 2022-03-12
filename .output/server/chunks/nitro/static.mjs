import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';
import { c as buildAssetsDir } from './server.mjs';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'defu';

const assets = {
  "/_nuxt/Event-Poster.4a2cadbd.png": {
    "type": "image/png",
    "etag": "\"10db9d-C6xM04YJ2mbkoWU37WvYpFrV+Yk\"",
    "mtime": "2022-02-04T14:29:06.887Z",
    "path": "../public/_nuxt/Event-Poster.4a2cadbd.png"
  },
  "/_nuxt/JoyrideALT.5c7de71f.woff": {
    "type": "font/woff",
    "etag": "\"13c0-z7BUPlJj1T/9JPY9MPkPuKR9pu8\"",
    "mtime": "2022-02-04T14:29:06.885Z",
    "path": "../public/_nuxt/JoyrideALT.5c7de71f.woff"
  },
  "/_nuxt/JoyrideALTItalic.7071b53e.woff": {
    "type": "font/woff",
    "etag": "\"14e4-nq9Vod/Wna/Ly8KYgRaWHSoozl0\"",
    "mtime": "2022-02-04T14:29:06.885Z",
    "path": "../public/_nuxt/JoyrideALTItalic.7071b53e.woff"
  },
  "/_nuxt/JoyrideALTOutline.1d95485f.woff2": {
    "type": "font/woff2",
    "etag": "\"1640-0lWEygr9gjDMTaeRtayxWvayId8\"",
    "mtime": "2022-02-04T14:29:06.885Z",
    "path": "../public/_nuxt/JoyrideALTOutline.1d95485f.woff2"
  },
  "/_nuxt/JoyrideALTOutline.4edcbf1e.woff": {
    "type": "font/woff",
    "etag": "\"1cb8-EjdYyBPRCeTJ/pm2PH2gIWhQyJo\"",
    "mtime": "2022-02-04T14:29:06.885Z",
    "path": "../public/_nuxt/JoyrideALTOutline.4edcbf1e.woff"
  },
  "/_nuxt/JoyrideALTOutlineItalic.42beef83.woff": {
    "type": "font/woff",
    "etag": "\"1f3c-QSok+03CCy0xMLJQfkK/24zvCno\"",
    "mtime": "2022-02-04T14:29:06.885Z",
    "path": "../public/_nuxt/JoyrideALTOutlineItalic.42beef83.woff"
  },
  "/_nuxt/JoyrideALTOutlineItalic.d4706e6d.woff2": {
    "type": "font/woff2",
    "etag": "\"1834-9MMVQUQ0UK9K9BC0rviOPGrYycQ\"",
    "mtime": "2022-02-04T14:29:06.885Z",
    "path": "../public/_nuxt/JoyrideALTOutlineItalic.d4706e6d.woff2"
  },
  "/_nuxt/JoyrideEXT.18c817d9.woff": {
    "type": "font/woff",
    "etag": "\"5f58-S/g8uyateMQMlL1H+PYRwuUDvtg\"",
    "mtime": "2022-02-04T14:29:06.885Z",
    "path": "../public/_nuxt/JoyrideEXT.18c817d9.woff"
  },
  "/_nuxt/JoyrideEXT.a97e6d6a.woff2": {
    "type": "font/woff2",
    "etag": "\"4664-kT/lDhXv0HpG2Czm4D08/9BIaHs\"",
    "mtime": "2022-02-04T14:29:06.884Z",
    "path": "../public/_nuxt/JoyrideEXT.a97e6d6a.woff2"
  },
  "/_nuxt/JoyrideEXTItalic.8b1fc4fb.woff2": {
    "type": "font/woff2",
    "etag": "\"4df8-GciRpmQwtIYcF/oqNfDU4ZyilVI\"",
    "mtime": "2022-02-04T14:29:06.884Z",
    "path": "../public/_nuxt/JoyrideEXTItalic.8b1fc4fb.woff2"
  },
  "/_nuxt/JoyrideEXTItalic.9a0b8d2a.woff": {
    "type": "font/woff",
    "etag": "\"69cc-i6vQS+Pc/V4bRF5m6WTusqCUFmo\"",
    "mtime": "2022-02-04T14:29:06.884Z",
    "path": "../public/_nuxt/JoyrideEXTItalic.9a0b8d2a.woff"
  },
  "/_nuxt/JoyrideEXTOutline.e30cb2eb.woff": {
    "type": "font/woff",
    "etag": "\"9240-P3jOhLQnqLSgdhYu2gVHsxuJIOg\"",
    "mtime": "2022-02-04T14:29:06.884Z",
    "path": "../public/_nuxt/JoyrideEXTOutline.e30cb2eb.woff"
  },
  "/_nuxt/JoyrideEXTOutline.ef2a7100.woff2": {
    "type": "font/woff2",
    "etag": "\"6f08-RksjDMGa4AnCK8EPyKYJkpeaytE\"",
    "mtime": "2022-02-04T14:29:06.884Z",
    "path": "../public/_nuxt/JoyrideEXTOutline.ef2a7100.woff2"
  },
  "/_nuxt/JoyrideEXTOutlineItalic.b47f748f.woff": {
    "type": "font/woff",
    "etag": "\"a2b8-pwXRCd8VzXECgwLK5JyyR6MLMho\"",
    "mtime": "2022-02-04T14:29:06.883Z",
    "path": "../public/_nuxt/JoyrideEXTOutlineItalic.b47f748f.woff"
  },
  "/_nuxt/JoyrideEXTOutlineItalic.fcc86b2b.woff2": {
    "type": "font/woff2",
    "etag": "\"7ab4-n5W+zEwdY999gUTcUyaGORtKHi0\"",
    "mtime": "2022-02-04T14:29:06.883Z",
    "path": "../public/_nuxt/JoyrideEXTOutlineItalic.fcc86b2b.woff2"
  },
  "/_nuxt/JoyrideSTD.66498a98.woff2": {
    "type": "font/woff2",
    "etag": "\"44d4-XNOjxyJNGHcliU90b82lIRSVTXM\"",
    "mtime": "2022-02-04T14:29:06.883Z",
    "path": "../public/_nuxt/JoyrideSTD.66498a98.woff2"
  },
  "/_nuxt/JoyrideSTD.77302732.woff": {
    "type": "font/woff",
    "etag": "\"5c88-XQcwvlQJmOfvOeJUzYTxGrEzjyg\"",
    "mtime": "2022-02-04T14:29:06.882Z",
    "path": "../public/_nuxt/JoyrideSTD.77302732.woff"
  },
  "/_nuxt/JoyrideSTDItalic.9692674a.woff2": {
    "type": "font/woff2",
    "etag": "\"4cb8-hphjmlx+eEY4+EOMbNSWa9+gy1Q\"",
    "mtime": "2022-02-04T14:29:06.882Z",
    "path": "../public/_nuxt/JoyrideSTDItalic.9692674a.woff2"
  },
  "/_nuxt/JoyrideSTDItalic.e5fea958.woff": {
    "type": "font/woff",
    "etag": "\"6870-5kFQ3mictRSYbM4L3RTfHqF9bmk\"",
    "mtime": "2022-02-04T14:29:06.882Z",
    "path": "../public/_nuxt/JoyrideSTDItalic.e5fea958.woff"
  },
  "/_nuxt/JoyrideSTDOutline.b51297ed.woff2": {
    "type": "font/woff2",
    "etag": "\"6cec-/s4Ma7ZV4oglzhf4aQQlUx/tvfU\"",
    "mtime": "2022-02-04T14:29:06.882Z",
    "path": "../public/_nuxt/JoyrideSTDOutline.b51297ed.woff2"
  },
  "/_nuxt/JoyrideSTDOutline.f3f4e706.woff": {
    "type": "font/woff",
    "etag": "\"8e68-Qa1DDA1GK+YhVdmd7BzZn+FDi9Y\"",
    "mtime": "2022-02-04T14:29:06.881Z",
    "path": "../public/_nuxt/JoyrideSTDOutline.f3f4e706.woff"
  },
  "/_nuxt/JoyrideSTDOutlineItalic.056f0747.woff": {
    "type": "font/woff",
    "etag": "\"9fb4-1beLt6UzTxq2SoWynhXGRthG8Ac\"",
    "mtime": "2022-02-04T14:29:06.881Z",
    "path": "../public/_nuxt/JoyrideSTDOutlineItalic.056f0747.woff"
  },
  "/_nuxt/JoyrideSTDOutlineItalic.a3b8159c.woff2": {
    "type": "font/woff2",
    "etag": "\"78ac-1Z3xVv4PfCXfZVDixNBNSb8FZIg\"",
    "mtime": "2022-02-04T14:29:06.881Z",
    "path": "../public/_nuxt/JoyrideSTDOutlineItalic.a3b8159c.woff2"
  },
  "/_nuxt/JoyrideWIDE.99ad94dc.woff2": {
    "type": "font/woff2",
    "etag": "\"4918-YGQV8uUe2Ci78aCmNnFJO1HSnvo\"",
    "mtime": "2022-02-04T14:29:06.881Z",
    "path": "../public/_nuxt/JoyrideWIDE.99ad94dc.woff2"
  },
  "/_nuxt/JoyrideWIDE.d7be83a2.woff": {
    "type": "font/woff",
    "etag": "\"6300-ZSmUjrUEjC1LXYou0+H/ecMt9UY\"",
    "mtime": "2022-02-04T14:29:06.880Z",
    "path": "../public/_nuxt/JoyrideWIDE.d7be83a2.woff"
  },
  "/_nuxt/JoyrideWIDEItalic.6a7bf059.woff2": {
    "type": "font/woff2",
    "etag": "\"5028-ZOZnk34wJja7XfNv07rbeTsWmPA\"",
    "mtime": "2022-02-04T14:29:06.880Z",
    "path": "../public/_nuxt/JoyrideWIDEItalic.6a7bf059.woff2"
  },
  "/_nuxt/JoyrideWIDEItalic.eec5d7c6.woff": {
    "type": "font/woff",
    "etag": "\"6cf8-jR3tISaaPxWvWCsHlulvlTe/IJI\"",
    "mtime": "2022-02-04T14:29:06.880Z",
    "path": "../public/_nuxt/JoyrideWIDEItalic.eec5d7c6.woff"
  },
  "/_nuxt/JoyrideWIDEOutline.4798b589.woff2": {
    "type": "font/woff2",
    "etag": "\"725c-+fI0sX6S6+tyQ8WgO1GQLqUPmFc\"",
    "mtime": "2022-02-04T14:29:06.880Z",
    "path": "../public/_nuxt/JoyrideWIDEOutline.4798b589.woff2"
  },
  "/_nuxt/JoyrideWIDEOutline.5cc08eea.woff": {
    "type": "font/woff",
    "etag": "\"9740-/FhWQO3GDmNDdIi/1C0NwklZAGw\"",
    "mtime": "2022-02-04T14:29:06.880Z",
    "path": "../public/_nuxt/JoyrideWIDEOutline.5cc08eea.woff"
  },
  "/_nuxt/JoyrideWIDEOutlineItalic.597b2829.woff2": {
    "type": "font/woff2",
    "etag": "\"7dec-eGDVEEVDGrWn+HoIMvH3wZKWATE\"",
    "mtime": "2022-02-04T14:29:06.879Z",
    "path": "../public/_nuxt/JoyrideWIDEOutlineItalic.597b2829.woff2"
  },
  "/_nuxt/JoyrideWIDEOutlineItalic.fb04c048.woff": {
    "type": "font/woff",
    "etag": "\"a778-m6RsYjwaJl/AQJ7M75uZMu8JYkU\"",
    "mtime": "2022-02-04T14:29:06.879Z",
    "path": "../public/_nuxt/JoyrideWIDEOutlineItalic.fb04c048.woff"
  },
  "/_nuxt/Manrope-Bold.826f558c.woff": {
    "type": "font/woff",
    "etag": "\"b194-G8GgC1Wzjo5OinOlQ9RLeuXg3ug\"",
    "mtime": "2022-02-04T14:29:06.879Z",
    "path": "../public/_nuxt/Manrope-Bold.826f558c.woff"
  },
  "/_nuxt/Manrope-Bold.a120ecbc.woff2": {
    "type": "font/woff2",
    "etag": "\"83e8-OOY5GCQHHEnCeweNyHqbfk/UNMg\"",
    "mtime": "2022-02-04T14:29:06.879Z",
    "path": "../public/_nuxt/Manrope-Bold.a120ecbc.woff2"
  },
  "/_nuxt/Manrope-Light.0a944ca1.woff2": {
    "type": "font/woff2",
    "etag": "\"8540-NykpQsLk0qhvPBYBYEnjBB5fEnY\"",
    "mtime": "2022-02-04T14:29:06.879Z",
    "path": "../public/_nuxt/Manrope-Light.0a944ca1.woff2"
  },
  "/_nuxt/Manrope-Light.e0a978da.woff": {
    "type": "font/woff",
    "etag": "\"b180-pvNb3H2sYrcE/BfLzbOpqCzvnQk\"",
    "mtime": "2022-02-04T14:29:06.878Z",
    "path": "../public/_nuxt/Manrope-Light.e0a978da.woff"
  },
  "/_nuxt/Manrope-Medium.0b59e71d.woff": {
    "type": "font/woff",
    "etag": "\"b778-De7lOKY6IV1kzpj6nGI5/r5mDZo\"",
    "mtime": "2022-02-04T14:29:06.878Z",
    "path": "../public/_nuxt/Manrope-Medium.0b59e71d.woff"
  },
  "/_nuxt/Manrope-Medium.f55c88ce.woff2": {
    "type": "font/woff2",
    "etag": "\"8910-vnE82E2rOP1Gj6g0nuwFWhYiDZs\"",
    "mtime": "2022-02-04T14:29:06.878Z",
    "path": "../public/_nuxt/Manrope-Medium.f55c88ce.woff2"
  },
  "/_nuxt/Manrope-Regular.60d02844.woff2": {
    "type": "font/woff2",
    "etag": "\"8834-cYrZ9RykEd7zrVUafXg4VT1vSBc\"",
    "mtime": "2022-02-04T14:29:06.877Z",
    "path": "../public/_nuxt/Manrope-Regular.60d02844.woff2"
  },
  "/_nuxt/Manrope-Regular.889dd891.woff": {
    "type": "font/woff",
    "etag": "\"b664-0F/TjUpzOHY6eJNKV1Yu1wMOLfw\"",
    "mtime": "2022-02-04T14:29:06.877Z",
    "path": "../public/_nuxt/Manrope-Regular.889dd891.woff"
  },
  "/_nuxt/Manrope-Semibold.17a58d65.woff2": {
    "type": "font/woff2",
    "etag": "\"86c8-k1d5Pi2M40cneAi08e8ByHidrz8\"",
    "mtime": "2022-02-04T14:29:06.877Z",
    "path": "../public/_nuxt/Manrope-Semibold.17a58d65.woff2"
  },
  "/_nuxt/Manrope-Semibold.fbe87b0f.woff": {
    "type": "font/woff",
    "etag": "\"b474-eeg+8fBIxcisfW0D/yphseOkPOs\"",
    "mtime": "2022-02-04T14:29:06.877Z",
    "path": "../public/_nuxt/Manrope-Semibold.fbe87b0f.woff"
  },
  "/_nuxt/Manrope-Thin.06b29d85.woff": {
    "type": "font/woff",
    "etag": "\"acac-qFgbnw6+Q4+dib0bo5X1dC1eeJI\"",
    "mtime": "2022-02-04T14:29:06.876Z",
    "path": "../public/_nuxt/Manrope-Thin.06b29d85.woff"
  },
  "/_nuxt/Manrope-Thin.a5cbb18a.woff2": {
    "type": "font/woff2",
    "etag": "\"8144-Bf5oAnF1WMGGcInFNdh/xsn6tY0\"",
    "mtime": "2022-02-04T14:29:06.876Z",
    "path": "../public/_nuxt/Manrope-Thin.a5cbb18a.woff2"
  },
  "/_nuxt/Menu-76eb195f.mjs": {
    "type": "application/javascript",
    "etag": "\"31c-BUd0TZ3a+16LkNVbGLNGrPqCQ88\"",
    "mtime": "2022-02-04T14:29:06.876Z",
    "path": "../public/_nuxt/Menu-76eb195f.mjs"
  },
  "/_nuxt/Menu.f7d0ffb2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"146-k/Obr3J//lgjRoMpYGI6VJFSFCs\"",
    "mtime": "2022-02-04T14:29:06.876Z",
    "path": "../public/_nuxt/Menu.f7d0ffb2.css"
  },
  "/_nuxt/ParallaxMedia-ad32787d.mjs": {
    "type": "application/javascript",
    "etag": "\"42f-yFpf81Wwl9Ulqa473phg0Sc+Exc\"",
    "mtime": "2022-02-04T14:29:06.876Z",
    "path": "../public/_nuxt/ParallaxMedia-ad32787d.mjs"
  },
  "/_nuxt/SaftLogo-f8871544.mjs": {
    "type": "application/javascript",
    "etag": "\"922-RFe3gY+eM9BEd7nO60EQyU3Px9c\"",
    "mtime": "2022-02-04T14:29:06.876Z",
    "path": "../public/_nuxt/SaftLogo-f8871544.mjs"
  },
  "/_nuxt/ScrollAction-3b40fea7.mjs": {
    "type": "application/javascript",
    "etag": "\"33c-Nzvf9TFFAOqJlkE5mhPrRawULHA\"",
    "mtime": "2022-02-04T14:29:06.875Z",
    "path": "../public/_nuxt/ScrollAction-3b40fea7.mjs"
  },
  "/_nuxt/SlideRevealText-51d0b5c7.mjs": {
    "type": "application/javascript",
    "etag": "\"6830-aTf6+rx5vF8i57LlQWq39m7CvqI\"",
    "mtime": "2022-02-04T14:29:06.875Z",
    "path": "../public/_nuxt/SlideRevealText-51d0b5c7.mjs"
  },
  "/_nuxt/Splitting-084ced84.mjs": {
    "type": "application/javascript",
    "etag": "\"378-uTTcjgL312Y322tvfig9PCW5XuQ\"",
    "mtime": "2022-02-04T14:29:06.875Z",
    "path": "../public/_nuxt/Splitting-084ced84.mjs"
  },
  "/_nuxt/alisa-childers.87b2f22d.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ec82-wywehlxA/x/Gshv0WkoHgXtebHE\"",
    "mtime": "2022-02-04T14:29:06.875Z",
    "path": "../public/_nuxt/alisa-childers.87b2f22d.jpg"
  },
  "/_nuxt/ankit-nayak.5ed0859f.jpg": {
    "type": "image/jpeg",
    "etag": "\"9b31-4dtS9+Toeqo4nA/hRD61CJ7IVog\"",
    "mtime": "2022-02-04T14:29:06.874Z",
    "path": "../public/_nuxt/ankit-nayak.5ed0859f.jpg"
  },
  "/_nuxt/bootstrap-a696f71a.mjs": {
    "type": "application/javascript",
    "etag": "\"147a0e-eYDCaPcazqq19lf9vsMDazv6Zp4\"",
    "mtime": "2022-02-04T14:29:06.874Z",
    "path": "../public/_nuxt/bootstrap-a696f71a.mjs"
  },
  "/_nuxt/bootstrap.2017d4a7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7a01-tp9bhLRbGguhnFYrV82/fBUGdm4\"",
    "mtime": "2022-02-04T14:29:06.872Z",
    "path": "../public/_nuxt/bootstrap.2017d4a7.css"
  },
  "/_nuxt/entry-d724158d.mjs": {
    "type": "application/javascript",
    "etag": "\"65-SSYDpW0OBL4PmeBbcbe28wA/qec\"",
    "mtime": "2022-02-04T14:29:06.872Z",
    "path": "../public/_nuxt/entry-d724158d.mjs"
  },
  "/_nuxt/ep-62.f0824bd2.jpg": {
    "type": "image/jpeg",
    "etag": "\"168876-qi8EyCAb9C3584B43YM6+vrYE5s\"",
    "mtime": "2022-02-04T14:29:06.871Z",
    "path": "../public/_nuxt/ep-62.f0824bd2.jpg"
  },
  "/_nuxt/frank-turek.e7e79c88.jpg": {
    "type": "image/jpeg",
    "etag": "\"a21c-SEWUBAVHje0pBTEmiQQdM1gcjkM\"",
    "mtime": "2022-02-04T14:29:06.869Z",
    "path": "../public/_nuxt/frank-turek.e7e79c88.jpg"
  },
  "/_nuxt/jacob-varghese.9d7e21f2.jpg": {
    "type": "image/jpeg",
    "etag": "\"d04f-XBsm2efdKGAQh7b+huprTmcbvWc\"",
    "mtime": "2022-02-04T14:29:06.869Z",
    "path": "../public/_nuxt/jacob-varghese.9d7e21f2.jpg"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"f60-JexufjKWOthDMv+HXsJCzR2ufA0\"",
    "mtime": "2022-02-04T14:29:06.868Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/sean-mcdowell.06364819.jpg": {
    "type": "image/jpeg",
    "etag": "\"66618-80fo+HnXr3a4k2MFSkU7K0xd0uc\"",
    "mtime": "2022-02-04T14:29:06.868Z",
    "path": "../public/_nuxt/sean-mcdowell.06364819.jpg"
  },
  "/_nuxt/steven-john.cfd5273d.jpg": {
    "type": "image/jpeg",
    "etag": "\"1f746-cmV8GMW+Mtwm0WFFpQlUZrOGqQw\"",
    "mtime": "2022-02-04T14:29:06.867Z",
    "path": "../public/_nuxt/steven-john.cfd5273d.jpg"
  },
  "/_nuxt/william-lane-craig.221aefca.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ca04-wf4RLIOHZdag21mtwyA4XTF3CTA\"",
    "mtime": "2022-02-04T14:29:06.867Z",
    "path": "../public/_nuxt/william-lane-craig.221aefca.jpg"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/Users/stevenjohn/Documents/Projects/SAFT/website-v2/dist" + "/" + "1643984944";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  const isBuildAsset = id.startsWith(buildAssetsDir());
  if (!asset) {
    if (isBuildAsset && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (isBuildAsset) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
