import {
  contentBaseView,
  contentBaseView2,
} from "../component/content.base.ts";
import { dashboardHomeView } from "../component/dashboard.home.view.ts";
import { headerView } from "../component/header.base.ts";
import { sidebarView } from "../component/sidebar.base.ts";
import { baseLayout } from "../layout/base.ts";

export const basePage = async (
  req: { header?: string; sidebar?: string; content?: string },
) => {
  const header = req.header ?? headerView();
  // const sidebar = req.sidebar ?? sidebarView();
  // const content = req.content ?? dashboardHomeView();
  const mainContent = contentBaseView(header, "", "");

  return await baseLayout(mainContent);
};

export const newBasePage = async (
  req: { navbar: string; content: string },
) => {
  const mainContent = contentBaseView2({
    navbar: req.navbar,
    content: req.content,
  });

  return await baseLayout(mainContent);
};
