import React from "react";
import { Confirm } from "./ConfirmButton";
import { Welcome } from "./WelcomeMsg";
import Page from "../Shared/Page";

export default function Settings() {
  return (
    <Page name="settings">
      SETTINGS
      <Welcome />
      <Confirm />
    </Page>
  );
}
