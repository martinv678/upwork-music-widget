import React from "react";
import { useOnAudioFileUpload } from "../../providers/uploaded-audio";

const styles = {
  input: {
    width: 0.1,
    height: 0.1,
    opacity: 0,
    overflow: "hidden",
    position: "absolute",
    zIndex: -1
  },
  label: {
    background: "#5050e2",
    color: "white",
    padding: "15px 30px",
    display: "inline-block",
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 13,
    fontWeight: "bold"
  }
};

export default function FileImporter() {
  const onChange = useOnAudioFileUpload();

  return (
    <form>
      <input
        style={styles.input}
        type="file"
        name="file"
        id="file"
        multiple={true}
        onChange={onChange}
      />
      <label htmlFor="file" style={styles.label}>
        Please select media
      </label>
    </form>
  );
}
