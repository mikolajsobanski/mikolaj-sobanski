import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import "../css/technology.css"
import 'react-multi-carousel/lib/styles.css';

const initialCards = [
    { id: 1, name: 'A', flipped: false, matched: false },
    { id: 2, name: 'A', flipped: false, matched: false },
    { id: 3, name: 'B', flipped: false, matched: false },
    { id: 4, name: 'B', flipped: false, matched: false },
    { id: 5, name: 'C', flipped: false, matched: false },
    { id: 6, name: 'C', flipped: false, matched: false },
    { id: 7, name: 'D', flipped: false, matched: false },
    { id: 8, name: 'D', flipped: false, matched: false },
  ];
  
  const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  };
  

export const Game= () => {

    const [cards, setCards] = useState(shuffleCards([...initialCards]));
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCount, setMatchedCount] = useState(0);
  
    useEffect(() => {
      if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        if (firstCard.name === secondCard.name) {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.name === firstCard.name
                ? { ...card, matched: true }
                : card
            )
          );
          setMatchedCount(matchedCount + 1);
        } else {
          setTimeout(() => {
            setCards((prevCards) =>
              prevCards.map((card) =>
                card.id === firstCard.id || card.id === secondCard.id
                  ? { ...card, flipped: false }
                  : card
              )
            );
          }, 1000);
        }
        setFlippedCards([]);
      }
    }, [flippedCards]);
  
    const handleCardClick = (clickedCard) => {
      if (
        flippedCards.length < 2 &&
        !clickedCard.flipped &&
        !clickedCard.matched
      ) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === clickedCard.id ? { ...card, flipped: true } : card
          )
        );
        setFlippedCards((prevFlipped) => [...prevFlipped, clickedCard]);
      }
    };
  
       

    return(
        <div>
        <section className="technology" id="technology">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        

                    <div className="memory-game">
                    <h1>Memory Card Game</h1>
                    <div className="cards-container">
                        {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`card ${card.flipped ? 'flipped' : ''}`}
                            onClick={() => handleCardClick(card)}
                        >
                            <div className="card-inner">
                            <div className="card-front">?</div>
                            <div className="card-back">{card.name}</div>
                            </div>
                        </div>
                        ))}
                    </div>
                    {matchedCount === initialCards.length / 2 && (
                        <div className="win-message">You won!</div>
                    )}
                    </div>


                    </div>
                </div>
            </div>
        </div>
        </section>
        </div>
        
    )

}