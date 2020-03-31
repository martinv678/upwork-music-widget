import React, { useCallback } from "react";
import { AlbumView } from "./AlbumView";
import { Titles } from "./Titles";
import { TYPES } from "../../providers/uploaded-audio/actions";

import {
  useUploadedAudioDispatch,
  useGetSelectedAlbum,
  useGetAlbumTitles,
  useHasLoadedAlbums
} from "../../providers/uploaded-audio";

const styles = {
  root: {
    display: "flex"
  }
};

export default function AlbumList() {
  const dispatch = useUploadedAudioDispatch();
  const selectedAlbum = useGetSelectedAlbum();
  const titles = useGetAlbumTitles();
  const hasLoadedAlbums = useHasLoadedAlbums();

  const onAlbumSelect = useCallback(
    title => {
      dispatch({ type: TYPES.SELECT_ALBUM, payload: title });
    },
    [dispatch]
  );

  if (!hasLoadedAlbums) {
    return (
      <div>
        Please start by uploading some of your banging tunez!{" "}
        <span role="img">🔥</span>
      </div>
    );
  }

  return (
    <div style={styles.root}>
      <Titles
        titles={titles}
        onTitleClick={onAlbumSelect}
        selected={selectedAlbum ? selectedAlbum.album : ""}
      />
      <AlbumView album={selectedAlbum} />
    </div>
  );
}
