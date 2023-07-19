console.clear();

import { GetRandomColor } from "./utils/randomColor.js";
import { MakeCircle } from "./components/Circle/Circle.js";
import { MakeSquare } from "./components/Square/Square.js";
import { MakePentagon } from "./components/Pentagon/Pentagon.js";

let getRandomColor = GetRandomColor();

GetRandomColor();


console.log(getRandomColor)

const root = document.getElementById("root");





const pentagon = MakePentagon();
const circle = MakeCircle();
const square = MakeSquare();
root.append(circle, square, pentagon);
