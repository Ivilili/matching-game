import React, { useState, useEffect } from "react";
import Card from "./Card";
import Deck from "./Deck";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedo,
  faStar,
  faLeaf,
  faPaperPlane,
  faAnchor,
  faPaw,
  faBolt,
  faRocket,
  faBicycle,
  faBomb,
} from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

import "./App.css";

library.add(
  faStar,
  faRedo,
  faLeaf,
  faPaperPlane,
  faAnchor,
  faPaw,
  faBolt,
  faRocket,
  faBicycle,
  faBomb
);

const App = () => {
  const [cards, setCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [isCalled, setIsCalled] = useState(false);

  //Durstenfeld shuffle
  const shuffle = (array) => {
    let newArr = array.slice();
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const newGame = () => {
    setCards(shuffle(Deck()));
    setMatched([]);
    setFirstCard(null);
    setSecondCard(null);
    setCounter(0);
    setDisabled(false);
    setIsCalled(true);
  };

  //checking if id matches with flipped card
  const match = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => firstCard === card.id);
    return flippedCard?.icon === clickedCard?.icon;
  };

  useEffect(() => {
    if (!isCalled) {
      newGame();
    }
  }, [isCalled, newGame]);

  useEffect(() => {
    if (matched.length === 16) {
      swal(
        "Good job!",
        `You won the game with ${counter} moves! Can you do it with less moves?`,
        "success",
        {
          button: "Play again!",
        }
      ).then((result) => {
        if (result) {
          newGame();
        }
      });
    }
  }, [matched]);

  const handleClick = (id) => {
    setDisabled(true);
    if (firstCard === null) {
      setFirstCard(id);
      setDisabled(false);
    } else {
      if (id === firstCard) {
        setDisabled(false);
        return;
      }
      setSecondCard(id);
      setCounter(counter + 1);
      if (match(id)) {
        setMatched([...matched, firstCard, id]);
        resetCards();
      } else {
        setTimeout(() => {
          resetCards();
        }, 750);
      }
    }
  };

  const resetCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  return (
    <div className="App">
      <div className="App__container">
        <h1>Matching Game</h1>
        <div className="rating">
          <div className="moves">Moves: {counter}</div>
          <div
            className="redo"
            title="Play Again"
            onClick={() => {
              swal({
                title: "Are you sure you want to reset the game?",
                text: "If you reset, you will lose your progress!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((result) => {
                if (result) {
                  newGame();
                }
              });
            }}
          >
            <FontAwesomeIcon className="redo-icon" icon={faRedo} /> Reset
          </div>
        </div>

        <div className="deck" id="card-deck">
          {cards.map((card) => (
            <Card
              key={card.id}
              handleClick={handleClick}
              id={card.id}
              icon={card.icon}
              matched={matched.includes(card.id)}
              flipped={firstCard === card.id || secondCard === card.id}
              disabled={disabled || matched.includes(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
