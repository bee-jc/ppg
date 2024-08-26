import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import {
  getShowDetails,
  getEpisodes,
  getSeasons,
} from '../redux/slices/showSlice';
import { groupEpisodesBySeason } from '../utils/groupEpisodesBySeason';

export const useShowDetails = (showId: number) => {
  const dispatch = useDispatch<AppDispatch>();
  const { details, episodes, seasons } = useSelector(
    (state: RootState) => state.show
  );

  const [activeSeasonId, setActiveSeasonId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(getShowDetails(showId));
    dispatch(getEpisodes(showId));
    dispatch(getSeasons(showId));
  }, [dispatch, showId]);

  const seasonsWithEpisodes = groupEpisodesBySeason(episodes, seasons);

  useEffect(() => {
    if (seasonsWithEpisodes.length > 0 && activeSeasonId === null) {
      setActiveSeasonId(seasonsWithEpisodes[0].id);
    }
  }, [seasonsWithEpisodes, activeSeasonId]);

  return {
    details,
    seasonsWithEpisodes,
    activeSeasonId,
    setActiveSeasonId,
  };
};
