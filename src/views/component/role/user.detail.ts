import { UserViewModel } from "../../../domain/models/user/user.view.model.ts";
import { html, render } from "../../../lib/htm.js";

export const UserDetailComp = (user: UserViewModel) => {
  const view = html`
    <div id="user-detail">
      <div id="user-gi">
        <h2>General Info</h2>
        <div class="row">
          <label>Name</label>
          <input type="text" value="${user.username}" readonly />
        </div>
        <div class="row">
          <label>Email</label>
          <input type="email" value="${user.email}" readonly />
        </div>
      </div>
      <hr />
      <div id="user-ra">
        <h2>Role and access</h2>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
          </tbody>
        </table>
      </div>
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
        <div class="sidebar-child ${req.roleIsActive ? "active" : ""}">
          <span>Role</span>
        </div>
      </div>
    </div>
  `;
  return render(sidebaroob);
};
