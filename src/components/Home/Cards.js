import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className="hehe">Know more about our wonderful food</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pexels-cats-coming-406152.jpg'
              text='Salad'
              label='Read'
              path='/sign-up'
            />
            <CardItem
              src='images/pexels-nerfee-mirandilla-3186654.jpg'
              text='Meat'
              label='Read'
              path='/sign-up'
            />
          {/* </ul>
          <ul className='cards__items' id="items2"> */}
            <CardItem
              src='images/pexels-jonathan-borba-2983099.jpg'
              text='Bugger'
              label='Read'
              path='/sign-up'
            />
            <CardItem
              src='images/pexels-ella-olsson-3026805.jpg'
              text="Blouchette"
              label='Read'
              path='/sign-up'
            />
            <CardItem
              src='images/pexels-william-choquette-2641886.jpg'
              text='breakfast'
              label='Read'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
