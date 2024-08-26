import React from 'react';
import { render, screen } from '@testing-library/react';

import SeasonEpisodes from './SeasonEpisodes';
import { SeasonWithEpisodes, Episode } from '../../../../types/types';

jest.mock('../EpisodeCard/EpisodeCard', () => (props: any) => (
  <div data-testid={`episode-card-${props.episode.id}`}>
    {props.episode.name}
  </div>
));

describe('SeasonEpisodes', () => {
  const mockEpisodes: Episode[] = [
    {
      id: 1,
      name: 'Episode 1',
      image: {
        original: 'http://example.com/image1.jpg',
        medium: 'http://example.com/medium1.jpg',
      },
      summary: 'Summary for Episode 1',
      season: 1,
    },
    {
      id: 2,
      name: 'Episode 2',
      image: {
        original: 'http://example.com/image2.jpg',
        medium: 'http://example.com/medium2.jpg',
      },
      summary: 'Summary for Episode 2',
      season: 1,
    },
  ];

  const mockSeason: SeasonWithEpisodes = {
    id: 1,
    number: 1,
    name: 'Season 1',
    episodeOrder: 2,
    premiereDate: '2023-01-01',
    endDate: '2023-01-02',
    network: {
      id: 1,
      name: 'Network',
      country: {
        name: 'Country',
        code: 'CT',
        timezone: 'Timezone',
      },
    },
    webChannel: null,
    image: { original: 'http://example.com/season.jpg' },
    summary: 'Summary for Season 1',
    episodes: mockEpisodes,
    url: 'http://example.com/season-url', // Added url property
  };

  it('should render season header and episode cards', () => {
    const { asFragment } = render(<SeasonEpisodes season={mockSeason} />);

    // Check if season header is rendered
    expect(screen.getByText('Season 1')).toBeInTheDocument();

    // Check if episode cards are rendered
    mockEpisodes.forEach((episode) => {
      expect(
        screen.getByTestId(`episode-card-${episode.id}`)
      ).toBeInTheDocument();
      expect(screen.getByText(episode.name)).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
