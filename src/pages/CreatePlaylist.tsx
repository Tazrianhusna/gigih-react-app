import React, { useState } from 'react';
import NavbarComponent from '../component/NavbarComponent';
import SearchBar from '../component/SearchBar';
import TrackCard from '../component/TrackCard';
import FormCreatePlaylist from '../component/FormCreatePlaylist';
import { useAppSelector } from '../store';

import './CreatePlaylist.css';

function CreatePlaylist() {
  const [isSearched, setIsSearched] = useState(false);
  const { track, selectedTracks } = useAppSelector((state) => state.tracks);
  const tracks = track?.tracks.items;

  return (
    <div className="createpl">
      <NavbarComponent />
      <div className="createpl_container">
        <h1 className="createpl_title">Create New Playlist</h1>
        <SearchBar setIsSearched={setIsSearched} />
        {isSearched && (
          <div className="createpl_card_wrapper">
            {tracks && tracks.length > 0 ? (
              tracks?.map((tr) => <TrackCard key={tr.id} track={tr} />)
            ) : (
              <div className="createpl_notracks">No Tracks Found</div>
            )}
          </div>
        )}
      </div>
      {selectedTracks && selectedTracks.length > 0 && <FormCreatePlaylist />}
    </div>
  );
}

export default CreatePlaylist;
