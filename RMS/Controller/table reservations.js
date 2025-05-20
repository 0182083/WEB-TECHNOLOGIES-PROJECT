document.getElementById('reservationForm').addEventListener('submit', function(event) {
  event.preventDefault();
 
  const name = document.getElementById('name').value;
  const timeslot = document.getElementById('timeslot').value;
  const requests = document.getElementById('requests').value;
 
  alert(`Reservation Confirmed for ${name} at ${timeslot}.\nSpecial Requests: ${requests}`);
  
  // You could add real QR code or SMS sending logic here using APIs
});
 