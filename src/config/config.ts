const API_BASE_URL = 'https://api.tvmaze.com';

export const API_URLS = {
  fetchShowDetails: (id: number) => `${API_BASE_URL}/shows/${id}`,
  fetchEpisodes: (id: number) => `${API_BASE_URL}/shows/${id}/episodes`,
  fetchEpisodeDetails: (id: number) => `${API_BASE_URL}/episodes/${id}`,
  fetchSeasons: (id: number) => `${API_BASE_URL}/shows/${id}/seasons`,
};

// Configuration for Redux slice
export const SLICE_NAMES = {
  show: 'show',
  episode: 'episode',
};

// Redux action types
export const ACTION_TYPES = {
  getEpisodeDetails: `${SLICE_NAMES.episode}/getEpisodeDetails`,
  getEpisodes: `${SLICE_NAMES.show}/getEpisodes`,
  getSeasons: `${SLICE_NAMES.show}/getSeasons`,
  getShowDetails: `${SLICE_NAMES.show}/getShowDetails`,
};

// Error Messages
export const ERROR_MESSAGES = {
  fetchEpisodeDetailsError: 'Failed to fetch episode details',
};

export const POWERPUFF_GIRLS_SHOW_ID = 1955;

export const HEADLINE_NOTE =
  'The Powerpuff Girls is an award-winning animated action series about three super-powered little girls Bubbles, Blossom and Buttercup with one very big mission: saving the world before bedtime.';
