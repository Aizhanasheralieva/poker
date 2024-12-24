import './App.css';
import CardObject from './components/CardObject/CardObject.tsx';
import { useState } from 'react';
import CardDeck from './lib/CardDeck.ts';
import Card from './lib/Card.ts';
import PokerHand from './lib/PokerHand.ts';

const cardDeck = new CardDeck();

const App = () => {
  const [myHand, setMyHand] = useState<Card[]>([]);
  const [combinationOfCards, setCombinationOfCards] = useState<string>('');

  const iNeedToReceiveFiveCards = () => {
    const someFiveCards = cardDeck.getCards(5);
    setMyHand(someFiveCards);

    const pokerHand = new PokerHand(someFiveCards);
    setCombinationOfCards(pokerHand.getOutcome());
  };

  return (
    <>
      <h3>There are {cardDeck.deck.length} cards </h3>
      <div>
        <strong>Outcome of card combinations:</strong> {combinationOfCards}
      </div>
      {cardDeck.deck.length < 5 ? null : <button onClick={iNeedToReceiveFiveCards}>Deal cards</button>}

      <div className="playingCards faceImages">
        {myHand.map((card) => (
          <CardObject key={card.rank + card.suit} rank={card.rank} suit={card.suit} />
        ))}
      </div>
    </>
  );
};

export default App;
