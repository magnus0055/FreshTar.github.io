import React from "react";
import './App.css';
import SideBar from "./components/SideBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Coding from "./pages/Coding";
import Academics from "./pages/Academics";
import FileManager from "./pages/FileManager";
import Campus from "./pages/Campus";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";






function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/messages" element={<Academics />} />
          <Route path="/analytics" element={<Campus />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
