import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import { $ as $$Group, a as $$Button, b as $$Layout } from '../chunks/Group_B5u9lBim.mjs';
import { $ as $$Field } from '../chunks/Field_COoY8AJ0.mjs';
import { $ as $$NotificationLayout, a as $$Text } from '../chunks/NotificationLayout_Bfhiqsbz.mjs';
import { i as isAuthenticated } from '../chunks/isAuthenticated_D9DKl1iU.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$TwoFactor = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TwoFactor;
  const reCaptchaKey = "6LeGhRUqAAAAAGa2zZwSdqwlYVPyCplxasSQisUd";
  const jwt = isAuthenticated(Astro2.cookies);
  if (jwt) {
    if (Astro2.request.method == "PATCH") {
      try {
        const { isEnabled } = await Astro2.request.json();
        const outputResponse = await fetch("http://localhost:3000/auth/two-factor", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Authorization": jwt.value
          },
          body: JSON.stringify({
            isEnabled
          })
        });
        const { body, status, statusText } = outputResponse;
        const _resp = new Response(body, { status, statusText });
        return _resp;
      } catch (err) {
        return new Response(JSON.stringify({ error: err ? err.toString() : "Unknown Error" }), { status: 500 });
      }
    }
    return Astro2.redirect("/profile");
  }
  let localError = void 0;
  let bigError = false;
  const twoFactorCode = Astro2.cookies.get("twoFactorAuthentication");
  if (!twoFactorCode) {
    return Astro2.redirect("/");
  }
  if (Astro2.request.method == "POST") {
    try {
      const formdata = await Astro2.request.formData();
      const codes = formdata.getAll("twoFactorCode");
      let code = "";
      for (const codeVal of codes) {
        code += codeVal.valueOf();
      }
      console.log(code);
      if (code.length != 6) {
        throw new Error("Invalid Code");
      }
      if (Number.isNaN(parseInt(code))) {
        throw new Error("Invalid Code");
      }
      const token = formdata.get("g-recaptcha-response");
      const resp = await fetch("http://localhost:3000/auth/two-factor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "TwoFactorCode": twoFactorCode.value
        },
        body: JSON.stringify({
          code: parseInt(code),
          token
        })
      });
      if (resp.ok) {
        const jwt2 = resp.headers.get("Authorization");
        if (jwt2) {
          Astro2.cookies.set("session_jwt", jwt2);
          Astro2.cookies.delete("twoFactorAuthentication");
          return Astro2.redirect("/profile");
        }
      } else {
        const err = await resp.json();
        if (err.error == "Two Factor Token Invalid." || err.error == "Two Factor Token Missing or Invalid.") {
          Astro2.cookies.delete("twoFactorAuthentication");
          bigError = true;
        } else if (err.error == "User not found.") {
          err.error = "The Two Factor Token points to a user that does not exist.";
          bigError = true;
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
  return renderTemplate`${bigError ? renderTemplate`${renderComponent($$result, "NotificationLayout", $$NotificationLayout, { "title": "AuthSys | Two Factor Authentication", "heading": "AuthSys", "link": "/login", "buttonText": "Go to Login" }, { "default": ($$result2) => renderTemplate`${localError}` })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AuthSys | Two Factor Authentication", "useCaptcha": true, "heading": "AuthSys", "localError": localError }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Text", $$Text, {}, { "default": ($$result3) => renderTemplate`Please enter the 6 digit code sent to your email.` })}${maybeRenderHead()}<form method="POST">${renderComponent($$result2, "Group", $$Group, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Field", $$Field, { "class": "twoFactorField", "id": "twoFactorField1", "type": "number", "name": "twoFactorCode", "placeholder": "", "autocomplete": "one-time-code", "required": true, "minlength": 1 })}${renderComponent($$result3, "Field", $$Field, { "class": "twoFactorField", "id": "twoFactorField2", "type": "number", "name": "twoFactorCode", "placeholder": "", "autocomplete": "one-time-code", "required": true, "minlength": 1 })}${renderComponent($$result3, "Field", $$Field, { "class": "twoFactorField", "id": "twoFactorField3", "type": "number", "name": "twoFactorCode", "placeholder": "", "autocomplete": "one-time-code", "required": true, "minlength": 1 })}${renderComponent($$result3, "Field", $$Field, { "class": "twoFactorField", "id": "twoFactorField4", "type": "number", "name": "twoFactorCode", "placeholder": "", "autocomplete": "one-time-code", "required": true, "minlength": 1 })}${renderComponent($$result3, "Field", $$Field, { "class": "twoFactorField", "id": "twoFactorField5", "type": "number", "name": "twoFactorCode", "placeholder": "", "autocomplete": "one-time-code", "required": true, "minlength": 1 })}${renderComponent($$result3, "Field", $$Field, { "class": "twoFactorField", "id": "twoFactorField6", "type": "number", "name": "twoFactorCode", "placeholder": "", "autocomplete": "one-time-code", "required": true, "minlength": 1 })}` })}<div class="containerDiv"><div class="g-recaptcha"${addAttribute(reCaptchaKey, "data-sitekey")} data-theme="dark"></div>${renderComponent($$result2, "Group", $$Group, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "id": "continueButton" }, { "default": ($$result4) => renderTemplate`Continue Button` })}` })}</div></form>` })}
<style>
	form, .containerDiv {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}
	.containerDiv {
		width: 80%;
	}
</style>
<style>
	.twoFactorField {
		aspect-ratio: 1/1;
		text-align: center;
	}
</style>`}`;
}, "D:/TypeScript Projects/authentication-frontend/src/pages/two-factor.astro", void 0);
const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/two-factor.astro";
const $$url = "/two-factor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$TwoFactor,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
