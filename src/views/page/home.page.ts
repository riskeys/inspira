import { contentBaseView } from "../component/content.base.ts";
import { dashboardHomeView } from "../component/dashboard.home.view.ts";
import { headerView } from "../component/header.base.ts";
import { sidebarView } from "../component/sidebar.base.ts";
import { baseLayout } from "../layout/base.ts";

export const homePage = async (username: string) => {
  const header = headerView();
  const sidebar = sidebarView();
  const dashboard = dashboardHomeView(username);
  const content = contentBaseView(header, sidebar, dashboard);

  return await baseLayout(content);
};
