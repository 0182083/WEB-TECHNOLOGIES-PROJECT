function splitBill() {
    const billTotal = parseFloat(document.getElementById("billTotal").value);
    const seats = parseInt(document.getElementById("seats").value);
  
    if (isNaN(billTotal) || isNaN(seats) || seats < 1) {
      alert("Please enter valid total and seat count.");
      return;
    }
  
    const amountPerSeat = billTotal / seats;
    document.getElementById("amountPerSeat").innerText = amountPerSeat.toFixed(2);
    document.getElementById("splitResults").classList.remove("hidden");
  
    // Create payment method options for each seat
    const paymentDiv = document.getElementById("paymentMethods");
    paymentDiv.innerHTML = '';
    for (let i = 1; i <= seats; i++) {
      paymentDiv.innerHTML += `
        <p>Seat ${i}: 
          <select>
            <option value="Card">Card</option>
            <option value="NFC">NFC</option>
            <option value="Cash">Cash</option>
          </select>
        </p>
      `;
    }
  }
  
  function processPayment() {
    const tipPercent = parseInt(document.getElementById("tipSelect").value);
    const billTotal = parseFloat(document.getElementById("billTotal").value);
    const seats = parseInt(document.getElementById("seats").value);
    const amountPerSeat = billTotal / seats;
    const tipTotal = (billTotal * tipPercent) / 100;
    const grandTotal = billTotal + tipTotal;
    const tipPerSeat = tipTotal / seats;
  
    const methodSelects = document.querySelectorAll("#paymentMethods select");
    let receipt = `--- Payment Receipt ---\nTotal: $${billTotal.toFixed(2)}\nTip: ${tipPercent}% ($${tipTotal.toFixed(2)})\nGrand Total: $${grandTotal.toFixed(2)}\n\nSplit By Seat:\n`;
  
    methodSelects.forEach((select, i) => {
      receipt += `Seat ${i + 1}: $${(amountPerSeat + tipPerSeat).toFixed(2)} paid via ${select.value}\n`;
    });
  
    receipt += "\nPayment Successful via NFC 💳";
    document.getElementById("receiptContent").innerText = receipt;
    document.getElementById("receipt").classList.remove("hidden");
  }
  
  function downloadReceipt() {
    const content = document.getElementById("receiptContent").innerText;
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "receipt.txt";
    link.click();
  }
  