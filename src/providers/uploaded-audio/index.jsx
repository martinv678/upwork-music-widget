import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import * as mmb from "music-metadata-browser";
import { formatResults } from "./utils";
import { uploadedAudioReducer, initialState } from "./reducer";
import { TYPES } from "./actions";

const UploadedAudioState = createContext(undefined);
const UploadedAudioDispatch = createContext(undefined);

export function UploadedAudioProvider({ children }) {
  const [state, dispatch] = useReducer(uploadedAudioReducer, initialState);

  return (
    <UploadedAudioState.Provider value={state}>
      <UploadedAudioDispatch.Provider value={dispatch}>
        {children}
      </UploadedAudioDispatch.Provider>
    </UploadedAudioState.Provider>
  );
}

UploadedAudioProvider.propTypes = {
  children: PropTypes.node
};

export function useUploadedAudioState() {
  const state = useContext(UploadedAudioState);

  if (!state) {
    throw new Error(
      "This method needs to be used within the UploadedAudioState provider"
    );
  }

  return state;
}

export function useUploadedAudioDispatch() {
  const dispatch = useContext(UploadedAudioDispatch);

  if (!dispatch) {
    throw new Error(
      "This method needs to be used within the UploadedAudioDispatch provider"
    );
  }

  return dispatch;
}

export function useOnAudioFileUpload() {
  const dispatch = useUploadedAudioDispatch();

  return async function uploadAudio(event) {
    dispatch({ type: TYPES.FETCH_RESULTS });

    const promises = Array.from(event.target.files).map(file => {
      return mmb.parseBlob(file, { native: true });
    });

    try {
      const results = await Promise.all(promises);
      const files = formatResults(results);
      dispatch({ type: TYPES.FETCH_RESULTS_SUCCESS, payload: files });
    } catch (err) {
      dispatch({ type: TYPES.ERROR, message: "" });
    }
  };
}

export function useGetSelectedAlbum() {
  const state = useUploadedAudioState();
  return state.results.find(item => item.album === state.selectedAlbumTitle);
}

export function useGetAlbumTitles() {
  const state = useUploadedAudioState();
  return state.results.map(({ album }) => album);
}

export function useHasLoadedAlbums() {
  const state = useUploadedAudioState();
  return !!state.results.length;
}
