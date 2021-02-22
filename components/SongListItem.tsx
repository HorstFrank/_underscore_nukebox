import styles from "./../styles/SongListItem.module.css";
import { get_int_rand } from "../utils/numberHelper";
import { get_rand_rositve_or_negative } from "../utils/numberHelper";

type PropType = {
  coversrc: string;
  songtitle: string;
  albumtitle: string;
};

export function SongListItem(props: PropType) {
  return (
    <div
      className={styles.songlistcontainer}
      style={{
        transform: `rotate(${get_rand_rositve_or_negative(
          get_int_rand(1, 3)
        )}deg)`,
      }}
    >
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
