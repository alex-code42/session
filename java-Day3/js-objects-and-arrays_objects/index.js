console.clear();

// EXERCISE 1
// Create an object personWithNameAgeEmail with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  name: "Eddi",
  age: 28,
  email: "eddi@gmx.de",
};

// EXERCISE 2
// Set the values of name and age equal to the corresponding values of the personAlex object.

const personAlex = {
  name: "Alex",
  age: 24,
};

console.log(personWithNameAgeEmail.name)

const nameOfAlex = personAlex.name;
const ageOfAlex = personAlex.age;

// EXERCISE 3
// Change the value of name to "Alex" and the value of age to "35" by updating the object personToChange: person.existingProperty = newValue.

const personToChange = {
  name: "Kim",
  age: 24,
};

personToChange.name = "Alex";

console.log(personToChange)

// EXERCISE 4
// Add the properties age "5" and breed "husky" to the object petPluto: pet.newProperty = newValue.

const petPluto = {
  name: "Pluto",
  species: "dog",
};

petPluto.age = 5;
petPluto.breed = "husky";

console.log(petPluto)

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
