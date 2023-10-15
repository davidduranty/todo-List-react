import { useState } from "react";
import "./App.css";

function App() {
  const [clickValue, setClickValue] = useState("");
  const [items, setItems] = useState([]);

  function handleClick() {

    if ( clickValue === "") {
      return alert("Merci de remplir le champs")
    }
    console.log(clickValue);
    

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: clickValue,
    };
    setItems((history) => [...history, item]);
    setClickValue("");
    console.log(items);
  }

  return (
    <div className="main">
      <div className="container">
        <h1>Validation ToDo</h1>
        <input className="submit" type="submit" />
        <li></li>
      </div>

      <div className="container">
        <h1>TODO LIST</h1>

        <input
          className="value"
          type="text"
          value={clickValue}
          onChange={(e) => setClickValue(e.target.value)}
        />
        <button onClick={() => handleClick()}>Ajouter</button>

        <ul>
          {items.map((el) => {
            return <li key={el.id}>{el.value}</li>;
          })}
        </ul>
      </div>

      <div className="container">
        <h1>Effacer ToDo</h1>
        <input className="submit" type="submit" />
        <li></li>
      </div>
    </div>
  );
}

export default App;
