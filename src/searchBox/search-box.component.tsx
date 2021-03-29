import React, { ChangeEvent, FC } from 'react';
import './search-box.styles.css';

interface ISearchBoxProps {
  type: string;
  placeholder: string;
  monstersHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox: FC<ISearchBoxProps> = ({
  type,
  placeholder,
  monstersHandler,
}) => (
  <input
    className="search"
    type={type}
    placeholder={placeholder}
    onChange={monstersHandler}
  />
);
