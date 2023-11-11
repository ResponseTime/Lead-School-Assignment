import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Display from "./components/Display";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/main" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
