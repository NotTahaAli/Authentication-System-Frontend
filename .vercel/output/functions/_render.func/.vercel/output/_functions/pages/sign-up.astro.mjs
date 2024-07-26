import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import { $ as $$Group, a as $$Button, b as $$Layout } from '../chunks/Group_B5u9lBim.mjs';
import { $ as $$Field } from '../chunks/Field_COoY8AJ0.mjs';
import { $ as $$Link } from '../chunks/Link_Cxovnipv.mjs';
import { $ as $$NotificationLayout } from '../chunks/NotificationLayout_Bfhiqsbz.mjs';
import { i as isAuthenticated } from '../chunks/isAuthenticated_D9DKl1iU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$SignUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignUp;
  const reCaptchaKey = "6LeGhRUqAAAAAGa2zZwSdqwlYVPyCplxasSQisUd";
  let localError = void 0;
  let accountCreated = false;
  if (isAuthenticated(Astro2.cookies)) {
    return Astro2.redirect("/profile");
  }
  if (Astro2.request.method == "POST") {
    try {
      const formdata = await Astro2.request.formData();
      const username = formdata.get("username");
      const password = formdata.get("password");
      const email = formdata.get("email");
      const token = formdata.get("g-recaptcha-response");
      const resp = await fetch("http://localhost:3000/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password,
          token,
          email
        })
      });
      if (resp.ok) {
        accountCreated = true;
      } else {
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
  }
  return renderTemplate`${accountCreated ? renderTemplate`${renderComponent($$result, "NotificationLayout", $$NotificationLayout, { "title": "AuthSys | Signup", "link": "/login", "heading": "AuthSys", "buttonText": "Continue", "localError": localError }, { "default": ($$result2) => renderTemplate`
Signup Successful. Please visit the link in your email to verify your account and then proceed to sign in.
` })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AuthSys | Signup", "useCaptcha": true, "heading": "AuthSys", "localError": localError }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<form method="POST">${renderComponent($$result2, "Field", $$Field, { "id": "emailField", "type": "email", "name": "email", "placeholder": "Email", "autocomplete": "email", "required": true, "patternErrors": {
    "^[\\w-_+\\.]+@([\\w-]+\\.)+[\\w-]{2,63}$": "Email must be a valid email."
  } })}${renderComponent($$result2, "Field", $$Field, { "id": "usernameField", "type": "text", "name": "username", "placeholder": "Username", "autocomplete": "username", "required": true, "minlength": 3 })}${renderComponent($$result2, "Field", $$Field, { "id": "passwordField", "type": "password", "name": "password", "placeholder": "Password", "autocomplete": "new-password", "required": true, "patternErrors": {
    "(.{8})": "Password must be atleast 8 characters.",
    "([A-Z])": "Password must contain atleast one Uppercase Letter.",
    "([a-z])": "Password must contain atleast one Lowercase Letter.",
    "([0-9])": "Password must contain atleast one digit.",
    "([^A-Za-z0-9])": "Password must contain atleast one special character."
  } })}<div class="g-recaptcha"${addAttribute(reCaptchaKey, "data-sitekey")} data-theme="dark"></div>${renderComponent($$result2, "Group", $$Group, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "id": "signupButton" }, { "default": ($$result4) => renderTemplate`Signup` })}` })}${renderComponent($$result2, "Group", $$Group, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": "/login" }, { "default": ($$result4) => renderTemplate`Go To Login` })}` })}</form>` })}
<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}
</style>`}`;
}, "D:/TypeScript Projects/authentication-frontend/src/pages/sign-up.astro", void 0);
const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/sign-up.astro";
const $$url = "/sign-up";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$SignUp,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
