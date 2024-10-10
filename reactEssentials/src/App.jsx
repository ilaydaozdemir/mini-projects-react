import React, { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";

import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectTab, setSelectTab] = useState("");
  const onHandleSelect = (selectedButton) => {
    setSelectTab(selectedButton);
  };
  let tabContent = <p>Please select a topic</p>;
  if (selectTab) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectTab].title}</h3>
        <p>{EXAMPLES[selectTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectTab].code}</code>
        </pre>
      </div>
    );
  }
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
            <TabButton onSelect={() => onHandleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => onHandleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => onHandleSelect("props")}>
              Props
            </TabButton>
            <TabButton onSelect={() => onHandleSelect("state")}>
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
