import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import { $ as $$NotificationLayout } from '../chunks/NotificationLayout_Bfhiqsbz.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NotificationLayout", $$NotificationLayout, { "title": "AuthSys | Not Found", "heading": "AuthSys", "link": "/", "buttonText": "Go To Home" }, { "default": ($$result2) => renderTemplate`
404 - Not Found.
` })}`;
}, "D:/TypeScript Projects/authentication-frontend/src/pages/404.astro", void 0);

const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
