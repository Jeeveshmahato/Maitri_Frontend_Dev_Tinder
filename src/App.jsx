import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import EditProfile from "./Components/EditProfile";
import Test from "./Components/Test";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
