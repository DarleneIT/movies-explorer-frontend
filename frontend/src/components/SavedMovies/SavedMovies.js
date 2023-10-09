import React from 'react'
import './SavedMovies.css'
import SearchForm from '../Movies/SearchForm/SearchForm.js'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList.js'

function SavedMovies(props) {
  return (
    <>
      <main>
        <SearchForm />
        <MoviesCardList cards={props.cards} />
      </main>
    </>
  )
}

export default SavedMovies