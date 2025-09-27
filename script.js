// Get elements
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

// Show modal
loginBtn.onclick = () => {
  loginModal.style.display = "block";
};

// Close modal
closeBtn.onclick = () => {
  loginModal.style.display = "none";
};

// Close when clicking outside modal
window.onclick = (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
};
