// type APItrack = {
//   id: number;
//   handle: string;
//   url: string;
//   title: string;
//   artistName: string;
//   artistUrl: string;
//   albumTitle: string;
//   playbackUrl: string;
//   downloadUrl: string;
//   fileName: string;
//   fileUrl: string;
// };

export async function getTracks() {
  const response = await fetch("/api/tracks");
  const tracks = await response.json();
  return tracks;
}

export async function getTrack(id: string) {
  const response = await fetch(`/api/tracks/${id}`);
  const track = await response.json();
  return track;
}
