const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
