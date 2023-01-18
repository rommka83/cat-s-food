import React, { useState } from 'react';
import './card.css';

interface ICard {
  cardHeader: string;
  cardTitle: string;
  cardSubtitle: string;
  cardPortions: string;
  cardGifts: string;
  cardComment: string;
  massaValue: string;
  description: string;
  available: boolean;
}

export function Card({
  cardHeader,
  cardTitle,
  cardSubtitle,
  cardPortions,
  cardGifts,
  cardComment,
  massaValue,
  description,
  available,
}: ICard) {
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    switch (selected) {
      case 0:
        setSelected(1);
        break;
      case 1:
        setSelected(2);
        break;
      case 2:
        setSelected(1);
        break;
    }
  };

  return (
    <div className='card-wrapper'>
      <div
        className={`card-wrapper__card card ${
          available ? '' : 'not-available'
        } ${hover ? 'card-hover' : ''} ${selected === 1 && 'card_selected'} ${
          selected === 2 && 'card_refusal'
        }`}
        onMouseLeave={() => setHover(true)}
        onClick={() => handleClick()}
      >
        <p
          className={`card__header ${selected === 2 && 'card__header_refusal'}`}
        >
          {selected !== 2 ? cardHeader : 'Котэ не одобряет?'}
        </p>
        <h3 className='card__title'>{cardTitle}</h3>
        <h4 className='card__subtitle'>{cardSubtitle}</h4>
        <p className='card__portions'>{cardPortions}</p>
        <p className='card__gifts'>{cardGifts}</p>
        <p className='card__comment'>{cardComment}</p>
        <div
          className={`card__massa massa ${
            available ? '' : 'not-available-massa'
          } ${hover ? 'massa-hover' : ''} ${
            selected === 1 && 'massa_selected'
          } ${selected === 2 && 'massa_refusal'}`}
        >
          <p className='massa__value'>{massaValue}</p>
          <p className='massa__unit'>кг</p>
        </div>
      </div>
      {available ? (
        <>
          {selected !== 1 && (
            <div className='card-wrapper__motivation motivation'>
              <span className='motivation__content'>
                Чего сидишь? Порадуй котэ,{' '}
              </span>
              <button className='motivation__btn' onClick={() => handleClick()}>
                купи
              </button>
            </div>
          )}
          {selected === 1 && <p className='description'>{description}</p>}
        </>
      ) : (
        <p className='description sadness'>{`Печалька, ${cardSubtitle} закончился.`}</p>
      )}
    </div>
  );
}
