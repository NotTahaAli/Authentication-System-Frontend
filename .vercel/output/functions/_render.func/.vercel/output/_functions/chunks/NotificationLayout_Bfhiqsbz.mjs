import { c as createComponent, g as defineStyleVars, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro, d as renderComponent } from './astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import { $ as $$Group, a as $$Button, b as $$Layout } from './Group_B5u9lBim.mjs';
/* empty css                                   */
import 'clsx';

const $$Astro$1 = createAstro();
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Text;
  const { color = "unset" } = Astro2.props;
  const $$definedVars = defineStyleVars([{ color }]);
  return renderTemplate`${maybeRenderHead()}<span data-astro-cid-yzlqzfct${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </span> `;
}, "D:/TypeScript Projects/authentication-frontend/src/components/Text.astro", void 0);

const $$Astro = createAstro();
const $$NotificationLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NotificationLayout;
  const {
    title,
    indexPage = true,
    followLinks = false,
    heading,
    link,
    buttonText = "Continue",
    localError
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "useCaptcha": false, "indexPage": indexPage, "followLinks": followLinks, "heading": heading, "localError": localError, "data-astro-cid-wgojret4": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Text", $$Text, { "data-astro-cid-wgojret4": true }, { "default": ($$result3) => renderTemplate`${renderSlot($$result3, $$slots["default"])}` })} ${maybeRenderHead()}<div data-astro-cid-wgojret4> ${renderComponent($$result2, "Group", $$Group, { "data-astro-cid-wgojret4": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Button", $$Button, { "href": link, "data-astro-cid-wgojret4": true }, { "default": ($$result4) => renderTemplate`${buttonText}` })} ` })} </div> ` })} `;
}, "D:/TypeScript Projects/authentication-frontend/src/layouts/NotificationLayout.astro", void 0);

export { $$NotificationLayout as $, $$Text as a };
