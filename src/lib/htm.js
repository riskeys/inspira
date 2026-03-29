// html.js
import htm from "htm";

// Basic h() implementation
export function h(type, props, ...children) {
  return { type, props: props || {}, children };
  // return { children };
}

export function render(node) {
  if (typeof node === "string") return node;
  const { type, props, children } = node;
  const attrs = Object.entries(props || {})
    .map(([k, v]) => `${k}="${String(v)}"`)
    .join(" ");
  const inner = (children || []).map(render).join("");
  return `<${type}${attrs ? " " + attrs : ""}>${inner}</${type}>`;
}

// Bind htm to h()
export const html = htm.bind(h);
