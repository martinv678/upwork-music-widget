import React from "react";
import { UploadedAudioProvider } from "../../providers/uploaded-audio";
import FileImporter from "../FileImporter";
import AlbumList from "../AlbumList";

const styles = {
  root: {
    background: "black",
    padding: 30,
    fontFamily: `"Inter var", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif`,
    color: "white"
  },
  title: {
    marginTop: 0
  }
};

export default function App() {
  return (
    <main style={styles.root}>
      <UploadedAudioProvider>
        <h1 style={styles.title}>Martin's Banging Music Widget</h1>
        <FileImporter />
        <AlbumList />
      </UploadedAudioProvider>
    </main>
  );
}
