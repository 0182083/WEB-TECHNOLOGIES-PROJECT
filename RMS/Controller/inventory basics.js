document.getElementById("inventoryForm").addEventListener("submit", function(e) {
  e.preventDefault();
 
  const ingredient = document.getElementById("ingredient").value.trim();
  const quantity = parseInt(document.getElementById("quantity").value);
  const parLevel = parseInt(document.getElementById("parLevel").value);
  const message = document.getElementById("message");
 
  if (ingredient === "" || isNaN(quantity) || isNaN(parLevel)) {
message.style.color = "red";
    message.textContent = "Please fill all fields correctly.";
    return;
  }
 
  if (quantity < parLevel) {
message.style.color = "orange";
    message.textContent = `${ingredient} stock below par!`;
  } else {
message.style.color = "green";
    message.textContent = `${ingredient} stock is sufficient.`;
  }
});