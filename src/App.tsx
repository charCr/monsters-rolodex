import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import { CardList } from './cardList/card-list.component';
import { SearchBox } from './searchBox/search-box.component';
import { Imonster } from './monsters.model';

const App: FC<Imonster> = () => {
  const [monsters, setMonsters] = useState<Imonster[]>([]);
  const [searchField, setSearchField] = useState('');
  useEffect(() => {
    const getMonsters = async () => {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setMonsters(users));
    };
    getMonsters();
  }, []);

  const filterMonstersHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let userSearch = event.target.value;
    const monstersFound = monsters.filter((monster) => {
      setSearchField(userSearch);
      return monster.name
        ?.toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    setMonsters(monstersFound);
  };

  return (
    <div className="App">
      <h1>Monsters</h1>
      {console.log(searchField)}
      {console.log(monsters)}
      <SearchBox
        type="search"
        placeholder="Search Monsters"
        monstersHandler={filterMonstersHandler}
      />
      <CardList monsters={monsters} />
    </div>
  );
};

export default App;
