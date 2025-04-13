import { Route, BrowserRouter as Router, Routes } from "react-router";
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
