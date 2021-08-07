import React, { useState } from "react";
import "./styles.css";

const summerEmojis = {
  "🥵": "Hot Face",
  "😎": "Smiling Face with Sunglasses",
  "🏄": "Person Surfing",
  "🐚": "Spiral Seashell",
  "🍹": "Tropical Drink",
  "☀️": "Sun"
};

const emojis = Object.keys(summerEmojis);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

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
    /** concept 3 is onchange */
    <div className="App">
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
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {
        /** Bonus feature; if time permmits */
        /**
         * concepts to cover: mapping a list
         * click handler on list item
         */
        emojis.map((emoji) => (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
    </div>
  );
}
