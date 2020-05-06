import React from "react";
import { GlobalStyle, Layout } from "./styles/Layout";
import AppBar from "./AppBar";

import { GlobalProvider } from "./globalContext";

function App() {
  return (
    <Layout>
      <GlobalProvider>
        <GlobalStyle />
        <AppBar />
        <span>EMPTY SPACE</span>
      </GlobalProvider>
    </Layout>
  );
}

export default App;
