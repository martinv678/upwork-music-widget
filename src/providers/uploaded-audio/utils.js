export function sortTracksToAlbums(arr, file) {
  const album = arr.find(item => item.album === file.album);
  
  if (!album) {
    return [...arr, {
      album: file.album,
      tracks: [file],
    }];
  }

  return arr.map(item => {
    if (item.album === album.album) {
      return {
        ...album,
        tracks: [...album.tracks, file],
      };
    }

    return item;
  });
}

export function sortTracks(album) {
  return {
    ...album,
    tracks: album.tracks.sort((a, b) => a.track.no - b.track.no),
  }
}

export function formatResults(results) {
  return results 
    .map(item => item.common)
    .reduce(sortTracksToAlbums, [])
    .map(sortTracks);
}