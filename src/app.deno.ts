import { Hono } from "@hono/hono";
import { serveStatic } from "@hono/hono/deno";
import dashboardRoutes from "./routes/dashboard.route.ts";
import { setLogger } from "./middlewares/logger.ts";

const app = new Hono();

app.use("/*", setLogger);

app.route("/", dashboardRoutes);

app.get("/healthcheck", (c) => {
  return c.text("app is healthy :)");
});

app.use("/js/*", serveStatic({ root: "./public" }));
app.use("/css/*", serveStatic({ root: "./public" }));
app.use("/assets/*", serveStatic({ root: "./public" }));

export default app;
