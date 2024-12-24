import React from 'react';
import { ICard } from '../../types';

const CardObject: React.FC<ICard> = ({ rank, suit }) => {
  const suitsObject: { [key: string]: string } = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠',
  };

  return (
    <span className={`card rank-${String(rank).toLowerCase()} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suitsObject[suit]}</span>
    </span>
  );
};

export default CardObject;
