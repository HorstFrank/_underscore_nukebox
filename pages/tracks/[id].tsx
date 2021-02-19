import Head from "next/head";
// import { Header } from "../../components/Header";
import styles from "../../styles/Player.module.css";
import React, { useEffect, useState } from "react";
import { getTrack } from "./../api/getTracks";

import { useRouter } from "next/router";

import { HeadNavigation } from "../../components/HeadNavigation";
import { TrackData } from "../../components/TrackData";
import { Player } from "../../components/Player";
import covers from "../../server/cover.json";
// import songs from "../assets/jsons/music.json";
// console.log({ covers });

// import Link from "next/link";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;
  const [track, setTrack] = useState(null);

  useEffect(() => {
    console.log({ id });
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => {
      //   console.log({ newTracks });
      setTrack(newTrack);
    });
  }, [id]);

  console.log({ track });

  if (!track) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>_underscore_ NukeBox</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <Header /> */}
      <div>
        <div className={styles.container}>
          <HeadNavigation />
          <TrackData
            title={track.title}
            albumTitle={track.albumTitle}
            src={covers[track.albumTitle].cover}
          />
          <Player fileUrl={track.fileUrl} />
        </div>
      </div>
    </div>
  );
}

// import { useRouter } from "next/router";

// const Post = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   fetch("http://localhost:3000/api/tracks/" + id)
//     .then((response) => response.json())
//     .then((data) => {
//       //   console.log(data);
//       return <p>Post: fgdhfg</p>;
//       //   return <p>Post: {data.title}</p>;
//     });
// };

// export default Post;
