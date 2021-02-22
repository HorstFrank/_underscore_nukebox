// import styles from "./../styles/PlayerReact.module.css";
// import ReactAudioPlayer from "react-audio-player";

// import React, { useState, useEffect, useRef } from "react";
import React, { useState } from "react";

const PlayerReact = () => {
  // State
  // const [trackIndex, setTrackIndex] = useState(0);
  // const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="audio-player">
      {/* <div className="track-info">
        <img
          className="artwork"
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <h2>{title}</h2>
        <h3>{artist}</h3>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
      </div> */}
    </div>
  );
};

export default PlayerReact;
