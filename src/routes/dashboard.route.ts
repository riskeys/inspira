import { Hono } from "@hono/hono";
import {
  home,
  product,
  transactions,
} from "../controllers/dashboard.controller.ts";
import {
  ToastComp,
  ToastConfirmComp,
  ToastEmptyComp,
} from "../views/component/toast.ts";
import { valibot } from "../lib/deps.ts";

const dashboardRoutes = new Hono();

dashboardRoutes.get("/", home);
dashboardRoutes.get("/product/:section/:order/:expand", product);
dashboardRoutes.get("/transactions", transactions);

dashboardRoutes.get("/toast", (c) => {
  const toast = ToastComp("success", "Test Toast");
  return c.html(toast);
});

dashboardRoutes.get("/toast-confirm", (c) => {
  const toast = ToastConfirmComp("confirm", "Test Toast");
  return c.html(toast);
});

dashboardRoutes.get("/empty", (c) => {
  const msg = c.req.query("msg");
  const levelfb = c.req.query("level") || "neutral";
  const level = valibot.parse(
    valibot.union([
      valibot.literal("warning"),
      valibot.literal("neutral"),
      valibot.literal("success"),
    ]),
    levelfb,
  );

  const toast = ToastEmptyComp(level || "neutral", msg || "");
  return c.html(toast);
});

dashboardRoutes.get("/healthcheck", (c) => {
  return c.text("dashboard is healthy :)");
});

export default dashboardRoutes;
