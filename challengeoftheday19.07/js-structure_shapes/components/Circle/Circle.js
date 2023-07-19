import { GetRandomColor } from "../../utils/randomColor.js";

let getRandomColor = GetRandomColor();
console.log(getRandomColor)

export function MakeCircle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.addEventListener("click", () => {
      circle.style.backgroundColor = GetRandomColor();
    });
    
    return circle;
  }