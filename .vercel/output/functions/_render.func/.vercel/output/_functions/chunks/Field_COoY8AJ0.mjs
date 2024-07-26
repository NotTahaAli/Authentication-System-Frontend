import { c as createComponent, r as renderTemplate, e as defineScriptVars, a as addAttribute, m as maybeRenderHead, b as createAstro } from './astro/server_zJ7ocYsQ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Field = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Field;
  const {
    disabled = false,
    id,
    type,
    placeholder,
    required,
    minlength,
    title,
    patternErrors,
    name,
    value,
    autocomplete,
    class: classes
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", "<input", "", "", "", "", "", "", "", "", "", "", " data-astro-cid-ye3yfdhz>  <script>(function(){", '\n	const inputElement = document.querySelector("#"+id);\n	inputElement?.addEventListener("input", () => {\n		if (patternErrors) {\n			for (const exp in patternErrors) {\n				if (!inputElement.value.match(exp)) {\n					inputElement.setCustomValidity(patternErrors[exp]);\n					return;\n				}\n			}\n			inputElement.setCustomValidity("");\n		}\n	});\n})();<\/script>'])), maybeRenderHead(), addAttribute(disabled, "disabled"), addAttribute(id, "id"), addAttribute(type, "type"), addAttribute(placeholder, "placeholder"), addAttribute(required, "required"), addAttribute(minlength, "minlength"), addAttribute(title, "title"), addAttribute(name, "name"), addAttribute(value, "value"), addAttribute(classes, "class"), addAttribute(autocomplete, "autocomplete"), defineScriptVars({ patternErrors, id }));
}, "D:/TypeScript Projects/authentication-frontend/src/components/Field.astro", void 0);

export { $$Field as $ };
