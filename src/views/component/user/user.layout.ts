import { html, render } from "../../../lib/htm.js";

export const UserLayout = (
  req: { component: string; title: string; subtitle?: string },
) => {
  const layout = html`
    <div id="user-container">
      <div class="title-section">
        <div class="title">${req.title}</div>
        <div class="subtitle">${req.subtitle ?? ""}</div>
      </div>
      ${req.component}
    </div>
  `;

  return render(layout);
};
