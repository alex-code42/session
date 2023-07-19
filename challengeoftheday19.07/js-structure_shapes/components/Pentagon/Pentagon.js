import { GetRandomColor } from "../../utils/randomColor.js";

export function MakePentagon(){
    const pentagon = document.createElement("div");
    pentagon.classList.add("pentagon");
    pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = GetRandomColor();
  });
    return pentagon
  }