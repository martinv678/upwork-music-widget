import { TYPES } from './actions';

export const initialState = {
  error: "",
  results: [],
  loading: false,
  selectedAlbumTitle: ""
}

export function uploadedAudioReducer(state, action) {
  switch (action.type) {
    case TYPES.FETCH_RESULTS:
      return {
        ...state,
        loading: true,
        selectedAlbumTitle: ""
      };

    case TYPES.FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload
      };

    case TYPES.SELECT_ALBUM:
      return {
        ...state,
        selectedAlbumTitle: action.payload
      };

    default:
      return state;
  }
}