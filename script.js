// Elements
const customerBtn = document.getElementById("customerBtn");
const providerBtn = document.getElementById("providerBtn");
const adminBtn = document.getElementById("adminBtn");
const customerModal = document.getElementById("customerModal");
const closeBtns = document.querySelectorAll(".close");

// Tabs
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Navbar buttons
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

// Open modal for Customer (default: Signup tab)
customerBtn.onclick = () => {
  customerModal.style.display = "block";
  showSignup();
};
adminBtn.onclick = () => {
  customerModal.style.display = "block";
  showSignup();
};

// Open modal for Service Provider (default: Login tab)
providerBtn.onclick = () => {
  customerModal.style.display = "block";
  showLogin();
};

// // Navbar Login
// loginBtn.onclick = () => {
//   customerModal.style.display = "block";
//   showLogin();
// };

// // Navbar Signup
// signupBtn.onclick = () => {
//   customerModal.style.display = "block";
//   showSignup();
// };

// Close modal
closeBtns.forEach(btn => {
  btn.onclick = () => {
    customerModal.style.display = "none";
  };
});

// Close if clicked outside modal
window.onclick = (event) => {
  if (event.target === customerModal) {
    customerModal.style.display = "none";
  }
};

// Functions to switch tabs
function showLogin() {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
}

function showSignup() {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
}

// Tab switching
loginTab.onclick = showLogin;
signupTab.onclick = showSignup;







