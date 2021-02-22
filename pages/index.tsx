import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { SongListItem } from "../components/SongListItem";
import { getTracks } from "./api/getTracks";

import cover from "../assets/jsons/cover.json";
import styles from "../styles/Home.module.css";
import { sortByTitle } from "../utils/sorter";

export default function Home() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });
  }, []);

  const sortedSongs = tracks.sort(sortByTitle);

  const list = sortedSongs.map((e) => {
    return (
      <Link href={`/tracks/${e.id}`} key={e.id}>
        <a>
          <SongListItem
            coversrc={cover[e.albumTitle].cover}
            songtitle={e.title}
            albumtitle={e.albumTitle}
          />
        </a>
      </Link>
    );
  });

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
