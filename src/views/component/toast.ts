import { html, render } from "../../lib/htm.js";

type ToastLevel = "warning" | "success" | "neutral" | "confirm";

export const ToastComp = (level: ToastLevel, msg: string) => {
  const view = html`
    <output
      id="toast"
      class="show ${level}"
      hx-swap-oob="true"
      hx-trigger="load delay:4s"
      hx-swap="outerHTML"
      hx-target="#toast"
      hx-get="/empty?level=${level}&msg=${msg}"
    >
      <div>[${level}] ${msg}</div>
    </div>
  `;

  return render(view);
};

export const ToastConfirmComp = (level: ToastLevel, msg: string) => {
  const view = html`
    <output
      id="toast"
      class="show ${level}"
      hx-swap-oob="true"
      hx-swap="outerHTML"
      hx-target="#toast"
      hx-get="/empty?level=${level}&msg=${msg}"
    >
      <div>${msg}</div>
      <div id="toast-confirm-btns">
        <div>
          <button id="toast-confirm-yes">Yes</button>
        </div>
        <div>
          <button
            hx-get="/empty?level=${level}&msg=${msg}"
          >No</button>
        </div>
      </div>
    </div>
  `;

  return render(view);
};


export const ToastEmptyComp = (level: ToastLevel, msg: string) => {
  const view = html`
    <output
      id="toast"
      class="inactive"
    >
      <div>[${level}] ${msg}</div>
    </div>
  `;

  return render(view);
};
