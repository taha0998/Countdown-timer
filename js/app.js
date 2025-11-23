const fill = document.querySelector(".fill");
const timeLeftText = document.querySelector("#time-left");
const startCount = 24;
let timeLeft = startCount;

timeLeftText.innerText = timeLeft;
const timerId = setInterval(() => {
  timeLeft--;
  timeLeftText.innerText = timeLeft;
  fill.style.width = (timeLeft * 100) / startCount + "%";
  if (timeLeft <= 0) {
    clearInterval(timerId);
    timeLeftText.innerText = "Fin!";
    suprise();
  }
}, 1000);

function suprise() {
  const colors = [
    "rgb(255,105,97,0.5)",
    "rgb(97,168,255,0.5)",
    "rgb(247,255,97,0.5)",
    "rgb(97,255,184,0.5)",
    "rgb(255,255,255,0.5)",
  ];
  for (i = 0; i < 500; i++) {
    setTimeout(() => {
      const circleElement = document.createElement("div");
      circleElement.classList.add("circle");
      circleElement.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      circleElement.style.top = Math.floor(Math.random() * 97) + "%";
      circleElement.style.left = Math.floor(Math.random() * 97) + "%";
      document.body.append(circleElement);
    }, i * 5);
  }
}
