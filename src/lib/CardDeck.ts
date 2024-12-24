import Card from './Card.ts';

class CardDeck {
  public deck: Card[];
  suits = ['diams', 'hearts', 'clubs', 'spades'];
  ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

  constructor() {
    this.deck = this.cardDeckGet();
  }

  cardDeckGet = () => {
    const cardArray: Card[] = [];

    this.suits.forEach((suit) => {
      this.ranks.forEach((rank) => {
        cardArray.push(new Card(rank, suit));
      });
    });
    return cardArray;
  };
  getCard = () => {
    const randomIndexCard = Math.floor(Math.random() * this.deck.length);
    const randomlyGetCard = this.deck[randomIndexCard];
    this.deck.splice(randomIndexCard, 1);
    return randomlyGetCard;
  };
  getCards = (howMany: number) => {
    const cardsArray: Card[] = [];

    for (let i = 0; i < howMany; i++) {
      const randomIndexCard = this.getCard();
      cardsArray.push(randomIndexCard);
    }
    return cardsArray;
  };
}

export default CardDeck;
