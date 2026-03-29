import { html, render } from "../../../lib/htm.js";

export const UserLayout = (req: { component: string; title: string }) => {
  const layout = html`
    <div id="user-container">
      <h3>${req.title}</h3>
      ${req.component}
    </div>
  `;

  return render(layout);
};
