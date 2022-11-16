import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Contexts/UserContext";
import SignIn from "./Pages/Sign-In";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home/Index";

export default function App() {
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")));
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
};