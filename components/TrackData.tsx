import styles from "../styles/TrackData.module.css";
import { get_float_rand } from "../utils/numberHelper";

type TrackType = {
  src: string;
  title: string;
  albumTitle: string;
};

export function TrackData(prop: TrackType) {
  return (
    <div className={styles.container}>
      <img
        className={styles.cover}
        src={prop.src}
        style={{
          transform: `rotate(${get_float_rand(0.3, 2)}deg)`,
        }}
      />
      <div
        className={styles.title}
        style={{
          transform: `rotate(${-get_float_rand(0.2, 0.7)}deg)`,
        }}
      >
        {prop.title}
      </div>
      <div
        className={styles.albumtitle}
        style={{
          transform: `rotate(${get_float_rand(0.2, 0.7)}deg)`,
        }}
      >
        {prop.albumTitle}
      </div>
    </div>
  );
}
