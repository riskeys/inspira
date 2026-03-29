import { RoleViewModel } from "../../../domain/models/role/role.view.model.ts";
import { html, render } from "../../../lib/htm.js";

export const RoleListing = (roles: RoleViewModel[]) => {
  const items = roles.map((role) =>
    render(
      html`
        <tr
          hx-get="/user-mgmt/role/detail/${role.id}"
          hx-target="#user-container"
          hx-push-url="true"
        >
          <td>${role.index.toString()}</td>
          <td>${role.name}</td>
          <td>${role.description}</td>
        </tr>
      `,
    )
  );
  const view = html`
    <div id="role-listing">
      <button
        hx-get="/user-mgmt/role/create"
        hx-target="#content"
        hx-swap="innerHTML"
        hx-push-url="true"
        class="btn-primary"
      >
        Add role
      </button>
      <table class="role-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Role name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          ${items.join("")}
        </tbody>
      </table>
    </div>
  `;

  return render(view);
};

export const RoleListingSidebarActive = (
  req: { userIsActive?: boolean; roleIsActive?: boolean },
) => {
  const sidebaroob = html`
    <div
      class="sidebar-item active"
      id="sidebar-user-mgmt"
      hx-swap-oob="outerHTML"
    >
      <div class="sidebar-item-parent">
        <img
          style="border-radius: 24px; height: 24px; width: 24px;"
          src="/assets/user-icon.png"
          alt="user"
        />
        <span id="si-user-mgmt">User Management</span>
      </div>
      <div class="sidebar-children">
        <div
          class="sidebar-child ${req.userIsActive ? "active" : ""}"
          hx-get="/user-mgmt/user"
          hx-target="#content"
          hx-swap="innerHTML"
          hx-push-url="true"
        >
          <span>User</span>
        </div>
        <div
          class="sidebar-child ${req.roleIsActive ? "active" : ""}"
          hx-get="/user-mgmt/role"
          hx-target="#content"
          hx-swap="innerHTML"
          hx-push-url="true"
        >
          <span>Role</span>
        </div>
      </div>
    </div>
  `;
  return render(sidebaroob);
};
