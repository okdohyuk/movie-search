import React, { useEffect, useState } from 'react';
import { movieApi } from '../../api';
import MoviesPresenter from './MoviesPresenter';

export default () => {
  const [refreshing, setRefreshing] = useState(false);
  const [movies, setMovies] = useState({
    loading: true,
    nowPlaying: [],
    populer: [],
    upcoming: [],
    nowPlayingError: null,
    populerError: null,
    upcomingError: null,
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [populer, populerError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovies({
      loading: false,
      nowPlaying,
      populer,
      upcoming,
      nowPlayingError,
      populerError,
      upcomingError,
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <MoviesPresenter refreshFn={getData} {...movies} />;
};
