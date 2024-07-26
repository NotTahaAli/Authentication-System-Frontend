import { c as createComponent, b as createAstro } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Logout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  if (Astro2.cookies.has("session_jwt")) {
    Astro2.cookies.delete("session_jwt");
  }
  return Astro2.redirect("/login");
}, "D:/TypeScript Projects/authentication-frontend/src/pages/logout.astro", void 0);

const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/logout.astro";
const $$url = "/logout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Logout,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
