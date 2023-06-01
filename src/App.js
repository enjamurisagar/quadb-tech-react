import React from "react";
import "./App.css";

//routing
import { Routes, Route } from "react-router-dom";

//components
import Home from "./components/Home";
import ShowDetail from "./components/ShowDetail";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/quadb-tech-react" element={<Home />} />
        <Route
          path={`/quadb-tech-react/shows/:showid`}
          element={<ShowDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
