import React from 'react';

import { useShowDetails } from '../../hooks/useShowDetails';

import SeasonDetails from './components/SeasonDetail/SeasonDetails';
import SeasonEpisodes from './components/SeasonEpisodes/SeasonEpisodes';
import { POWERPUFF_GIRLS_SHOW_ID, HEADLINE_NOTE } from '../../config/config';

import {
  ShowDetailWrapper,
  ShowDetailMain,
  ShowHero,
  ShowContent,
  SeasonTabs,
  SeasonTab,
  EpisodesWrapper,
  ShowImage,
  ShowDescription,
} from '../../styles';

export const ShowDetail: React.FC = () => {
  const { details, seasonsWithEpisodes, activeSeasonId, setActiveSeasonId } =
    useShowDetails(POWERPUFF_GIRLS_SHOW_ID);

  if (!seasonsWithEpisodes.length) {
    return <div>Loading...</div>;
  }

  return (
    <ShowDetailWrapper>
      <ShowDetailMain>
        <ShowHero backgroundImage={details.image?.original}>
          <ShowImage
            src={details.image?.original || 'placeholder-image-url'}
            alt="Show Image"
          />
          <ShowDescription>{HEADLINE_NOTE}</ShowDescription>
        </ShowHero>
        <ShowContent>
          <SeasonTabs>
            {seasonsWithEpisodes.map((season) => (
              <SeasonTab
                key={season.id}
                isActive={season.id === activeSeasonId}
                onClick={() => setActiveSeasonId(season.id)}
              >
                <SeasonDetails
                  seasonNumber={season.number}
                  episodeCount={season.episodes.length}
                />
              </SeasonTab>
            ))}
          </SeasonTabs>
          <EpisodesWrapper>
            {seasonsWithEpisodes
              .filter((season) => season.id === activeSeasonId)
              .map((season) => (
                <SeasonEpisodes key={season.id} season={season} />
              ))}
          </EpisodesWrapper>
        </ShowContent>
      </ShowDetailMain>
    </ShowDetailWrapper>
  );
};
