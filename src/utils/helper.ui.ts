const pageDir = "./src/views";
export const getHtmlPage = (file: string) => `${pageDir}${file}`;

const routePrefix = "/";
export const getPageRoute = (uri: string) => `${routePrefix}${uri}`;

export function escapeHtml(unsafe: string): string {
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
