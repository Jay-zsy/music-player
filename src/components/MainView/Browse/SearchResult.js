import React from "react";
import Songs from "./Songs";
import Row from "./Row";
import NotFound from "./NotFound";
import styles from "./SearchResult.module.scss";
export default function SearchResult({
  query,
  queryResults,
  play,
  pause,
  currentPlayback,
}) {
  return queryResults?.albums?.items.length === 0 &&
    queryResults?.artists?.items.length === 0 &&
    queryResults?.tracks?.items.length === 0 &&
    queryResults?.playlists?.items.length === 0 &&
    queryResults?.shows?.items.length === 0 ? (
    <NotFound query={query} />
  ) : (
    <>
      {queryResults?.tracks && (
        <Songs
          songs={queryResults?.tracks?.items}
          play={play}
          pause={pause}
          currentPlayback={currentPlayback}
        />
      )}
      {queryResults?.artists?.items.length > 0 && (
        <Row contexts={queryResults?.artists?.items} label="Artists" />
      )}
      {queryResults?.albums?.items.length > 0 && (
        <Row contexts={queryResults?.albums?.items} label="Albums" />
      )}
      {queryResults?.playlists?.items.length > 0 && (
        <Row contexts={queryResults?.playlists?.items} label="Playlists" />
      )}
      {queryResults?.shows?.items.length > 0 && (
        <Row contexts={queryResults?.shows?.items} label="Podcasts" />
      )}
    </>
  );
}
