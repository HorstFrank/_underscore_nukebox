import { useEffect } from "react";
import styles from "../styles/Player.module.css";

type AudioDingens = {
  fileUrl: string;
};

export function Player(props: AudioDingens) {
  return (
    <div className={styles.xxx}>
      <audio
        id="my-audio"
        className={styles.player}
        controls
        src={props.fileUrl}
      >
        Willkommen in den 90ern.
      </audio>
    </div>
  );
}
