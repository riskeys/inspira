import { loginView } from "../component/idp/login.view.ts";
import { baseLayout } from "../layout/base.ts";

export const loginPageView = async () => {
  const loginComponent = loginView();

  return await baseLayout(loginComponent);
};
