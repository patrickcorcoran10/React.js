import React from "react";

const name = "Pat";
// const numbOfLetters = 3;
const thoughts = "I think this could be a cool technology to learn.";
const noVowels = (name) => name.replace(/[aeiou]/gi, '');
;

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {name.length} letters</h2>
        <h2>I think React {thoughts}</h2>
        <h2>My name without any vowels is: {noVowels}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
