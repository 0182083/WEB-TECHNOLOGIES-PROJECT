document.getElementById("ticketForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const orderId = document.getElementById("orderId").value.trim();
  const allergy = document.getElementById("allergyWarning").value.trim().toUpperCase();
  const managerCode = document.getElementById("managerApproval").value.trim();
  const validationMessage = document.getElementById("validationMessage");
 
  if (!orderId.match(/^\d{2}-\d{5}-\d$/)) {
    validationMessage.textContent = "Order ID must follow format: 22-96676-1";
    return;
  }
 
  if (allergy.includes("NUT")) {
    validationMessage.textContent = "Warning: Allergy contains NUT!";
    validationMessage.style.color = "red";
    return;
  }
 
  if (managerCode !== "" && managerCode.length < 4) {
    validationMessage.textContent = "Manager code must be at least 4 characters.";
    return;
  }
 
  validationMessage.style.color = "green";
  validationMessage.textContent = "Ticket submitted successfully!";
});
 