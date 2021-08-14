import React, { useState } from "react";
import "./styles.css";

const summerEmojis = {
  "🥵": "Hot Face",
  "😎": "Smiling Face with Sunglasses",
  "🏄": "Person Surfing",
  "🐚": "Spiral Seashell",
  "🍹": "Tropical Drink",
  "☀️": "Sun",
  "🐬": "Dolphin",
  "🌳": "Deciduous Tree",
  "⛱️": "Unmbrella on Ground",
  "🍃": "Leaf Fluttering in Wind",
  "🌴": "Palm Tree"
};

const emojis = Object.keys(summerEmojis);

export default function App() {
  const imageUrl =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80";

  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in summerEmojis) {
      setMeaning(summerEmojis[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(summerEmojis[inputEmoji]);
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <h1>Check out Summer Emojis</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
