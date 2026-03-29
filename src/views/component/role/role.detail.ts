import { RoleViewModel } from "../../../domain/models/role/role.view.model.ts";
import { html, render } from "../../../lib/htm.js";

export const RoleDetailForm = (role: RoleViewModel) => {
  return html`
    <div id="role-create-form">
      <div id="form-role">
        <div>
          <label for="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value="${role.name}"
            required
          />
        </div>
        <div>
          <label for="description">
            Description
          </label>
          <textarea
            rows="5"
            type="textarea"
            name="description"
            required
          >
            ${role.description}
          </textarea>
        </div>
      </div>
    </div>
  `;
};

export const RoleDetailSidebarActive = (
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
