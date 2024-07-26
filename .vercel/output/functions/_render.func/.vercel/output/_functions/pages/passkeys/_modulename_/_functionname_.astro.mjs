import { c as createComponent, r as renderTemplate, b as createAstro } from '../../../chunks/astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import 'clsx';
import { i as isAuthenticated } from '../../../chunks/isAuthenticated_D9DKl1iU.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$functionName = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$functionName;
  const AllowedMethods = {
    register: {
      "generate-options": ["GET"],
      verify: ["POST"]
    },
    auth: {
      "get-options": ["POST"],
      verify: ["POST"]
    }
  };
  const { moduleName, functionName } = Astro2.params;
  if (!moduleName || !functionName) {
    Astro2.response.status = 404;
    Astro2.response.statusText = "Not found";
  } else {
    const allowedMethods = AllowedMethods[moduleName]?.[functionName];
    if (!allowedMethods || !allowedMethods.includes(Astro2.request.method)) {
      Astro2.response.status = 404;
      Astro2.response.statusText = "Not found";
    }
  }
  try {
    const jwt = isAuthenticated(Astro2.cookies)?.value;
    const sendingHeaders = {
      Authorization: jwt || ""
    };
    Astro2.request.headers.forEach((value, key) => {
      sendingHeaders[key] = value;
    });
    const outputResponse = await fetch(
      "http://localhost:3000/authn/" + moduleName + "/" + functionName,
      {
        method: Astro2.request.method,
        headers: sendingHeaders,
        body: Astro2.request.body,
        duplex: "half"
      }
    );
    const { body, status, statusText, headers } = outputResponse;
    const resp = new Response(body, { status, statusText, headers });
    return resp;
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err ? err.toString() : "Unknown Error" }),
      { status: 500 }
    );
  }
  return renderTemplate``;
}, "D:/TypeScript Projects/authentication-frontend/src/pages/passkeys/[moduleName]/[functionName].astro", void 0);
const $$file = "D:/TypeScript Projects/authentication-frontend/src/pages/passkeys/[moduleName]/[functionName].astro";
const $$url = "/passkeys/[moduleName]/[functionName]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$functionName,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
