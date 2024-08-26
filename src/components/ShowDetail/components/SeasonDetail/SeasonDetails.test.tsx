import { render, screen } from '@testing-library/react';
import SeasonDetails from './SeasonDetails';

describe('SeasonDetails', () => {
  const seasonNumber = 1;
  const episodeCount = 10;

  it('should render the season number and episode count correctly', () => {
    const { asFragment } = render(
      <SeasonDetails seasonNumber={seasonNumber} episodeCount={episodeCount} />
    );

    const formattedNumber =
      seasonNumber < 10 ? `S0${seasonNumber}` : `S${seasonNumber}`;
    expect(screen.getByText(formattedNumber)).toBeInTheDocument();
    expect(screen.getByText(`(${episodeCount} episodes)`)).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
