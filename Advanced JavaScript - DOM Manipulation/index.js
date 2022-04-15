for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    buttonAnimation(this.innerHTML);
    makeSound(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  buttonAnimation(event.key);
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/crash.mp3").play();
      break;
    case "l":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    default:
      console.log(this.innerHTML);
      break;
  }
}

function buttonAnimation(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(() => {
      document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
