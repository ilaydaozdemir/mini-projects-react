import React from "react";
import imgCoreConcepts from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import configImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";

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
      <img src={props.img} alt={props.title} />
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
            <CoreConcepts
              img={componentImg}
              title="components"
              description="The core UI building"
            />
            <CoreConcepts
              img={configImg}
              title="components"
              description="The core UI building"
            />
            <CoreConcepts
              img={jsxImg}
              title="components"
              description="The core UI building"
            />
            <CoreConcepts
              img={imgCoreConcepts}
              title="components"
              description="The core UI building"
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
