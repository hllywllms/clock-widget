const root = document.documentElement;
const time = document.querySelector("#time");
const toggle = document.querySelector(".Mode");
const hour24 = document.querySelector(".Hour24");
const hour12 = document.querySelector(".Hour12");
const spans = document.querySelectorAll("span");
toggle.addEventListener("click", () => {
  if (toggle.value === "Light") {
    toggle.value = "Dark";
    root.style.setProperty("--txt-clr", "#ffffff");
    root.style.setProperty("--back-clr", "#202020");

  } else {
    toggle.value = "Light";
    root.style.setProperty("--txt-clr", "#ffffff");
    root.style.setProperty("--back-clr", "#e5e5e5");
  }
});
hour12.addEventListener("click", () => {
  hour24.style.setProperty("color", "var(--txt-clr)");
});
hour24.addEventListener("click", () => {
  hour12.style.setProperty("color", "var(--txt-clr)");
});
function first() {
  const format = time.getAttribute("data-format");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeStatus = hours >= 12 ? "PM" : "AM";
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (format === "12") {
    if (hours > 12) {
      hours = hours - 12;
    }
    time.textContent = `${hours}:${minutes}:${seconds} ${timeStatus}`;
  } else {
    time.textContent = `${hours}:${minutes}:${seconds}`;
  }

  setTimeout(first, 1000);
}
first();

spans.forEach((span) => {
  span.addEventListener("click", () => {
    const format = span.getAttribute("data-format");
    time.setAttribute("data-format", format);
    first();
  });
});
