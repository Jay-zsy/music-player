import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { StylesProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styles from "../Components/Topbar/Topbar.module.scss";

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Playlists", () => (
    <StylesProvider injectFirst>
      <Button className={styles.tabs}>Playlists</Button>
    </StylesProvider>
  ))
  .add("Podcasts", () => (
    <StylesProvider injectFirst>
      <Button className={styles.tabs}>Podcasts</Button>
    </StylesProvider>
  ))
  .add("Artists", () => (
    <StylesProvider injectFirst>
      <Button className={styles.tabs}>Artists</Button>
    </StylesProvider>
  ))
  .add("Album", () => (
    <StylesProvider injectFirst>
      <Button className={styles.tabs} onClick={action("button-clicked")}>
        Album
      </Button>
    </StylesProvider>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));
