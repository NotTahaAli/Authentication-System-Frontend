import { c as createComponent, r as renderTemplate, e as defineScriptVars, f as renderSlot, h as renderHead, a as addAttribute, b as createAstro, d as renderComponent, g as defineStyleVars, m as maybeRenderHead } from './astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    useCaptcha = false,
    indexPage = true,
    followLinks = false,
    heading,
    localError,
    useAuthn = false
  } = Astro2.props;
  const pageURL = Astro2.url;
  return renderTemplate(_c || (_c = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Authentication System made by Muhammad Taha Ali."><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><meta name="robot"', "><title>", "</title>", '<!-- Facebook Meta Tags --><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:title" content="AuthSys | Login"><meta property="og:description" content="Authentication System made by Muhammad Taha Ali."><meta property="og:image" content="/og_image.png"><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"', '><meta property="twitter:url"', '><meta name="twitter:title" content="AuthSys | Login"><meta name="twitter:description" content="Authentication System made by Muhammad Taha Ali."><meta name="twitter:image" content="/og_image.png"><meta name="referrer" content="strict-origin-when-cross-origin"><script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"><\/script><link href="\nhttps://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@5.0.17/dark.min.css\n" rel="stylesheet">', "", "</head> <body> <main> <h1>", "</h1> ", ' </main> <script>\n		const Toast = Swal.mixin({\n			toast: true,\n			position: "top-end",\n			iconColor: "white",\n			customClass: {\n				popup: "colored-toast",\n			},\n			showConfirmButton: false,\n			timer: 1500,\n			timerProgressBar: true,\n		});\n		function FireToast(parameters) {\n			Toast.fire(parameters);\n		}\n	<\/script> <script>(function(){', '\n		if (localError) {\n			FireToast({\n				text: localError,\n				icon: "error",\n			});\n		}\n	})();<\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), addAttribute(`${indexPage ? "" : "no"}index, ${followLinks ? "" : "no"}follow`, "content"), title, useCaptcha ? renderTemplate(_a || (_a = __template(['<script src="https://www.google.com/recaptcha/api.js"><\/script>']))) : "", addAttribute(pageURL, "content"), addAttribute(pageURL.host, "content"), addAttribute(pageURL, "content"), useAuthn ? renderTemplate(_b || (_b = __template(['<script src="https://unpkg.com/@simplewebauthn/browser@10.0.0/dist/bundle/index.umd.min.js" integrity="sha384-SijkeUvZZs1bto8G/GPfjLDAg4FRZB5yGFAdMT5T7n3bMnkfFMEhE/h11ClJPNFR" crossorigin="anonymous"><\/script>']))) : "", renderHead(), heading, renderSlot($$result, $$slots["default"]), defineScriptVars({ localError }));
}, "D:/TypeScript Projects/authentication-frontend/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { disabled = false, id, href, class: classes } = Astro2.props;
  const Tag = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": `btn ` + (classes ? classes : ""), "disabled": disabled, "id": id, "href": href, "data-astro-cid-vnzlvqnm": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "D:/TypeScript Projects/authentication-frontend/src/components/Button.astro", void 0);

const $$Astro = createAstro();
const $$Group = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Group;
  const { mobileDirection = "row", desktopDirection = "row" } = Astro2.props;
  const $$definedVars = defineStyleVars([{ mobileDirection, desktopDirection }]);
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-udrsci4j${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "D:/TypeScript Projects/authentication-frontend/src/components/Group.astro", void 0);

export { $$Group as $, $$Button as a, $$Layout as b };
