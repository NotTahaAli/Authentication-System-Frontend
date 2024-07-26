import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import { $ as $$Group, a as $$Button, b as $$Layout } from '../chunks/Group_B5u9lBim.mjs';
import { $ as $$Field } from '../chunks/Field_COoY8AJ0.mjs';
import { $ as $$Link } from '../chunks/Link_Cxovnipv.mjs';
import { $ as $$NotificationLayout, a as $$Text } from '../chunks/NotificationLayout_Bfhiqsbz.mjs';
import { i as isAuthenticated } from '../chunks/isAuthenticated_D9DKl1iU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ForgotPassword;
  const reCaptchaKey = "6LeGhRUqAAAAAGa2zZwSdqwlYVPyCplxasSQisUd";
  if (isAuthenticated(Astro2.cookies)) {
    return Astro2.redirect("/profile");
  }
  let localError = void 0;
  let done = false;
  if (Astro2.request.method == "POST") {
    try {
      const formdata = await Astro2.request.formData();
      const email = formdata.get("email");
      const token = formdata.get("g-recaptcha-response");
      const resp = await fetch("http://localhost:3000/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          token
        })
      });
      if (resp.ok) {
        done = true;
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
  return renderTemplate`${done ? renderTemplate`${renderComponent($$result, "NotificationLayout", $$NotificationLayout, { "title": "AuthSys | Forgot Password", "link": "/login", "heading": "AuthSys", "buttonText": "Continue", "localError": localError }, { "default": ($$result2) => renderTemplate`
Please check your email for a link to reset your password. Note: Email will only be sent if you had an account on that email.
` })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AuthSys | Forgot Password", "useCaptcha": true, "heading": "AuthSys", "localError": localError }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Text", $$Text, {}, { "default": ($$result3) => renderTemplate`Please enter the email linked with your account. We will send a link to your email to reset your password.` })}${maybeRenderHead()}<form method="POST">${renderComponent($$result2, "Field", $$Field, { "id": "emailField", "type": "email", "name": "email", "placeholder": "Email", "autocomplete": "email", "required": true, "patternErrors": {
    "^[\\w-_+\\.]+@([\\w-]+\\.)+[\\w-]{2,63}$": "Email must be a valid email."
  } })}<div class="g-recaptcha"${addAttribute(reCaptchaKey, "data-sitekey")} data-theme="dark"></div>${renderComponent($$result2, "Group", $$Group, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "id": "forgotPasswordButton" }, { "default": ($$result4) => renderTemplate`Send Email` })}` })}${renderComponent($$result2, "Group", $$Group, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": "/login" }, { "default": ($$result4) => renderTemplate`Go To Login` })}` })}</form>` })}
<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}
</style>`}`;
}, "D:/TypeScript Projects/authentication-frontend/src/pages/forgot-password.astro", void 0);
const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/forgot-password.astro";
const $$url = "/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ForgotPassword,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
