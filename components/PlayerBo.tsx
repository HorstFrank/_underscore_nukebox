import { useRef } from "react";

type AudioType = {
  fileUrl: string;
};

export function Player(props: AudioType) {
  // Quelle:
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
  // Weitere Möglichkeiten:
  // https://github.com/Jam3/simple-media-element
  // https://www.npmjs.com/package/web-audio-player
  const ppp = useRef(null);

  return (
    <div>
      <audio ref={ppp} src={props.fileUrl}></audio>
      <div>
        <button onClick={() => ppp.current.play()}>Play</button>
        <button onClick={() => ppp.current.pause()}>Pause</button>
      </div>
    </div>
  );
}
