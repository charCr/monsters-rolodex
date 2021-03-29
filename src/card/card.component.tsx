import React, { FC } from 'react';
import { Imonster } from '../monsters.model';
import './card.styles.css';

interface IcardProps {
  monster: Imonster;
}

export const Card: FC<IcardProps> = (props) => {
  return (
    <div className="card-container">
      <img
        alt="Monsters"
        src={`https://robohash.org/${props.monster.id}?ref=producthunt&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
