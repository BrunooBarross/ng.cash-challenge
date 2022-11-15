import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
       /*  <UserContext.Provider value={{ userData, setUserData }}> */
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<SignIn />} /> */}
                </Routes>
            </BrowserRouter>
        /* </UserContext.Provider> */
    );
};