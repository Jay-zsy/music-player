import React from "react";
import Songs from "./Songs";
import Row from "./Row";
import NotFound from "./NotFound";
import styles from "./SearchResult.module.scss";
export default function SearchResult({ query, queryResults }) {
  return queryResults?.albums?.items.length === 0 &&
    queryResults?.artists?.items.length === 0 &&
    queryResults?.tracks?.items.length === 0 &&
    queryResults?.playlists?.items.length === 0 &&
    queryResults?.shows?.items.length === 0 ? (
    <NotFound query={query} />
  ) : (
    <>
      <Songs songs={queryResults.tracks} />
      <Row context={queryResults.artists} />
      <Row context={queryResults.albums} />
      <Row context={queryResults.playlists} />
      <Row context={queryResults.shows} />
    </>
  );
}
