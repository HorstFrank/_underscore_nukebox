import styles from "./../styles/SongListItem.module.css";

type PropType = {
  coversrc: string;
  songtitle: string;
  albumtitle: string;
};

export function SongListItem(props: PropType) {
  return (
    <div className={styles.songlistcontainer}>
      <div>
        <img className={styles.songlistcover} src={props.coversrc} />
      </div>
      <div className={styles.songlistsongtextcontainer}>
        <div className={styles.songlistsongtitle}>{props.songtitle}</div>
        <div className={styles.songlistAlbumtext}>{props.albumtitle}</div>
      </div>
    </div>
  );
}
