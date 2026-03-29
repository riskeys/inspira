export const baseLayoutSync = (content: string, title?: string) => {
  const view = Deno.readTextFileSync("./src/views/layout/index.html");
  return view
    .replace("{{ title }}", title || "Dashify")
    .replace("{{ content }}", content);
};

export const baseLayout = async (content: string) => {
  const view = await Deno.readTextFile("./src/views/layout/index.html");
  return view
    .replace("{{ title }}", "Inspira.psi")
    .replace("{{ content }}", content);
};
