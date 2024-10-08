import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Home } from "./pages";

const App = () => {
  return (
    <main>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </Router>
    </main>
  );
};

export default App;