import React from "react";
import { Layout } from "./styles/Layout";

import GlobalContext from "./GlobalContext";

function App() {
  return (
    <Layout>
      <GlobalContext />
    </Layout>
  );
}

export default App;
