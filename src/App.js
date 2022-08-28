import Background from "./component/Background";
import Button from "./component/Button";
import SideMenu from "./component/SideMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <SideMenu />
        <Routes>
          <Route path="/" element={<Background />} />
          <Route path="/button" element={<Button />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
