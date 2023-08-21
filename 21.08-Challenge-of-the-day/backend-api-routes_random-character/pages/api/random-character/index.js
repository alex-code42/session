import Chance from "chance";

const chance = new Chance();



const person = {
    firstName : chance.first(),
    lastName : chance.last(),
    age : chance.age(),
    twitterName : chance.twitter(),
    words: chance.sentence({ words: 5 }),
  };

export default function handler(request, response) {
    response.status(200).json(person);
  }