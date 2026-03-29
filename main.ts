import app from "./src/app.deno.ts";

if (import.meta.main) {
  const port = 8080;
  const option = {
    port,
  };

  Deno.serve(option, app.fetch);
}
