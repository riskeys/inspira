import { html, render } from "../../lib/htm.js";

export const dashboardHomeView = (username: string) => {
  const view = html`
    <div id="dashboard">
      <div>
        <h2>Hello, ${username}!</h2>
        <h3>
          What are you working on today?
          <span
            hx-get="/toast"
            hx-swap="none"
            style="cursor: pointer;"
          >Test toast here</span>
        </h3>
      </div>
      <div id="content-cards">
        <div class="card graph">
          <canvas id="myChart">brik</canvas>
        </div>
        <div class="half">
          <div class="card">
            alskdjasd alksdasldkj
          </div>
          <div class="card">
            alskdjasd alksdasldkj
          </div>
        </div>
      </div>
      <script src="/js/chart/chart.umd.min.js"></script>
      <script>
      const ctx = document.getElementById('myChart');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Sales',
            data: [10, 20, 15, 25, 18],
            borderWidth: 2,
            tension: 0.3, // smooth curve
            pointRadius: 5, // visible points
            pointHoverRadius: 8 // bigger on hover
          }]
        },
        options: {
          responsive: true,

          interaction: {
            mode: 'nearest',
            intersect: true
          },

          plugins: {
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(0,0,0,0.7)',
              callbacks: {
                label: function(context) {
                  return 'Sales: ' + context.raw;
                }
              }
            },
            legend: {
              display: true
            }
          },

          hover: {
            mode: 'nearest',
            intersect: true
          },

          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      </script>
      <!-- <div class="cards"> -->
      <!-- hx-get="/dashboard/transactions" -->
      <!-- hx-trigger="load" -->
      <!-- hx-swap="innerHTML" -->
      <!--   <div class="card menu">Card 1</div> -->
      <!--   <div class="card menu">Card 2</div> -->
      <!--   <div class="card menu">Card 3</div> -->
      <!--   <div class="card menu">Card 4</div> -->
      <!--   <div class="card menu">Card 5</div> -->
      <!--   <div class="card menu">Card 6</div> -->
      <!--   <div class="card menu">Card 7</div> -->
      <!-- </div> -->
    </div>
  `;

  return render(view);
};
