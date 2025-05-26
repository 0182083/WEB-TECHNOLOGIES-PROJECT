// Get logged-in user
const loggedInUser = localStorage.getItem('loggedInUser');

if (loggedInUser) {
  const user = JSON.parse(localStorage.getItem(loggedInUser));

  // Set username
  document.getElementById('username').textContent = user.name || 'User';
} else {
  window.location.href = '../Login/login.html';  // Redirect to login if not logged in
}


// Get the context of the canvas element we want to select
var ctx = document.getElementById('salesChart').getContext('2d');

// Example data for sales analytics (can be dynamic based on real data)
var salesData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Days of the week
  datasets: [{
    label: 'Sales in $',
    data: [500, 600, 700, 800, 900, 1000, 1100], // Sample sales data (replace with actual data)
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  }]
};

// Create the chart
var salesChart = new Chart(ctx, {
  type: 'line', // Line chart type (you can also use 'bar', 'pie', etc.)
  data: salesData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

