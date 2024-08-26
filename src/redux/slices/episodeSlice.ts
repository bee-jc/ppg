import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEpisodeDetails } from '../../utils/api';
import { Episode, EpisodeState } from '../../types/types';
import { ACTION_TYPES, ERROR_MESSAGES, SLICE_NAMES } from '../../config/config';

export const getEpisodeDetails = createAsyncThunk<Episode, number>(
  ACTION_TYPES.getEpisodeDetails,
  async (id: number) => {
    return fetchEpisodeDetails(id);
  }
);

const initialState: EpisodeState = {
  details: {
    id: 0,
    name: '',
    image: { original: '' },
    summary: '',
    season: 0,
    imageUrl: '',
  },
  loading: false,
  error: null,
};

const episodeSlice = createSlice({
  name: SLICE_NAMES.episode,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEpisodeDetails.pending, (state) => {
        return {
          ...state,
          loading: true,
          error: null,
        };
      })
      .addCase(getEpisodeDetails.fulfilled, (state, action) => {
        return {
          ...state,
          details: action.payload,
          loading: false,
        };
      })
      .addCase(getEpisodeDetails.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error:
            action.error.message || ERROR_MESSAGES.fetchEpisodeDetailsError,
        };
      });
  },
});

export default episodeSlice.reducer;
