import React from "react";
import { StateContext, useGlobalStateContext } from "../GlobalContext";

const Page = ({ name, children }) => {
  const { page } = useGlobalStateContext(StateContext);
  console.log(`page:`, page, `name: `, name);
  if (page !== name) {
    return null;
  }
  return <div>{children}</div>;
};

export default Page;
