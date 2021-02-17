import Head from "next/head";
import { Header } from "../components/Header";
import { SongListItem } from "../components/SongListItem";
import styles from "../styles/Home.module.css";

import cover from "../assets/jsons/cover.json";
import songs from "../assets/jsons/music.json";

// console.log(songs);
const sortedSongs = songs.sort((a, b) => {
  const a = a.title;
  const b = b.title;
  // return a > b ? 1 : a < b ? -1 : 0;
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
});

const list = sortedSongs.map((e) => {
  return (
    <SongListItem
      key={e.id.toString()}
      coversrc={cover[e.albumTitle].cover}
      songtitle={e.title}
      albumtitle={e.albumTitle}
    />
  );
});

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>_underscore_ NukeBox</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />

      {list}
    </div>
  );
}
