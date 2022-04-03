import React from 'react'

import './Search.css'

function Search({ setKeyword, searchTracks }) {
  return (
    <div>
      <form className="search-form" onSubmit={e => searchTracks(e)}>
        <input className="search-input" type="text" onChange={e => setKeyword(e.target.value)} />
        <button className="btn-search" type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Search