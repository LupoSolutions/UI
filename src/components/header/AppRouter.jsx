import React from 'react';
import '../../../css/app.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter



