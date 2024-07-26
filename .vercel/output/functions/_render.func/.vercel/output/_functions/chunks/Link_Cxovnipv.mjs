import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro } from './astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */

const $$Astro = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-mbqdmgin>${renderSlot($$result, $$slots["default"])}</a> `;
}, "D:/TypeScript Projects/authentication-frontend/src/components/Link.astro", void 0);

export { $$Link as $ };
