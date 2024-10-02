import React from "react";

import { CORE_CONCEPTS } from "./data.js";
import imgCoreConcepts from "./assets/react-core-concepts.png";

const reactDescribes = ["Fundamental", "Crucial", "Core"];

function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const describe = reactDescribes[getRandom(2)];
  return (
    <header>
      <img src={imgCoreConcepts} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {describe} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
