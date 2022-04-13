import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavbarComponent from '../component/NavbarComponent';
import MyPlaylistCard from '../component/MyPlaylistCard';

import styles from './MyPlaylist.module.css';

function MyPlaylist() {
  const playlist = useSelector((state) => state.tracks.userPlaylist);
  const user = useSelector((state) => state.user.user);

  return (
    <div className={styles.myplaylist}>
      <NavbarComponent />
      <div className={styles.myplaylist_container}>
        <h1 className={styles.myplaylist_title}>
          {user && `${user.display_name}'s Playlist`}
        </h1>
        <div className={styles.myplaylist_card_wrapper}>
          {playlist.length > 0 ? (
            playlist.map((pl) => <MyPlaylistCard key={pl.id} playlist={pl} />)
          ) : (
            <div className={styles.myplaylist_noplaylist}>
              You have no saved tracks.{' '}
              <Link className={styles.myplaylist_link} to="/create">
                Create One
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyPlaylist;
