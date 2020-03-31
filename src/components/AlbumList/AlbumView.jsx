import React from "react";
import theme from "../../theme";

const styles = {
  root: {
    flex: 3,
    padding: 40,
    background: "rgb(21, 21, 21)"
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0
  },
  item: {
    padding: 15,
    color: "#bbbbbb"
  },
  title: {
    margin: 0
  },
  heading: {
    marginTop: 0
  },
  artist: {
    marginBottom: 0,
    marginTop: 3,
    fontSize: 11,
    color: theme.primary
  }
};

export function AlbumView({ album }) {
  return (
    <div style={styles.root}>
      {album ? (
        <>
          <h1 style={styles.heading}>{album.album}</h1>
          <ul style={styles.list}>
            {album.tracks.map(track => (
              <li key={track.title} style={styles.item}>
                <p style={styles.title}>
                  {track.track.no}. {track.title}
                </p>
                <p style={styles.artist}>{track.artist}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Please select an album to view</p>
      )}
    </div>
  );
}
