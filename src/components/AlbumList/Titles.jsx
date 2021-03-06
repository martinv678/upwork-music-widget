import React from "react";
import PropTypes from "prop-types";
import theme from "../../theme";

const propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
};

const styles = {
  root: {
    flex: 1
  },
  list: {
    padding: 0,
    listStyleType: "none"
  },
  button: {
    padding: `15px 30px`,
    background: "transparent",
    color: "#bbbbbb",
    border: "none",
    borderRight: "2px solid black",
    width: "100%",
    fontFamily: theme.fonts.main,
    textAlign: "left",
    fontSize: 14,
    outline: "none",
    cursor: "pointer"
  },
  selected: {
    color: "white",
    fontWeight: "bold",
    borderRight: `4px solid ${theme.primary}`
  }
};

function returnSelectedButtonStyles(selected) {
  if (selected) {
    return {
      ...styles.button,
      ...styles.selected
    };
  }

  return styles.button;
}

export function Titles({ titles, onTitleClick, selected }) {
  return (
    <div style={styles.root}>
      <ul style={styles.list}>
        {titles.map(title => (
          <li key={title}>
            <button
              style={returnSelectedButtonStyles(title === selected)}
              onClick={() => onTitleClick(title)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Titles.propTypes = propTypes;
