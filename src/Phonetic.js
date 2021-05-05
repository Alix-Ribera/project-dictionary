import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <button>
        <a href={props.phonetic.audio}>Listen</a>
      </button>
      {props.phonetic.text}
    </div>
  );
}
