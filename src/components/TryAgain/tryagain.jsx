import React from "react";
import "./tryagain.css";

const TryAgain = ({ words, characters, wpm, startAgain }) => {
  return (
    <div className="TryAgain">
      <h1>Test Results</h1>
      <div className="result-container">
        <p>
          <b>Characters :</b>
          {characters}
        </p>
        <p>
          <b>Words :</b>
          {words}
        </p>
        <p>
          <b>Speed :</b>
          {wpm} wpm
        </p>
      </div>
      <div>
        <button
          onClick={() => startAgain()}
          className="end-buttons start-again-btn"
        >
          Re-try
        </button>
        <button
          onClick={() => {
            window.open(
              "https://facebook.com/share/",
              "facebook-share-dailog",
              "width=800,height=600"
            );
          }}
          className="end-buttons share-btn"
        >
          Share
        </button>

        <button
          onClick={() => {
            window.open(
              "https://twitter.com/intent/tweet?text=React",
              "twitter-share-dailog",
              "width=800,height=600"
            );
          }}
          className="end-buttons tweet-btn"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
export default TryAgain;
