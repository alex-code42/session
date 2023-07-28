import "./styles.css";

export default function App() {
  return <h1>
    <Greeting name="Alex"/>
    <Greeting name="Mace"/>
  
  </h1>;
}

function Greeting({name}){
  return <h1>Hello {name}</h1>
}
