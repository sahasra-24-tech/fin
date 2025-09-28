// Get elements
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const closeBtns = document.querySelectorAll(".close");

// Show login modal
loginBtn.onclick = () => {
  loginModal.style.display = "block";
};

// Show signup modal
signupBtn.onclick = () => {
  signupModal.style.display = "block";
};

// Close modals when clicking X
closeBtns.forEach(btn => {
  btn.onclick = () => {
    loginModal.style.display = "none";
    signupModal.style.display = "none";
  };
});

// Close when clicking outside modal
window.onclick = (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target === signupModal) {
    signupModal.style.display = "none";
  }
};






