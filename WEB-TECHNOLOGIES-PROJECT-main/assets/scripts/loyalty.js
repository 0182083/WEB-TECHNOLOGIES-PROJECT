let totalPoints = 0;

function addPoints() {
  const name = document.getElementById("customerName").value;
  const dob = document.getElementById("dob").value;
  const amount = parseFloat(document.getElementById("purchaseAmount").value);
  const today = new Date().toISOString().slice(5, 10);
  const birthDate = dob.slice(5, 10);

  if (!name || !dob || isNaN(amount)) {
    alert("Please fill in all fields.");
    return;
  }

  // Add points
  const pointsEarned = Math.floor(amount); // 1 point per dollar
  totalPoints += pointsEarned;

  // Update UI
  document.getElementById("trackerName").innerText = name;
  document.getElementById("totalPoints").innerText = totalPoints;
  document.getElementById("purchaseAmount").value = "";

  // Birthday bonus
  if (today === birthDate) {
    totalPoints += 20;
    document.getElementById("birthdayReward").innerText = "🎉 Birthday Bonus: +20 Points!";
    document.getElementById("totalPoints").innerText = totalPoints;
  } else {
    document.getElementById("birthdayReward").innerText = "";
  }

  // Staff suggestion (console log for simulation)
  console.log("Staff: Recommend redeeming a reward if eligible.");
}

function redeem(cost) {
  if (totalPoints >= cost) {
    totalPoints -= cost;
    document.getElementById("totalPoints").innerText = totalPoints;
    alert(`Reward redeemed! You used ${cost} points.`);
  } else {
    alert("Not enough points to redeem this reward.");
  }
}
