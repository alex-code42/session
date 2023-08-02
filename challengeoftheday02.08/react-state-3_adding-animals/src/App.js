import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { useId } from 'react'

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);
  const id = useId();
  function handleAddAnimal(newAnimal) {
    const animalWithId = { ...newAnimal, id: id };
    setAnimals([...animals, animalWithId ])
    console.log(newAnimal);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
