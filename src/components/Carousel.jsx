import React, { useState } from "react";
import Card from "./Card";
import { initalState } from "./data";

function Carousel() {
  const [cards, setCards] = useState(initalState);

  const handleLeftClick = () => {
    const prevState = [...cards];
    // find the card with the lowest position
    const minPosCard = prevState
      .filter((card) => card.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : -1))[0];
    const nextCardIdx = minPosCard.idx;

    // find the card with the highest position
    const maxPosCard = prevState.sort((a, b) => (a.pos < b.pos ? 1 : -1))[0];

    // shift the leftmost card to the rightmost position
    prevState[nextCardIdx].pos = maxPosCard.pos + 1;
    prevState[nextCardIdx].active = false;
    const nextActiveCardIdx = prevState.find(
      (card) => card.active === false
    ).idx;
    prevState[nextActiveCardIdx].active = true;

    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find the card with the highest position
    const maxPosCard = prevState
      .filter((card) => card.active === true)
      .sort((a, b) => (a.pos < b.pos ? 1 : -1))[0];
    const nextCardIdx = maxPosCard.idx;

    // find the card with the lowest position
    const minPosCard = prevState.sort((a, b) => (a.pos > b.pos ? 1 : -1))[0];

    // shift the rightmost card to the leftmost position
    prevState[nextCardIdx].pos = minPosCard.pos - 1;
    prevState[nextCardIdx].active = false;
    const nextActiveCardIdx = prevState.find(
      (card) => card.active === false
    ).idx;
    prevState[nextActiveCardIdx].active = true;

    setCards(prevState);
  };

  return (
    <>
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleLeftClick()}
      >
        {"<"}
      </div>
      {cards
        .filter((f) => f.active === true)
        .sort((a, b) => (a.pos > b.pos ? 1 : -1))
        .map((card, index) => (
          <Card key={index} prop={card.text} />
        ))}
      <div
        className="text-xl md:text-5xl cursor-pointer"
        onClick={() => handleRightClick()}
      >
        {">"}
      </div>
    </>
  );
}

export default Carousel;
