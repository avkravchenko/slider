document.addEventListener("DOMContentLoaded", () => {
  let active, leftArrow, rightArrow;
  const slidesArray = Array.from(document.querySelectorAll(".slide"));
  let next = 2;
  let prev = 0;

  function toggleActive(elemToRemove, elemToAdd) {
    elemToRemove.classList.remove("active");
    elemToAdd.classList.add("active");
  }

  function initElems() {
    active = document.querySelector(".active");
    leftArrow = active.querySelector(".left");
    rightArrow = active.querySelector(".right");
  }

  function handleClick(event) {
    initElems();

    if (event.target.classList.contains("right")) {
      toggleActive(active, slidesArray[next]);
      active.style.order--;
      slidesArray[next].style.order = 1;
      slidesArray[prev].style.order = slidesArray.length - 1;
      prev = prev === slidesArray.length - 1 ? 0 : prev + 1;
      next = next === slidesArray.length - 1 ? 0 : next + 1;
    } else if (event.target.classList.contains("left")) {
      toggleActive(active, slidesArray[prev]);
      active.style.order++;
      slidesArray[prev].style.order = 1;
      slidesArray[next].style.order = 0;
      prev = prev === 0 ? slidesArray.length - 1 : prev - 1;
      next = next === 0 ? slidesArray.length - 1 : next - 1;
    }
  }

  document.querySelector(".slider").addEventListener("click", handleClick);
});
