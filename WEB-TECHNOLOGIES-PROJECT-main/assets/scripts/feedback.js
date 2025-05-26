let selectedRating = 0;
const feedbackList = [];

document.getElementById("starContainer").addEventListener("click", function (e) {
  const rect = this.getBoundingClientRect();
  const width = e.clientX - rect.left;
  const starWidth = rect.width / 5;
  selectedRating = Math.ceil(width / starWidth);

  this.innerHTML = "★★★★★".split("")
    .map((star, i) => `<span style="color:${i < selectedRating ? 'gold' : '#ccc'};">${star}</span>`)
    .join("");
});

function submitFeedback() {
  const comment = document.getElementById("comment").value;
  if (selectedRating === 0 || comment.trim() === "") {
    alert("Please provide both a rating and a comment.");
    return;
  }

  feedbackList.push({
    rating: selectedRating,
    comment,
    response: ""
  });

  document.getElementById("comment").value = "";
  selectedRating = 0;
  document.getElementById("starContainer").innerHTML = "★★★★★";

  renderFeedback();
}

function renderFeedback() {
  const container = document.getElementById("feedbackList");
  container.innerHTML = "";

  feedbackList.forEach((fb, index) => {
    const item = document.createElement("div");
    item.className = "feedback-item";

    item.innerHTML = `
      <p><strong>Rating:</strong> ${"★".repeat(fb.rating)}${"☆".repeat(5 - fb.rating)}</p>
      <p><strong>Comment:</strong> ${fb.comment}</p>
      <div class="manager-response">
        <strong>Manager Response:</strong>
        ${fb.response ? fb.response : `<input type="text" id="response-${index}" placeholder="Write response..." />
        <button onclick="respond(${index})">Reply</button>`}
      </div>
    `;

    container.appendChild(item);
  });
}

function respond(index) {
  const responseInput = document.getElementById(`response-${index}`);
  const response = responseInput.value;
  if (!response.trim()) return;

  feedbackList[index].response = response;
  renderFeedback();
}
