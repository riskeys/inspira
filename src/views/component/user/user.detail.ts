import { UserViewModel } from "../../../domain/models/user/user.view.model.ts";
import { html, render } from "../../../lib/htm.js";

export const UserDetailComp = (user: UserViewModel, roles: {
  name: string;
  text: string;
  value: string;
}[]) => {
  const rolesPart = getRolePart(roles);

  return html`
    <div id="user-create-form">
      <div id="form-user">
        <fieldset>
          <legend>User profile</legend>
          <div>
            <label for="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value="${user.fullname}"
              required
            />
          </div>
          <div>
            <label>
              Email
            </label>
            <input
              type="email"
              name="email"
              value="${user.email}"
              required
            />
          </div>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value="${user.username}"
              required
            />
          </div>
        </fieldset>
      </div>
      <div id="form-user-role">
        <fieldset>
          <legend>Roles</legend>
          <div id="form-user-role-content">
            ${rolesPart}
          </div>
        </fieldset>
      </div>
      <button
        type="submit"
        style="padding: 0.5rem 1rem; border-radius: 4px; background: red; color: #fff; border: none;"
        hx-confirm="Are you sure?"
        hx-delete="/user-mgmt/user/delete?id=${user.id}"
        hx-target="#content"
        hx-target-error="#toast"
      >
        Delete
      </button>

      <script>
      document.addEventListener('confirmed', function(e) {
        // Manually trigger the HTMX request
      console.log("aduh");
        htmx.trigger(e.target, 'click');
      });
      </script>
    </div>
  `;
};

export const UserDetailCompReadonly = (user: UserViewModel, roles: {
  name: string;
  text: string;
  value: string;
}[]) => {
  const rolesPart = getRolePart(roles);

  return html`
    <div id="user-create-form">
      <div id="form-user">
        <fieldset>
          <legend>User profile</legend>
          <div>
            <label for="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value="${user.fullname}"
              disabled
            />
          </div>
          <div>
            <label>
              Email
            </label>
            <input
              type="email"
              name="email"
              value="${user.email}"
              disabled
            />
          </div>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value="${user.username}"
              disabled
            />
          </div>
        </fieldset>
      </div>
      <div id="form-user-role">
        <fieldset>
          <legend>Roles</legend>
          <div id="form-user-role-content">
            ${rolesPart}
          </div>
        </fieldset>
      </div>
    </div>
  `;
};

const getRolePart = (roles: {
  name: string;
  text: string;
  value: string;
}[]) => {
  const rowLength = 3;
  const colLength = Math.ceil(roles.length / rowLength);

  let roleColumn = "";

  for (let i = 0; i < colLength; i++) {
    const rolePartition = roles.splice(0, Math.min(roles.length, rowLength));
    const roleItems = rolePartition.map((role) => {
      return render(html`
        <div class="role-item">
          <input
            type="checkbox"
            name="roles"
            id="${role.name}"
            value="${role.value}"
          />
          <label for="${role.name}">${role.text}</label>
        </div>
      `);
    });

    roleColumn += render(html`
      <div class="role-column">
        ${roleItems.join("")}
      </div>
    `);
  }

  return roleColumn;
};

export const userListingSidebarActive = (
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
        <div class="sidebar-child ${req.roleIsActive ? "active" : ""}">
          <span>Role</span>
        </div>
      </div>
    </div>
  `;
  return render(sidebaroob);
};
