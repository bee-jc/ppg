import { render, screen, fireEvent } from '@testing-library/react';
import { ShowDetail } from './ShowDetail';
import { useShowDetails } from '../../hooks/useShowDetails';
import { POWERPUFF_GIRLS_SHOW_ID } from '../../config/config';
import { SeasonWithEpisodes, Episode } from '../../types/types';
import { MemoryRouter } from 'react-router-dom';

// Mock the useShowDetails hook
jest.mock('../../hooks/useShowDetails', () => ({
  useShowDetails: jest.fn(),
}));

// Mock data
const mockDetails = {
  id: POWERPUFF_GIRLS_SHOW_ID,
  name: 'Powerpuff Girls',
  image: { original: 'http://example.com/show.jpg' },
  summary: 'This is a test summary.',
};

const mockSeasonsWithEpisodes: SeasonWithEpisodes[] = [
  {
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
    episodes: [
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
    ],
    url: 'http://example.com/season-url',
  },
];

const mockActiveSeasonId = 1;
const mockSetActiveSeasonId = jest.fn();

describe('ShowDetail', () => {
  beforeEach(() => {
    (useShowDetails as jest.Mock).mockReturnValue({
      details: mockDetails,
      seasonsWithEpisodes: mockSeasonsWithEpisodes,
      activeSeasonId: mockActiveSeasonId,
      setActiveSeasonId: mockSetActiveSeasonId,
    });
  });

  it('should render correctly with mock data', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ShowDetail />
      </MemoryRouter>
    );

    // Check if season tabs are rendered
    expect(screen.getByText('Season 1')).toBeInTheDocument();

    // Check if episode list is rendered
    expect(screen.getByText('Episode 1')).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call setActiveSeasonId when a season tab is clicked', () => {
    render(
      <MemoryRouter>
        <ShowDetail />
      </MemoryRouter>
    );

    const seasonTab = screen.getByText('S01');
    expect(seasonTab).toBeInTheDocument();

    // Click on the season tab
    fireEvent.click(seasonTab);

    // Check if setActiveSeasonId was called
    expect(mockSetActiveSeasonId).toHaveBeenCalledWith(1);
  });
});
