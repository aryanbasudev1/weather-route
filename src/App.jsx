import { RecoilRoot } from "recoil";
import "./App.css";
import SearchBox from "./components/SearchBox";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchBox></SearchBox>
        </Suspense>
      </RecoilRoot>
    </div>
  );
}

export default App;
