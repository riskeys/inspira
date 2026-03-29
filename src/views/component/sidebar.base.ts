import { SidebarModel } from "../../apps/models/rendering.model.ts";
import { html, render } from "../../lib/htm.js";

export const sidebarView = (param?: SidebarModel) => {
  const homeMenu = getHomeMenu();
  const userManagementMenu = getUserManagementMenu(param?.userManagement);

  const view = html`
    <div id="sidebar" hx-swap-oob="outerHTML">
      <div class="sidebar-section">
        ${homeMenu} ${userManagementMenu}
        <div
          class="sidebar-item"
          hx-get="/user"
          hx-target="#content"
          hx-swap="innerHTML"
          hx-push-url="true"
        >
          <div class="sidebar-item-parent">
            <img
              style="border-radius: 24px; height: 24px; width: 24px;"
              src="/assets/user-icon.png"
              alt="user"
            />
            <span id="si-hola">Transaction</span>
          </div>
          <div class="sidebar-children">
            <div class="sidebar-child">Child 1</div>
            <div class="sidebar-child">Child 2</div>
          </div>
        </div>
      </div>
      <div id="sidebar-profile">
        <div id="sidebar-profile-head" class="sidebar-item-parent">
          <img
            style="border-radius: 24px; height: 24px; width: 24px;"
            src="/assets/user-icon.png"
            alt="user"
          />
          <span>Your name here</span>
        </div>
        <div id="sidebar-profile-items">
          <div class="sidebar-profile-item">Settings</div>
          <div class="sidebar-profile-item">Edit profile</div>
        </div>
      </div>
    </div>
  `;

  return render(view);
};

const getUserManagementMenu = (menu?: string) => {
  return menu || render(html`
    <div
      class="sidebar-item"
      id="sidebar-user-mgmt"
      hx-swap-oob="outerHTML"
    >
      <div
        class="sidebar-item-parent"
        hx-get="/user-mgmt/user/parent"
      >
        <img
          style="border-radius: 24px; height: 24px; width: 24px;"
          src="/assets/user-icon.png"
          alt="user"
        />
        <span id="si-user-mgmt">User Management</span>
      </div>
      <div class="sidebar-children">
        <div
          class="sidebar-child"
          hx-get="/user-mgmt/user"
          hx-target="#content"
          hx-swap="innerHTML"
          hx-push-url="true"
        >
          <span>User</span>
        </div>
        <div class="sidebar-child">
          <div
            hx-get="/user-mgmt/role"
            hx-target="#content"
            hx-swap="innerHTML"
            hx-push-url="true"
          >
            <span>Role</span>
          </div>
        </div>
      </div>
    </div>
  `);
};

const getHomeMenu = () => {
  return render(html`
    <div
      class="sidebar-item"
      hx-get="/"
      hx-target="#content"
      hx-swap="innerHTML"
      hx-push-url="true"
    >
      <div class="sidebar-item-parent">
        <img
          style="border-radius: 24px; height: 24px; width: 24px;"
          src="/assets/user-icon.png"
          alt="user"
        />
        <span id="si-home">Home</span>
      </div>
    </div>
  `);
};
