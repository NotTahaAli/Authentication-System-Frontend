import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import { $ as $$Group, a as $$Button, b as $$Layout } from '../chunks/Group_B5u9lBim.mjs';
import { $ as $$Field } from '../chunks/Field_COoY8AJ0.mjs';
import { i as isAuthenticated } from '../chunks/isAuthenticated_D9DKl1iU.mjs';
import { $ as $$NotificationLayout } from '../chunks/NotificationLayout_Bfhiqsbz.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$ChangePassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ChangePassword;
  if (isAuthenticated(Astro2.cookies)) {
    return Astro2.redirect("/profile");
  }
  if (!Astro2.url.searchParams.has("code")) {
    return Astro2.redirect("/login");
  }
  let localError = void 0;
  let done = false;
  if (Astro2.request.method == "POST") {
    try {
      const formdata = await Astro2.request.formData();
      const password = formdata.get("password");
      const code = Astro2.url.searchParams.get("code");
      const resp = await fetch(
        "http://localhost:3000/auth/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            password,
            code
          })
        }
      );
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
  return renderTemplate`${done ? renderTemplate`${renderComponent($$result, "NotificationLayout", $$NotificationLayout, { "title": "AuthSys | Change Password", "link": "/login", "heading": "AuthSys", "buttonText": "Continue", "localError": localError }, { "default": ($$result2) => renderTemplate`
Your Password has been changed, please log in.
` })}` : renderTemplate(_a || (_a = __template(["", '\n<style>\n	form {\n		display: flex;\n		flex-direction: column;\n		align-items: center;\n		gap: 0.5rem;\n	}\n</style>\n<script>\n	const confirmPasswordField = document.querySelector(\n		"#confirmPasswordField",\n	);\n	const passwordField = document.querySelector("#passwordField");\n	if (passwordField && confirmPasswordField) {\n		confirmPasswordField.addEventListener("input", () => {\n			if (passwordField.value != confirmPasswordField.value) {\n				confirmPasswordField.setCustomValidity(\n					"Passwords do not match.",\n				);\n			} else {\n				confirmPasswordField.setCustomValidity("");\n			}\n		});\n		passwordField.addEventListener("input", () => {\n			if (passwordField.value != confirmPasswordField.value) {\n				confirmPasswordField.setCustomValidity(\n					"Passwords do not match.",\n				);\n			} else {\n				confirmPasswordField.setCustomValidity("");\n			}\n		});\n	}\n</script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "AuthSys | Change Password", "useCaptcha": false, "heading": "AuthSys", "localError": localError }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<form method="POST">${renderComponent($$result2, "Field", $$Field, { "id": "passwordField", "type": "password", "name": "password", "placeholder": "Password", "autocomplete": "new-password", "required": true, "patternErrors": {
    "(.{8})": "Password must be atleast 8 characters.",
    "([A-Z])": "Password must contain atleast one Uppercase Letter.",
    "([a-z])": "Password must contain atleast one Lowercase Letter.",
    "([0-9])": "Password must contain atleast one digit.",
    "([^A-Za-z0-9])": "Password must contain atleast one special character."
  } })}${renderComponent($$result2, "Field", $$Field, { "id": "confirmPasswordField", "type": "password", "name": "confirmPassword", "placeholder": "Confirm Password", "autocomplete": "new-password", "required": true })}${renderComponent($$result2, "Group", $$Group, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "id": "changeButton" }, { "default": ($$result4) => renderTemplate`Change Password` })}` })}</form>` }))}`;
}, "D:/TypeScript Projects/authentication-frontend/src/pages/change-password.astro", void 0);
const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/change-password.astro";
const $$url = "/change-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ChangePassword,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
