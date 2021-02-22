import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import { HeadNavigation } from "../../components/HeadNavigation";
import { Player } from "../../components/PlayerBo";
import { SvgArrow } from "../../components/SvgArrow";
import { getTrack } from "./../api/getTracks";
import { TrackData } from "../../components/TrackData";

import { get_int_rand } from "../../utils/numberHelper";

import covers from "../../server/cover.json";
import styles from "../../styles/TrackView.module.css";

export default function Track() {
  const [track, setTrack] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // console.log({ id });
    if (typeof id !== "string") {
      return;
    }
    getTrack(id).then((newTrack) => {
      //   console.log({ newTracks });
      setTrack(newTrack);
    });
  }, [id]);

  // console.log({ track });

  if (!track) {
    return <div>Loading ...</div>;
  }

  const dopeyArrowLine = Array(get_int_rand(40, 100))
    .fill(null)
    .map((_, k) => {
      return (
        <div
          style={{
            marginTop: `${get_int_rand(40, 900)}px`,
            textAlign: "center",
            marginLeft: get_int_rand(-300, 300),
          }}
          key={k}
        >
          <SvgArrow
            width={get_int_rand(20, 100)}
            height={get_int_rand(100, 400)}
            color={`hsl(216, 96%, ${get_int_rand(18, 50)}%)`}
            strokeWidth={get_int_rand(1, 20)}
          />
        </div>
      );
    });

  const dopeyArrowLineHorizontal = Array(get_int_rand(200, 800))
    .fill(null)
    .map((_, k) => {
      return (
        <div
          style={{
            marginTop: `${get_int_rand(40, 900)}px`,
            textAlign: "center",
          }}
          key={k}
        >
          <SvgArrow
            rotate={-90}
            width={get_int_rand(20, 100)}
            height={get_int_rand(100, 400)}
            color={`hsl(216, 96%, ${get_int_rand(18, 50)}%)`}
            strokeWidth={get_int_rand(1, 20)}
          />
        </div>
      );
    });

  return (
    <div>
      <Head>
        <title>_underscore_ NukeBox</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <Header /> */}
      <HeadNavigation />
      <TrackData
        title={track.title}
        albumTitle={track.albumTitle}
        src={covers[track.albumTitle].cover}
      />
      <div style={{ margin: "100px 0 400px 0", textAlign: "center" }}>
        <SvgArrow
          width={50}
          height={100}
          color={`hsl(216, 96%, 30%`}
          strokeWidth={10}
        />
      </div>
      <div>{dopeyArrowLine}</div>
      <div className={styles.arrowcontainerright}>
        <div className={styles.arrowcontainerrightinner}>
          {dopeyArrowLineHorizontal}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <SvgArrow
            rotate={-90}
            width={100}
            height={100}
            color={`hsl(216, 96%, 30%`}
            strokeWidth={10}
          />
          <Player fileUrl={track.fileUrl} />
        </div>
      </div>

      {/* <AudioPlayer tracks={tracks} /> */}
    </div>
  );
}
