const orders = [
    { id: 'A101', station: 'Appetizer', status: 'Fired', time: Date.now() },
    { id: 'B202', station: 'Main', status: 'Fired', time: Date.now() - 180000 },
    { id: 'C303', station: 'Main', status: 'In Progress', time: Date.now() - 360000 }
  ];
  
  function renderOrders() {
    const table = document.getElementById('orderTable');
    table.innerHTML = '';
  
    orders.forEach((order, index) => {
      const now = Date.now();
      const ageMs = now - order.time;
      const ageMin = Math.floor(ageMs / 60000);
      
      let rowClass = '';
      if (ageMin >= 5) rowClass = 'red';
      else if (ageMin >= 3) rowClass = 'yellow';
  
      const row = document.createElement('tr');
      row.className = rowClass;
  
      row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.station}</td>
        <td>${order.status}</td>
        <td>${ageMin} min</td>
        <td><button onclick="updateStatus(${index})">Next Status</button></td>
      `;
  
      table.appendChild(row);
    });
  }
  
  function updateStatus(index) {
    const order = orders[index];
    if (order.status === 'Fired') {
      order.status = 'In Progress';
    } else if (order.status === 'In Progress') {
      order.status = 'Ready';
    }
    renderOrders();
  }
  
  // Auto refresh every 30 seconds
  renderOrders();
  setInterval(renderOrders, 30000);
  