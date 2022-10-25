import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { 
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
