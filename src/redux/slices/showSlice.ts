import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchShowDetails, fetchEpisodes, fetchSeasons } from '../../utils/api';
import { Episode, Season, Show, ShowState } from '../../types/types';
import { ACTION_TYPES, SLICE_NAMES } from '../../config/config';

export const getShowDetails = createAsyncThunk<Show, number>(
  ACTION_TYPES.getShowDetails,
  async (id: number) => {
    return fetchShowDetails(id);
  }
);

export const getEpisodes = createAsyncThunk<Episode[], number>(
  ACTION_TYPES.getEpisodes,
  async (id: number) => {
    return fetchEpisodes(id);
  }
);

export const getSeasons = createAsyncThunk<Season[], number>(
  ACTION_TYPES.getSeasons,
  async (id: number) => {
    return fetchSeasons(id);
  }
);

const initialState: ShowState = {
  details: {
    id: 0,
    name: '',
    image: { original: '' },
    summary: '',
  },
  episodes: [],
  seasons: [],
  loading: false,
};

const showSlice = createSlice({
  name: SLICE_NAMES.show,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShowDetails.fulfilled, (state, action) => {
      return {
        ...state,
        details: action.payload,
        loading: false,
      };
    });
    builder.addCase(getEpisodes.fulfilled, (state, action) => {
      return {
        ...state,
        episodes: action.payload,
        loading: false,
      };
    });
    builder.addCase(getSeasons.fulfilled, (state, action) => {
      return {
        ...state,
        seasons: action.payload,
        loading: false,
      };
    });
  },
});

export default showSlice.reducer;
