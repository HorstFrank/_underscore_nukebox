import styles from "../styles/Player.module.css";

type AudioDingens = {
  fileUrl: string;
};
//"fileUrl": "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/KBOO/The_Underscore_Orkestra/No_Money_No_Honey_All_We_Got_Is_Us/The_Underscore_Orkestra_-_01_-_Amari_Szi.mp3"

export function Player(props: AudioDingens) {
  return (
    <div className={styles.xxx}>
      <audio controls src={props.fileUrl}>
        Willkommen in den 90ern.
      </audio>
    </div>
  );
}
