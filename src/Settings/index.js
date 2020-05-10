import React from "react";
import { Confirm } from "./ConfirmButton";
import { Welcome } from "./WelcomeMsg";
import Page from "../Shared/Page";
import { CoinGrid } from "./CoinGrid";
import Search from "./Search";

export default function Settings() {
  return (
    <Page name="settings">
      <Welcome />
      <CoinGrid topSection />
      <Confirm />
      <Search />
      <CoinGrid />
    </Page>
  );
}
