import { Route, Routes } from "react-router";
import Layout from "Layout";

import "./styles/App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
