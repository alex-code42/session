import { createServer } from "node:http";

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;
    response.end("Hello Worldd");
  } 
  if (request.url === "/alex") {
    response.statusCode = 200;
    response.end('Hello Alex');
  } 
  else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});