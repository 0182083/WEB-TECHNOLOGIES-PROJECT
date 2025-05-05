const toggleBtn = document.getElementById("toggle-form");
const forgotBtn = document.getElementById("forgot-password");
const backBtn = document.getElementById("back-to-login");
const formTitle = document.getElementById("form-title");
const nameField = document.getElementById("name-field");
const authForm = document.getElementById("auth-form");
const resetForm = document.getElementById("reset-form");
const submitBtn = document.getElementById("submit-btn");
 
let isLogin = true;
 
toggleBtn.onclick = () => {
  isLogin = !isLogin;
  formTitle.innerText = isLogin ? "Login" : "Signup";
  submitBtn.innerText = isLogin ? "Login" : "Signup";
  toggleBtn.innerText = isLogin ? "Don't have an account? Signup" : "Already have an account? Login";
  nameField.classList.toggle("hidden");
};
 
forgotBtn.onclick = () => {
  authForm.classList.add("hidden");
  resetForm.classList.remove("hidden");
};
 
backBtn.onclick = () => {
  resetForm.classList.add("hidden");
  authForm.classList.remove("hidden");
};
 