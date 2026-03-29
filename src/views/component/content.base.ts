import { html, render } from "../../lib/htm.js";

export const contentBaseView = (
  header: string,
  sidebar: string,
  mainContent: string,
) => {
  // const sbr = sidebar;
  // ${header}
  const view = html`
    <div id="container">
      <div id="main">
        <div id="sbr">
          ${sidebar}
        </div>
        <div id="content">
          ${mainContent}
        </div>
      </div>
    </div>
  `;

  return render(view);
};

export const contentBaseView2 = (req: {
  navbar: string;
  content: string;
}) => {
  return `${req.navbar} ${req.content}`;
};
