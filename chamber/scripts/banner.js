const banner = document.getElementById("banner");
const closeBtn = document.getElementById("bannerclose");

closeBtn.addEventListener("click", () => {
  banner.style.display = "none";
});

// Check if today is a Monday, Wednesday, or Friday
const today = new Date();
const day = today.getDay();
const isMonday = day === 1;
const isWednesday = day === 3;
const isFriday = day === 5;

if (isMonday || isWednesday || isFriday) {
  banner.style.display = "block";
}