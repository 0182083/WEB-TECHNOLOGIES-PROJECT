const chartContext = document.getElementById("salesChart").getContext("2d");
let salesChart;

const reports = {
  daily: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [500, 750, 620, 850, 900, 1200, 1100]
  },
  weekly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    data: [4200, 5100, 4700, 5300]
  },
  item: {
    labels: ["Burger", "Pasta", "Pizza", "Salad", "Sushi"],
    data: [120, 90, 150, 80, 100]
  },
  server: {
    labels: ["Alice", "Bob", "Carlos", "Dina"],
    data: [1800, 2200, 2000, 2500]
  },
  labor: {
    labels: ["Wages", "Overtime", "Training", "Benefits"],
    data: [2000, 300, 150, 500]
  }
};

function renderReport() {
  const type = document.getElementById("reportType").value;
  const report = reports[type];

  if (salesChart) salesChart.destroy();

  salesChart = new Chart(chartContext, {
    type: "bar",
    data: {
      labels: report.labels,
      datasets: [{
        label: "Amount ($)",
        data: report.data,
        backgroundColor: "rgba(0, 123, 255, 0.6)"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: `Sales Report - ${type.charAt(0).toUpperCase() + type.slice(1)}`
        }
      }
    }
  });
}

function exportData() {
  const type = document.getElementById("reportType").value;
  const report = reports[type];

  let csv = "Label,Amount\n";
  report.labels.forEach((label, i) => {
    csv += `${label},${report.data[i]}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${type}-sales-report.csv`;
  link.click();
}

// Initial load
renderReport();
