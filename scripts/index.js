const slider = document.getElementById("slider")
const foregroundImage = document.querySelector(".foreground-img");

slider.addEventListener("input", e => {
  const sliderValue = e.target.value;
  console.log(sliderValue);

  foregroundImage.style.width = `${sliderValue}%`;
})

