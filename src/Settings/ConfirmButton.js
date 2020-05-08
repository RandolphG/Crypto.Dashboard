import React from "react";
import { CenterDiv, ConfirmBtn } from "../styles/Layout";
import { StateContext, useGlobalStateContext } from "../GlobalContext";

export const Confirm = () => {
  const { confirmFavorites } = useGlobalStateContext(StateContext);
  return (
    <CenterDiv>
      <ConfirmBtn onClick={() => confirmFavorites()}>
        Confirm Favorites
      </ConfirmBtn>
    </CenterDiv>
  );
};
