import React from "react";
import { Confirm } from "./ConfirmButton";
import { Welcome } from "./WelcomeMsg";

export default function Settings() {
  return (
    <div>
      SETTINGS
      <Welcome />
      <Confirm />
    </div>
  );
}
