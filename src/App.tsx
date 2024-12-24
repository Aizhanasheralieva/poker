import './App.css';
import CardObject from "./components/CardObject/CardObject.tsx";
import {useState} from "react";
import CardDeck from "./lib/CardDeck.ts";
import Card from "./lib/Card.ts";

const cardDeck = new CardDeck();

const App = () => {
    const [myHand, setMyHand] = useState<Card[]>([]);

    const iNeedToReceiveFiveCards = () => {
        setMyHand(cardDeck.getCards(5));
    };

    return (
        <>
            <h3>There are cards: {cardDeck.deck.length}</h3>
            {cardDeck.deck.length < 5 ? null
                :
                <button onClick={iNeedToReceiveFiveCards}>Deal cards</button>
            }

            <div className="playingCards faceImages">
                {myHand.map((card) => (
                    <CardObject key={card.rank + card.suit} rank={card.rank} suit={card.suit}/>
                ))}
            </div>
        </>
    );
};

export default App;
