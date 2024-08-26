export interface Episode {
  id: number;
  name: string;
  image: { original: string; medium?: string };
  summary: string;
  season: number;
  imageUrl?: string;
}

export interface Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string | null;
  endDate: string | null;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  };
  webChannel: any;
  image: {
    original: string | null;
  } | null;
  summary: string | null;
}

export interface Show {
  id: number;
  name: string;
  image: { original: string };
  summary: string;
}

export interface EpisodeState {
  details: Episode;
  loading: boolean;
  error: string | null;
}

export interface ShowState {
  details: Show;
  episodes: Episode[];
  seasons: Season[];
  loading: boolean;
}

export interface SeasonWithEpisodes extends Season {
  episodes: Episode[];
}
