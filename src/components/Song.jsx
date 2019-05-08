import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Song = props => {
  function handleChangeLyrics(event) {
    event.preventDefault();
    const { dispatch } = props;

    let action = {
      type: "UPDATE_CURRENT_LINE",

      currentLine: props.songState.currentLine
    };
    dispatch(action);
  }

  return (
    <div>
      <h3>{props.songState.lyrics[1].songId}</h3>
      <br />
      <div onClick={handleChangeLyrics}>
        <h4>{props.songState.lyrics[1].text[props.songState.currentLine]}</h4>
      </div>
    </div>
  );
};

const mapStateProps = state => {
  return {
    songState: state
  };
};

Song.propType = {
  songState: PropTypes.object
};

export default connect(mapStateProps)(Song);
