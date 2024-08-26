import React from 'react';
import { Episode } from '../../../../types/types';
import {
  EpisodeImage,
  EpisodeTitle,
  EpisodeDescription,
  EpisodeImageContainer,
  ImagePlaceholder,
  EpisodeInfo,
  EpisodeLink,
} from '../../../../styles';

const EpisodeCard: React.FC<{ episode: Episode }> = ({ episode }) => (
  <EpisodeLink to={`/episode/${episode.id}`}>
    <EpisodeImageContainer>
      {episode.image?.medium ? (
        <EpisodeImage src={episode.image.medium} alt={episode.name} />
      ) : (
        <ImagePlaceholder>No image available</ImagePlaceholder>
      )}
    </EpisodeImageContainer>
    <EpisodeInfo>
      <EpisodeTitle>{episode.name}</EpisodeTitle>
      <EpisodeDescription>
        {episode.summary
          ? episode.summary.replace(/(<([^>]+)>)/gi, '')
          : 'No summary available.'}
      </EpisodeDescription>
    </EpisodeInfo>
  </EpisodeLink>
);

export default EpisodeCard;
