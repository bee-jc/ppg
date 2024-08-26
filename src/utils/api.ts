import axios from 'axios';
import { API_URLS } from '../config/config';
import { Episode, Show, Season } from '../types/types';

// Helper function to handle API requests
const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

// Function to fetch show details by ID
export const fetchShowDetails = async (id: number): Promise<Show> => {
  const url = API_URLS.fetchShowDetails(id);
  return fetchData(url);
};

// Function to fetch episodes for a show by ID
export const fetchEpisodes = async (id: number): Promise<Episode[]> => {
  const url = API_URLS.fetchEpisodes(id);
  return fetchData(url);
};

// Function to fetch episode details by ID
export const fetchEpisodeDetails = async (id: number): Promise<Episode> => {
  const url = API_URLS.fetchEpisodeDetails(id);
  return fetchData(url);
};

export const fetchSeasons = async (id: number): Promise<Season[]> => {
  const url = API_URLS.fetchSeasons(id);
  return fetchData<Season[]>(url);
};
