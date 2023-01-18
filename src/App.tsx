import React from 'react';
import './App.css';
import { Card } from './components/Card';
import DB from './DB';
import { nanoid } from 'nanoid';

function App() {
  return (
    <div className='app'>
      <h2 className='app__title'>Ты сегодня покормил кота?</h2>
      <ul className='app__list'>
        {DB.map((el) => {
          return (
            <li className='app__item' key={nanoid()}>
              <Card
                cardHeader={el.cardHeader}
                cardTitle={el.cardTitle}
                cardSubtitle={el.cardSubtitle}
                cardPortions={el.cardPortions}
                cardGifts={el.cardGifts}
                cardComment={el.cardComment}
                massaValue={el.massaValue}
                description={el.description}
                available={el.available}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
