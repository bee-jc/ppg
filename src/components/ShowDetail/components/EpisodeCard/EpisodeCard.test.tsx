import React from 'react';
import { render, screen } from '@testing-library/react';
import EpisodeCard from './EpisodeCard';
import { Episode } from '../../../../types/types';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

describe('EpisodeCard', () => {
  const defaultEpisode: Episode = {
    id: 1,
    name: 'Test Episode',
    image: {
      original: 'http://example.com/image.jpg',
      medium: 'http://example.com/medium.jpg',
    },
    summary: 'This is a test summary.',
    season: 1,
  };

  it('should render an image when the episode has an image URL', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <EpisodeCard episode={defaultEpisode} />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Test Episode')).toHaveAttribute(
      'src',
      'http://example.com/medium.jpg'
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a placeholder when the episode does not have an image URL', () => {
    const noImageEpisode: Episode = {
      ...defaultEpisode,
      image: { medium: '', original: '' },
    };

    render(
      <MemoryRouter>
        <EpisodeCard episode={noImageEpisode} />
      </MemoryRouter>
    );

    expect(screen.getByText('No image available')).toBeInTheDocument();
  });

  it('should render the episode title correctly', () => {
    render(
      <MemoryRouter>
        <EpisodeCard episode={defaultEpisode} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Episode')).toBeInTheDocument();
  });

  it('should render the episode summary correctly', () => {
    render(
      <MemoryRouter>
        <EpisodeCard episode={defaultEpisode} />
      </MemoryRouter>
    );

    expect(screen.getByText(defaultEpisode.summary)).toBeInTheDocument();
  });

  it('should render a fallback text when there is no episode summary', () => {
    const noSummaryEpisode: Episode = {
      ...defaultEpisode,
      summary: '',
    };

    render(
      <MemoryRouter>
        <EpisodeCard episode={noSummaryEpisode} />
      </MemoryRouter>
    );

    expect(screen.getByText('No summary available.')).toBeInTheDocument();
  });

  it('should have the correct link to the episode page', () => {
    render(
      <MemoryRouter>
        <EpisodeCard episode={defaultEpisode} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link')).toHaveAttribute('href', '/episode/1');
  });

  // Snapshot test
  it('should match the snapshot', () => {
    const tree = create(
      <MemoryRouter>
        <EpisodeCard episode={defaultEpisode} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
