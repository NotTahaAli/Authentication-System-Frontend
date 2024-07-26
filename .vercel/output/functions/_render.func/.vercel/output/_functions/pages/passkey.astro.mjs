import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import { $ as $$Group, a as $$Button, b as $$Layout } from '../chunks/Group_B5u9lBim.mjs';
import { $ as $$Field } from '../chunks/Field_COoY8AJ0.mjs';
import { $ as $$Link } from '../chunks/Link_Cxovnipv.mjs';
import { i as isAuthenticated } from '../chunks/isAuthenticated_D9DKl1iU.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Passkey = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Passkey;
  if (isAuthenticated(Astro2.cookies)) {
    return Astro2.redirect("/profile");
  }
  return renderTemplate(_a || (_a = __template(["", `  <script>
	async function buttonClicked() {
		const userfield = document.getElementById("usernameField");
		if (!userfield) return;
		let localError = undefined;
			try {
				const resp = await fetch("/passkeys/auth/get-options",{
					credentials: "include",
					method: "POST",
					headers: {
						"Content-Type":"application/json"
					}, body: JSON.stringify({
						username: userfield.value
					})
				})
				if (resp.ok) {
					const data = await resp.json();
					const message = data.message;
					try {
						const attResp = await SimpleWebAuthnBrowser.startAuthentication(message)
						const verificationResp = await fetch('/passkeys/auth/verify', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								'webauthn_options': resp.headers.get("webauthn_options"),
							},
							body: JSON.stringify(attResp),
						});
						const data = await verificationResp.json();
						if (verificationResp.ok && data && data.message?.verified) {
							document.cookie = "session_jwt="+verificationResp.headers.get("Authorization");
							window.location.reload();
						} else {
							localError = data.error;
							if (!localError) localError = "An Unknown Error Occured";
						}
					} catch (error) {
						if (error.name === "NotAllowedError") {
							error.message = "Could Not Login Using Passkey.";
						}
						else if (error.name === 'InvalidStateError') {
							error.message = 'Authenticator was not registered by user.';
						}
						throw error;
					}
				} else {
					const err = await resp.json();
					localError = err.error;
				}
			} catch (err) {
				if (err && typeof err == "string") {
					localError = err;
				} else if (
					err &&
					typeof err == "object" &&
					!Array.isArray(err) &&
					"message" in err &&
					typeof err.message == "string"
				) {
					localError = err.message;
				} else {
					localError = "Uknown Error Occured.";
				}
			}
			if (localError) {
				FireToast({text: localError, icon: "error"})
			}
	}
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "AuthSys | Login with Passkey", "useCaptcha": false, "heading": "AuthSys", "useAuthn": true, "data-astro-cid-lx33dsxt": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form onsubmit="buttonClicked(); return false;" data-astro-cid-lx33dsxt> ${renderComponent($$result2, "Field", $$Field, { "id": "usernameField", "type": "text", "name": "username", "placeholder": "Username", "required": true, "minlength": 3, "autocomplete": "webauthn", "data-astro-cid-lx33dsxt": true })} ${renderComponent($$result2, "Group", $$Group, { "data-astro-cid-lx33dsxt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Button", $$Button, { "id": "loginButton", "data-astro-cid-lx33dsxt": true }, { "default": ($$result4) => renderTemplate`Login` })} ` })} ${renderComponent($$result2, "Group", $$Group, { "data-astro-cid-lx33dsxt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Link", $$Link, { "href": "/login", "data-astro-cid-lx33dsxt": true }, { "default": ($$result4) => renderTemplate`Go To Login` })} ` })} </form> ` }));
}, "D:/TypeScript Projects/authentication-frontend/src/pages/passkey.astro", void 0);

const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/passkey.astro";
const $$url = "/passkey";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Passkey,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
