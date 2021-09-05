import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "grapes",
  "🍈": "melon",
  "🍉": "watermelon",
  "🍊": "Tangerine",
  "🍋": "lemon",
  "🍌": "banana",
  "🍍": "pineapple",
  "🍎": "apple",
  "🍐": "pear",
  "🍑": "peach",
  "🍒": "cherries",
  "🍓": "strawberry",
  "🍅": "i am fruit in theory"
};

export default function App() {
  const [input, setInput] = useState("");
  var emojis = Object.keys(emojiDictionary);

  function inputTaker(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have what you are looking for";
    }
    setInput(meaning);
  }

  function emojiClickHandler(emojis) {
    var meaning = emojiDictionary[emojis];
    setInput(meaning);
  }

  return (
    <div className="App">
      <h1> Fruit-emojis </h1>
      <input style={{ padding: 2 }} onChange={inputTaker}></input>
      <h2 style={{ color: "red" }}>{input} </h2>
      <h3>fruits we know </h3>
      {emojis.map(function (emojis) {
        return (
          <span
            onClick={() => emojiClickHandler(emojis)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={{ emojis }}
          >
            {emojis}
          </span>
        );
      })}
    </div>
  );
}
