import React, { FC } from 'react';
import { Card } from '../card/card.component';
import { Imonster } from '../monsters.model';
import './card-list.styles.css';

interface IcardListProps {
  monsters: Imonster[];
}

export const CardList: FC<IcardListProps> = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
