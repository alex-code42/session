export function getAnimal(animal) {
    if (animal === undefined || animal === null){
        return "I do not like animals at all!";
    }
    else if (animal === "dogs"){
        return "I like dogs!";
    }
    else if (animal === "cats"){
        return "I totally love cats!";
    }
}
