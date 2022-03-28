import React from 'react'
import Flashcard from './FlashCard.js'


export default function FlashCardList({flashCards}) {
  return (
    <div className='card-grid'>
        {flashCards.map(flashcard=>{
            return<Flashcard flashcard={flashcard} key={flashcard.id}/>
        })}
    </div>
  )
}
