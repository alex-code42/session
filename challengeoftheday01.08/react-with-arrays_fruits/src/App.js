import Card from "./components/Card";


export default function App() {
  const fruits = [
    {
    id: 1337,
    name: '🍌 Banana',
    color: 'yellow',
    },
    {
      id: 1338,
      name: '🍏 Apple',
      color: 'green',
    },
    {
      id: 1340,
      name: '🍉 Melon',
      color: 'red',
    },
    {
      id: 1341,
      name: '🍗 Chicken-Plant',
      color: 'orange',
    },
    {
      id: 1342,
      name: '🍇 Berry',
      color: 'orange',
    },
];

  return (
    <dl>
      {fruits.map(({id, name}) =>(
            <div key={id} className="app">
            <Card name={name} />
            </div>
      ))}
    </dl>

  );
}
