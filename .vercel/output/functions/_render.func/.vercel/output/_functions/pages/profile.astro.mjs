import { c as createComponent, r as renderTemplate, e as defineScriptVars, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import { $ as $$Group, a as $$Button, b as $$Layout } from '../chunks/Group_B5u9lBim.mjs';
import { $ as $$Field } from '../chunks/Field_COoY8AJ0.mjs';
import { $ as $$Link } from '../chunks/Link_Cxovnipv.mjs';
import { i as isAuthenticated } from '../chunks/isAuthenticated_D9DKl1iU.mjs';
import { $ as $$NotificationLayout } from '../chunks/NotificationLayout_Bfhiqsbz.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
  const jwt = isAuthenticated(Astro2.cookies);
  if (!jwt) {
    return Astro2.redirect("/login");
  }
  let localError = void 0;
  let data;
  try {
    const resp = await fetch("http://localhost:3000/user", {
      headers: {
        Authorization: jwt.value
      }
    });
    if (resp.ok) {
      data = (await resp.json()).message;
    } else {
      return Astro2.redirect("/logout");
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
  return renderTemplate(_a || (_a = __template(["", "<script>(function(){", `
	const button = document.getElementById("toggle2FAButton")
	const field = document.getElementById("2faField");
	if (button) {
		button.addEventListener("click",async ()=>{
			let localError = undefined;
			try {
				const resp = await fetch("/two-factor",{
					credentials: "include",
					method: "PATCH",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						isEnabled: !(data.twoFactor)
					})
				})
				if (resp.ok) {
					data.twoFactor = !data.twoFactor;
					FireToast({
						text: "Successfully turned Two Factor Authentication "+(data.twoFactor ? "On":"Off"),
						icon: "success"
					});
					if (field) {
						field.value = data.twoFactor ? "Two Factor Enabled" : "Two Factor Disabled";
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
		})
	}
})();</script><script>
	const passKeyButton = document.getElementById("addPasskeyButton")
	if (passKeyButton) {
		passKeyButton.addEventListener("click",async()=>{
			let localError = undefined;
			try {
				const resp = await fetch("/passkeys/register/generate-options",{
					credentials: "include",
					method: "GET"
				})
				if (resp.ok) {
					const data = await resp.json();
					const message = data.message;
					try {
						const attResp = await SimpleWebAuthnBrowser.startRegistration(message)
						const verificationResp = await fetch('/passkeys/register/verify', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
								'webauthn_options': resp.headers.get("webauthn_options"),
							},
							body: JSON.stringify(attResp),
						});
						const data = await verificationResp.json();
						if (verificationResp.ok && data && data.message?.verified) {
							FireToast({text: "Passkey Successfully Added", icon: "success"});
						} else {
							localError = data.error;
							if (!localError) localError = "An Unknown Error Occured";
						}
					} catch (error) {
						if (error.name === "NotAllowedError") {
							error.message = "Could Not Add Passkey.";
						}
						else if (error.name === 'InvalidStateError') {
							error.message = 'Authenticator was probably already registered by user';
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
		})
	}
</script>`])), localError ? renderTemplate`${renderComponent($$result, "NotificationLayout", $$NotificationLayout, { "title": "AuthSys | My Profile", "heading": "AuthSys", "link": "/profile", "buttonText": "Try Again" }, { "default": ($$result2) => renderTemplate`An Error Occured While Loading this Page: ${localError}` })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AuthSys | My Profile", "useCaptcha": false, "heading": "AuthSys", "useAuthn": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="containerDiv">${renderComponent($$result2, "Field", $$Field, { "id": "emailField", "type": "email", "name": "email", "placeholder": "Email", "value": data.email, "disabled": true })}${renderComponent($$result2, "Field", $$Field, { "id": "usernameField", "type": "text", "name": "username", "placeholder": "Username", "value": data.username, "disabled": true })}${renderComponent($$result2, "Field", $$Field, { "id": "2faField", "type": "text", "name": "2faEnabled", "placeholder": "2FA Enabled", "value": data.twoFactor ? "Two Factor Enabled" : "Two Factor Disabled", "disabled": true })}</div><div class="containerDiv">${renderComponent($$result2, "Group", $$Group, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "id": "toggle2FAButton" }, { "default": ($$result4) => renderTemplate`Toggle 2FA` })}` })}${renderComponent($$result2, "Group", $$Group, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Button", $$Button, { "id": "addPasskeyButton" }, { "default": ($$result4) => renderTemplate`Add Passkey` })}` })}${renderComponent($$result2, "Group", $$Group, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": "/logout" }, { "default": ($$result4) => renderTemplate`Log Out` })}` })}</div>` })}
<style>
	.containerDiv {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		width: 80%;
	}
</style>`, defineScriptVars({ data }));
}, "D:/TypeScript Projects/authentication-frontend/src/pages/profile.astro", void 0);
const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Profile,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
