import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Song = props => {
  function handleChangeLyrics() {
    const { dispatch } = props;

    let action = {
      type: "UPDATE_CURRENT_LINE",
      currentLine: props.songState.currentLine
    };
    dispatch(action);
  }

  function handlePickSong(songNumber) {
    let lyrics = songNumber;
    console.log(lyrics);

    // var id = event;
    // alert(id);
    // const { dispatch } = props;
    // let action = {
    //   type: "PICK_SONG",
    //   currentSong: props.songState.lyrics
    // };
    // dispatch(action);
  }

  return (
    <div>
      <h3 onClick={()=>handlePickSong(props.songState.lyrics[1].songId)}>{props.songState.lyrics[1].songId}</h3>
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
