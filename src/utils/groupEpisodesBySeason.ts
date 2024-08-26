import { Episode, Season } from '../types/types';

export const groupEpisodesBySeason = (
  episodes: Episode[],
  seasons: Season[]
) => {
  const episodesBySeason = episodes.reduce(
    (acc: { [key: number]: Episode[] }, episode) => {
      const seasonId = Number(episode.season);
      acc[seasonId] = acc[seasonId] || [];
      acc[seasonId].push(episode);
      return acc;
    },
    {}
  );

  return seasons.map((season) => ({
    ...season,
    episodes: episodesBySeason[season.number] || [],
  }));
};
