import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import { $ as $$NotificationLayout } from '../chunks/NotificationLayout_Bfhiqsbz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Verify = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Verify;
  if (!Astro2.url.searchParams.has("code")) {
    return Astro2.redirect("/login");
  }
  let localError = void 0;
  try {
    const code = Astro2.url.searchParams.get("code");
    const resp = await fetch(
      "http://localhost:3000/auth/verify?" + new URLSearchParams({ code: code ? code : "" }).toString(),
      {
        method: "GET"
      }
    );
    if (!resp.ok) {
      const err = await resp.json();
      localError = err.error;
    }
  } catch (err) {
    if (err && typeof err == "string") {
      localError = err;
    } else if (err && typeof err == "object" && !Array.isArray(err) && "message" in err && typeof err.message == "string") {
      localError = err.message;
    } else {
      localError = "Uknown Error Occured.";
    }
  }
  return renderTemplate`${renderComponent($$result, "NotificationLayout", $$NotificationLayout, { "title": "AuthSys | Verify Email", "heading": "AuthSys", "link": "/login", "buttonText": "Go to Login." }, { "default": ($$result2) => renderTemplate`${localError ? localError : "Your Email has been verified. Please proceed to login."}` })}`;
}, "D:/TypeScript Projects/authentication-frontend/src/pages/verify.astro", void 0);
const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/verify.astro";
const $$url = "/verify";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Verify,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
