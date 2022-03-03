import React from "react";
import ChallengeCard from "../challengecard/challengecard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./typing.css";

const Typing = ({
  selectedParagraph,
  timerStarted,
  timeRemaining,
  words,
  characters,
  wpm,
  testInfo,
  onInputChange
}) => {
  return (
    <div className="typing-container">
      {/* Details Section */}
      <div className="details-container">
        {/* words typed */}
        <ChallengeCard cardname="Words" cardvalue={words} />
        {/* Char typed */}
        <ChallengeCard cardname="Characters" cardvalue={characters} />
        {/* Speed */}
        <ChallengeCard cardname="Speed" cardvalue={wpm} />
      </div>
      {/* The real challenge */}
      <div className="input-container">
        <TypingChallenge
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          selectedParagraph={selectedParagraph}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};
export default Typing;
