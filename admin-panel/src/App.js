import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainDashBoard from "./components/MainDashBoard/MainDashBoard";
import RightSide from "./components/RightSideComponent/RightSide";
import SideBar from "./components/SideBarComponent/SideBar";
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <MainDashBoard />
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
