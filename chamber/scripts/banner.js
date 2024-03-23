const banner = document.getElementById("banner");
const closeBtn = document.getElementById("bannerclose");

closeBtn.addEventListener("click", () => {
  banner.style.display = "none";
});

// Check if today is a Monday, Wednesday, or Friday
const today = new Date();
const day = today.getDay();


if (day === 1 || day === 2 || day === 3) {
  banner.style.display = "block";
}