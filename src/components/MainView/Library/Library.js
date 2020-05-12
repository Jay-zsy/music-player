import React from "react";
import Albums from "./Albums";
import Artists from "./Artists";
import Playlists from "./Playlists";
import Podcasts from "./Podcasts";
export default function Library({
  currentTab,
  playlists,
  podcasts,
  topArtists,
  savedAlbums,
}) {
  return (
    <>
      {currentTab === "Playlists" && <Playlists playlists={playlists} />}

      {currentTab === "Podcasts" && <Podcasts podcasts={podcasts} />}

      {currentTab === "Artists" && <Artists artists={topArtists} />}

      {currentTab === "Albums" && <Albums albums={savedAlbums} />}
    </>
  );
}
