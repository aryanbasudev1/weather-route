import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div>
      <SearchBox></SearchBox>
    </div>
  );
}

export default App;
