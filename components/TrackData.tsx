import styles from "../styles/TrackData.module.css";

type TrackType = {
  src: string;
  title: string;
  albumTitle: string;
};

export function TrackData(prop: TrackType) {
  return (
    <div>
      <img className={styles.cover} src={prop.src} />
      <div className={styles.title}>{prop.title}</div>
      <div className={styles.albumtitle}>{prop.albumTitle}</div>
    </div>
  );
}
