import React from "react";
import { Confirm } from "./ConfirmButton";
import { Welcome } from "./WelcomeMsg";
import Page from "../Shared/Page";
import { CoinGrid } from "./CoinGrid";

export default function Settings() {
  return (
    <Page name="settings">
      <Welcome />
      <Confirm />
      <CoinGrid />
    </Page>
  );
}
