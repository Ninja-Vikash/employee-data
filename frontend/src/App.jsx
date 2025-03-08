import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Update from "./pages/Update";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/update/:employeeId" element={<Update />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
