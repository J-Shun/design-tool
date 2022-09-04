import SideMenu from "./component/SideMenu";
import Background from "./component/Background";
import Button from "./component/Button";
import KeyName from "./component/KeyName";
import PixelCanvas from "./component/PixelCanvas";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <SideMenu />
        <Routes>
          <Route path="/" element={<Background />} />
          <Route path="/button" element={<Button />} />
          <Route path="/keyname" element={<KeyName />} />
          <Route path="/pixelcanvas" element={<PixelCanvas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
