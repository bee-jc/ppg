import React from 'react';

import { Episode, SeasonWithEpisodes } from '../../../../types/types';
import EpisodeCard from '../EpisodeCard/EpisodeCard';
import { SeasonHeader, EpisodesList } from '../../../../styles';

const SeasonEpisodes: React.FC<{ season: SeasonWithEpisodes }> = ({
  season,
}) => (
  <>
    <SeasonHeader>Season {season.number}</SeasonHeader>
    <EpisodesList>
      {season.episodes.map((episode: Episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </EpisodesList>
  </>
);

export default SeasonEpisodes;
