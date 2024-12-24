import Card from './Card.ts';

class PokerHand {
  constructor(public myHand: Card[]) {
    this.myHand = myHand;
  }

  getOutcome = () => {
    const suit: { [key: string]: number } = {
      diams: 0,
      hearts: 0,
      clubs: 0,
      spades: 0,
    };

    const rank: { [key: string]: number } = {
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      J: 0,
      Q: 0,
      K: 0,
      A: 0,
    };

    const arrayOfSuitFromMyHand = this.myHand.map((card) => card.suit);
    const arrayOfRankFromMyHand = this.myHand.map((card) => card.rank);

    arrayOfSuitFromMyHand.forEach((suitItem) => {
      suit[suitItem]++;
    });
    arrayOfRankFromMyHand.forEach((rankItem) => {
      rank[rankItem]++;
    });

    const countingArrayForRank = Object.values(rank);

    const cardThatHasPair = countingArrayForRank.filter((rank) => rank === 2);

    if (cardThatHasPair.length === 1) {
      return 'One pair';
    }

    if (cardThatHasPair.length === 2) {
      return 'Two pairs';
    }

    if (cardThatHasPair.length === 3) {
      return 'Three of a kind';
    }

    if (cardThatHasPair.length === 5) {
      return 'This is a flush';
    }

    return 'High Card';
  };
}

export default PokerHand;
