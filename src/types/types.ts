export type PlayerData = {
  tracks: TrackData[];
  currentTrack: TrackData;
  isPlaying: boolean;
};

export type TrackData = {
  id: number;
  name: string;
  author: string;
  release_date: string | null;
  genre: string;
  duration_in_seconds: number;
  album: string;
  logo: null;
  track_file: string;
  stared_user: User[];
};

export type User = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};
