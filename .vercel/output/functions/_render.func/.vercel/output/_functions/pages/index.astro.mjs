import { c as createComponent, b as createAstro } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import 'clsx';
import { i as isAuthenticated } from '../chunks/isAuthenticated_D9DKl1iU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (isAuthenticated(Astro2.cookies)) {
    return Astro2.redirect("/profile");
  } else {
    return Astro2.redirect("/login");
  }
}, "D:/TypeScript Projects/authentication-frontend/src/pages/index.astro", void 0);

const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
