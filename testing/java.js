const myArray = [
    { foo: 1, bar: "hi" , name: "Alex"},
    { foo: 4, bar: "hey" , name: "Rocco" },
    { foo: 2, bar: "ho" , name: "arthi" },
  ];

const myObject = {};
myArray.forEach((element) => {
    myObject[element.name] = element.bar

})
console.log(myObject)