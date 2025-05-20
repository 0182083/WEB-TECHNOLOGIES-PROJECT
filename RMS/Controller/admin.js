function showPanel(panelId) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
 
  document.getElementById(panelId).classList.add('active');
 
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => {
    if (button.getAttribute('onclick').includes(panelId)) {
      button.classList.add('active');
    }
  });
}
 
function toggleAll(source) {
  const checkboxes = document.querySelectorAll('#userTable input[type="checkbox"]');
  checkboxes.forEach(checkbox => checkbox.checked = source.checked);
}
 
function filterRecords(query) {
  const rows = document.querySelectorAll('#userTable tr');
  rows.forEach(row => {
    const match = row.innerText.toLowerCase().includes(query.toLowerCase());
    row.style.display = match ? '' : 'none';
  });
}
 