const MouseEvent = document.documentElement;

MouseEvent.addEventListener("mousemove", (e) => {
  MouseEvent.style.setProperty("--x", e.clientX + "px");
  MouseEvent.style.setProperty("--y", e.clientY + "px");
});
