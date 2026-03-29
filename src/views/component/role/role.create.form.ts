import { html } from "../../../lib/htm.js";

export const RoleCreateForm = () => {
  // hx-target="#content"
  // hx-swap="innerHTML"
  return html`
    <div id="role-create-form">
      <form
        hx-ext="response-targets"
        hx-post="/user-mgmt/role/create"
        hx-target="#content"
        hx-target-error="#form-role-error"
        hx-swap="innerHTML"
      >
        <div id="form-role">
          <div>
            <label for="name">
              Name
            </label>
            <input
              type="text"
              name="name"
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
            />
          </div>
          <div id="form-role-error"></div>
        </div>
        <div id="form-role-button">
          <button
            type="submit"
            class="btn-primary"
          >
            Submit
          </button>
          <button
            type="button"
            class="btn-cancel"
            hx-get="/user-mgmt/role"
            hx-target="#content"
            hx-push-url="true"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  `;
};
