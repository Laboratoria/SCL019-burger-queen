import React from 'react';


export const Desayuno = ({menu}) => {
      const {item} = menu;
    return (
          <blockquote className='card'>
                <div className='card-body'>
                      <button className='addProduct'>{item}</button>
                </div>
          </blockquote>
    )

}