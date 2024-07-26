import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, a as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import { $ as $$Group, a as $$Button, b as $$Layout } from '../chunks/Group_B5u9lBim.mjs';
import { $ as $$Field } from '../chunks/Field_COoY8AJ0.mjs';
import { $ as $$Link } from '../chunks/Link_Cxovnipv.mjs';
import { i as isAuthenticated } from '../chunks/isAuthenticated_D9DKl1iU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const reCaptchaKey = "6LeGhRUqAAAAAGa2zZwSdqwlYVPyCplxasSQisUd";
  let localError = void 0;
  if (isAuthenticated(Astro2.cookies)) {
    return Astro2.redirect("/profile");
  }
  if (Astro2.request.method == "POST") {
    try {
      const formdata = await Astro2.request.formData();
      const username = formdata.get("username");
      const password = formdata.get("password");
      const token = formdata.get("g-recaptcha-response");
      const resp = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password,
          token
        })
      });
      if (resp.ok) {
        const jwt = resp.headers.get("Authorization");
        if (jwt) {
          Astro2.cookies.set("session_jwt", jwt);
          return Astro2.redirect("/profile");
        }
      } else {
        const err = await resp.json();
        if (err.error == "Need 2FA.") {
          const twoFactorCode = resp.headers.get("TwoFactorCode");
          if (twoFactorCode) {
            Astro2.cookies.set("twoFactorAuthentication", twoFactorCode);
            return Astro2.redirect("/two-factor");
          }
        } else if (err.error == "Email not verified.") {
          return Astro2.redirect("/verify-email");
        }
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
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AuthSys | Login", "useCaptcha": true, "heading": "AuthSys", "localError": localError, "data-astro-cid-sgpqyurt": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script src="https://accounts.google.com/gsi/client" async></script> ', '<form method="POST" data-astro-cid-sgpqyurt> ', " ", ' <div class="g-recaptcha"', ' data-theme="dark" data-astro-cid-sgpqyurt></div> ', " ", "\nOR USE\n", " </form> "])), maybeRenderHead(), renderComponent($$result2, "Field", $$Field, { "id": "usernameField", "type": "text", "name": "username", "autocomplete": "username", "placeholder": "Username", "required": true, "minlength": 3, "data-astro-cid-sgpqyurt": true }), renderComponent($$result2, "Field", $$Field, { "id": "passwordField", "type": "password", "name": "password", "autocomplete": "current-password", "placeholder": "Password", "required": true, "patternErrors": {
    "(.{8})": "Password must be atleast 8 characters.",
    "([A-Z])": "Password must contain atleast one Uppercase Letter.",
    "([a-z])": "Password must contain atleast one Lowercase Letter.",
    "([0-9])": "Password must contain atleast one digit.",
    "([^A-Za-z0-9])": "Password must contain atleast one special character."
  }, "data-astro-cid-sgpqyurt": true }), addAttribute(reCaptchaKey, "data-sitekey"), renderComponent($$result2, "Group", $$Group, { "data-astro-cid-sgpqyurt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Button", $$Button, { "id": "loginButton", "data-astro-cid-sgpqyurt": true }, { "default": ($$result4) => renderTemplate`Login` })} ` }), renderComponent($$result2, "Group", $$Group, { "data-astro-cid-sgpqyurt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Link", $$Link, { "href": "/sign-up", "data-astro-cid-sgpqyurt": true }, { "default": ($$result4) => renderTemplate`Signup` })} ${renderComponent($$result3, "Link", $$Link, { "href": "/forgot-password", "data-astro-cid-sgpqyurt": true }, { "default": ($$result4) => renderTemplate`Forgot Password` })} ` }), renderComponent($$result2, "Group", $$Group, { "mobileDirection": "column", "data-astro-cid-sgpqyurt": true }, { "default": ($$result3) => renderTemplate` <div id="g_id_onload"${addAttribute("264513844270-7e9eei2r6kla35hg82knuqiqq2o5m8pj.apps.googleusercontent.com", "data-client_id")} data-context="signin" data-ux_mode="popup"${addAttribute(Astro2.url.origin + "/google-oauth", "data-login_uri")} data-itp_support="true" data-astro-cid-sgpqyurt></div> <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline" data-text="signin_with" data-size="large" data-logo_alignment="left" data-astro-cid-sgpqyurt></div>  ${renderComponent($$result3, "Button", $$Button, { "href": "/passkey", "data-astro-cid-sgpqyurt": true }, { "default": ($$result4) => renderTemplate`Passkey` })} ` })) })} `;
}, "D:/TypeScript Projects/authentication-frontend/src/pages/login.astro", void 0);
const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
