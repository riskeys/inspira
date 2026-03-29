import { Context } from "@hono/hono";
import { HeroComp } from "../views/component/landing/hero.ts";
import { Navbar } from "../views/component/landing/navbar.ts";
import { newBasePage } from "../views/page/base.page.ts";
import { render } from "../lib/htm.js";
import { ProductSectionComp } from "../views/component/landing/product.ts";
import { LandingProductToggleUsecase } from "../apps/usecases/landing/product.toggle.usecase.ts";
import { FooterComp } from "../views/component/landing/footer.ts";

export const home = (c: Context) => {
  const logger = c.get("logger");

  logger.debug("test logger");

  const navbar = Navbar();
  const hero = HeroComp();
  const product = ProductSectionComp();
  const footer = FooterComp();
  const page = newBasePage({
    navbar: render(navbar),
    content: render(hero) + render(product),
    footer: render(footer),
  });
  return c.html(page);

  // const isHtmxRequest = c.req.header("HX-Request");
  // if (isHtmxRequest) {
  //   const view = HeroComp();
  //   const sidebarOOB = sidebarView();
  //
  //   return c.html(view + sidebarOOB);
  // } else {
  //   const view = await homePage(username);
  //   return c.html(view);
  // }
};

export const product = (c: Context) => {
  const isHtmxRequest = c.req.header("HX-Request");
  if (!isHtmxRequest) {
    return c.html("This endpoint is only for HTMX requests.", 400);
  }

  const section = c.req.param("section") as string;
  const order = c.req.param("order") as string;
  const expand = c.req.param("expand") as string;

  const usecase = new LandingProductToggleUsecase();
  const renderedView = usecase.execute({
    section,
    order,
    expand,
  });

  return c.html(renderedView);
};

export const transactions = (c: Context) => {
  return c.html("transaction is <b>here</b>");
};
