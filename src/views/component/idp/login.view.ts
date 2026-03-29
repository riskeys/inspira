import { html, render } from "../../../lib/htm.js";

export const loginView = () => {
  const view = html`
    <div class="flex flex-col items-center" id="login">
      <h1>Login</h1>
      <form
        id="login-form"
        hx-post="/api/v0/idp/login"
        hx-target="#login-result"
        hx-swap="innerHTML"
        hx-on:htmx:beforeRequest="this.querySelector('button').disabled=true"
        hx-on:htmx:afterRequest="this.querySelector('button').disabled=false"
      >
        <div>
          <label for="email">Email</label>
          <input
            name="email"
            type="email"
            hx-on:keydown="document.querySelector('#login-result').innerHTML=''"
            required
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            name="password"
            type="password"
            hx-on:keydown="document.querySelector('#login-result').innerHTML=''"
            required
          />
        </div>
        <div id="login-result"></div>
        <button>
          <span class="htmx-hide">Login</span>

          <img
            class="htmx-indicator"
            width="20px"
            height="20px"
            src="/assets/oval.svg"
            alt="loading..."
          />
        </button>
      </form>
    </div>
  `;

  return render(view);
};
