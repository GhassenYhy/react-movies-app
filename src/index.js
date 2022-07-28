import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import MovieDetails from "./MovieDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/details/:id" element={<MovieDetails />} />
    </Routes>
  </Router>
);
