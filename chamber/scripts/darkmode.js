const button = document.querySelector("#mode");

button.addEventListener("click", function() {
  document.querySelector("html").classList.toggle("dark-mode");
  if (button.textContent.includes("🌘")) {
    button.textContent = "☀️";
  } else {
    button.textContent = "🌘";
  }
});