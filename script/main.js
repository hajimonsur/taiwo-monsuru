const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

// Load saved mode on page load
const savedMode = localStorage.getItem("mode");
if (savedMode) {
  body.classList.add(savedMode);
  toggleBtn.textContent = savedMode === "dark-mode" ? "☀️" : "🌙";
} else {
  body.classList.add("light-mode"); // default mode
}

// Toggle mode and save it
toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("mode", "light-mode");
    toggleBtn.textContent = "🌙";
  } else {
    body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("mode", "dark-mode");
    toggleBtn.textContent = "☀️";
  }
});
