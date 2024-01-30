import React from "react";
import Dashboard from "./Dashboard/dashboard-card-container";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Dashboard />
      <footer>
        Challenge by{" "}
        <a href="https://www.cresolinfoserv.com" target="_blank">
          cresolinfoserv
        </a>
        . Coded by <a href="/">Supriyo Nag</a>.
      </footer>
    </div>
  );
}
