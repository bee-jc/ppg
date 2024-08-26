import React from 'react';

import { SeasonNumber, EpisodeCount } from '../../../../styles';

const SeasonDetails: React.FC<{
  seasonNumber: number;
  episodeCount: number;
}> = ({ seasonNumber, episodeCount }) => {
  const formattedNumber =
    seasonNumber < 10 ? `S0${seasonNumber}` : `S${seasonNumber}`;
  return (
    <>
      <SeasonNumber>{formattedNumber}</SeasonNumber>
      <EpisodeCount>({episodeCount} episodes)</EpisodeCount>
    </>
  );
};

export default SeasonDetails;
