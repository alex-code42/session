const data = "yes";

console.log(typeof(data))

switch (typeof(data)) {
        case "number":console.log("number");break
        case "bigint":console.log("bigint");break
        case "string":console.log("string!");break
        case "boolean":console.log("boolean");break
        case "symbol":console.log("symbol");break
        case "object":console.log("object");break
        case "function": console.log("function");break
    default:
        break;
}