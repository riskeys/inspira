import { Context, Next } from "@hono/hono";
import { deleteCookie, getCookie } from "@hono/hono/cookie";
import { getPageRoute } from "../../utils/helper.ui.ts";

export const checkSess = async (c: Context, n: Next) => {
  const sesh = getCookie(c, "session");
  console.log("checking session", sesh);

  if (sesh) {
    const kv = await Deno.openKv();
    const session = await kv.get(["session", sesh]);

    if (!session.value) {
      deleteCookie(c, "session");
      console.log("redirect to login page");
      return c.redirect(getPageRoute("login"));
    }
    console.log("session found", session.value);

    c.set("user", session.value);
    console.log("redirect to dashboard page");
    return await n();
  }
  console.log("redirect to login page");
  return c.redirect(getPageRoute("login"));
};
