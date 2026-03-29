import { UserViewModel } from "../../../domain/models/user/user.view.model.ts";
import { html, render } from "../../../lib/htm.js";

export const userListing = (users: UserViewModel[]) => {
  const items = users.map((user) =>
    render(
      html`
        <tr
          hx-get="/user-mgmt/user/detail/${user.email}"
          hx-target="#user-container"
          hx-push-url="true"
        >
          <td>${user.index.toString()}</td>
          <td>${user.fullname}</td>
          <td>${user.email}</td>
          <td>${user.designation ?? "-"}</td>
          <td>${user.status}</td>
          <td>${user.createdAt.toLocaleString()}</td>
          <td>${user.createdBy}</td>
        </tr>
      `,
    )
  );
  const view = html`
    <div id="user-listing">
      <button
        class="btn-primary"
        hx-get="/user-mgmt/user/create-form"
        hx-target="#content"
        hx-swap="innerHTML"
        hx-push-url="true"
      >
        Create user
      </button>
      <table class="user-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Created By</th>
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
