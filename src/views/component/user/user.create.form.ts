import { html, render } from "../../../lib/htm.js";

export const UserCreateForm = (roles: {
  name: string;
  text: string;
  value: string;
}[]) => {
  const rolesPart = getRolePart(roles);

  return html`
    <div id="user-create-form">
      <form
        hx-post="/user-mgmt/user/create"
        hx-target="#user-container"
        hx-swap="innerHTML"
      >
        <div id="form-user">
          <fieldset>
            <legend>User profile</legend>
            <div>
              <label for="name">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
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
                required
              />
            </div>
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                required
              />
            </div>
            <div>
              <label>Designation</label>
              <input
                type="text"
                name="designation"
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
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
          style="padding: 0.5rem 1rem; border-radius: 4px; background: #007bff; color: #fff; border: none;"
        >
          Submit
        </button>
      </form>
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
