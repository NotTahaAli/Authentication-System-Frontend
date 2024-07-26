import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import { $ as $$Group, a as $$Button, b as $$Layout } from '../chunks/Group_B5u9lBim.mjs';
import { $ as $$Field } from '../chunks/Field_COoY8AJ0.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$GoogleOauth = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GoogleOauth;
  let localError = void 0;
  if (Astro2.request.method != "POST") {
    return Astro2.request.redirect("/login");
  }
  const formdata = await Astro2.request.formData();
  const credential = formdata.get("credential");
  const g_csrf_token = formdata.get("g_csrf_token");
  const username = formdata.get("username");
  const password = formdata.get("password");
  try {
    console.log(credential, g_csrf_token);
    const resp = await fetch(
      "http://localhost:3000/auth/google-callback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: "g_csrf_token=" + g_csrf_token
        },
        body: JSON.stringify({
          credential,
          g_csrf_token,
          username,
          password
        })
      }
    );
    if (resp.ok) {
      const jwt = resp.headers.get("Authorization");
      if (jwt) {
        Astro2.cookies.set("session_jwt", jwt);
        return Astro2.redirect("/profile");
      }
    } else {
      const err = await resp.json();
      console.log(err);
      if (err.error != "Linked account not found. Create one.") {
        localError = err.error;
      }
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AuthSys | Google Signup", "useCaptcha": false, "heading": "AuthSys", "localError": localError, "data-astro-cid-af5edvv3": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form method="POST" data-astro-cid-af5edvv3> ${renderComponent($$result2, "Field", $$Field, { "id": "usernameField", "type": "text", "name": "username", "placeholder": "Username", "autocomplete": "username", "required": true, "minlength": 3, "data-astro-cid-af5edvv3": true })} ${renderComponent($$result2, "Field", $$Field, { "id": "passwordField", "type": "password", "name": "password", "placeholder": "Password", "autocomplete": "new-password", "required": true, "patternErrors": {
    "(.{8})": "Password must be atleast 8 characters.",
    "([A-Z])": "Password must contain atleast one Uppercase Letter.",
    "([a-z])": "Password must contain atleast one Lowercase Letter.",
    "([0-9])": "Password must contain atleast one digit.",
    "([^A-Za-z0-9])": "Password must contain atleast one special character."
  }, "data-astro-cid-af5edvv3": true })} ${renderComponent($$result2, "Field", $$Field, { "id": "credential", "type": "hidden", "name": "credential", "placeholder": "", "value": credential ? credential.toString() : "", "data-astro-cid-af5edvv3": true })} ${renderComponent($$result2, "Field", $$Field, { "id": "g_csrf_token", "type": "hidden", "name": "g_csrf_token", "placeholder": "", "value": g_csrf_token ? g_csrf_token.toString() : "", "data-astro-cid-af5edvv3": true })} <br data-astro-cid-af5edvv3> ${renderComponent($$result2, "Group", $$Group, { "data-astro-cid-af5edvv3": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Button", $$Button, { "id": "signupButton", "data-astro-cid-af5edvv3": true }, { "default": ($$result4) => renderTemplate`Signup` })} ` })} </form> ` })} `;
}, "D:/TypeScript Projects/authentication-frontend/src/pages/google-oauth.astro", void 0);
const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/google-oauth.astro";
const $$url = "/google-oauth";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$GoogleOauth,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
