import React from "react";
import imgCoreConcepts from "../assets/react-core-concepts.png";

const reactDescribes = ["Fundamental", "Crucial", "Core"];

function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
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
