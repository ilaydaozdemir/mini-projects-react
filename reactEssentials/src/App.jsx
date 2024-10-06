import React from "react";

import { CORE_CONCEPTS } from "./data.js";

import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const onHandleSelect = (selectedButton) => {
    console.log(selectedButton);
  };
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => onHandleSelect("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => onHandleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => onHandleSelect("Props")}>
              Props
            </TabButton>
            <TabButton onSelect={() => onHandleSelect("State")}>
              State
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
