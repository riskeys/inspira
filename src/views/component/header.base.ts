import { html, render } from "../../lib/htm.js";

export const headerView = () => {
  const view = html`
    <div id="header">
      <div>
        <span
          style="cursor: pointer"
          id="header-logo"
          hx-get="/"
          hx-target="#content"
          hx-push-url="true"
        >
          Logo
        </span>
      </div>
      <div>
        <div id="header-profile">
          <div>
            <img
              style="border-radius: 24px; height: 24px; width: 24px;"
              src="/assets/user-icon.png"
              alt="user"
            />
          </div>
          <div>Name Name Name</div>
        </div>
      </div>
    </div>
  `;

  return render(view);
};
