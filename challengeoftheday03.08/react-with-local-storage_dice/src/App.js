import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
// import { useState } from "react";
import useLocalStorageState from 'use-local-storage-state'

export default function App() {
  const [rolls, setRolls] = useLocalStorageState('todos', {
    defaultValue: ['buy avocado', 'do 50 push-ups']
})

  return (
    <div className="app">
      <main className="app__main">
        <D6Button rolls={rolls} setRolls={setRolls}/>
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
