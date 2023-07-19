import { GetRandomColor } from "../../utils/randomColor.js";

export function MakeSquare(){
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("click", () => {
      square.style.backgroundColor = GetRandomColor();
    });
    return square
  
  }