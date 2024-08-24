import React, { useEffect, useState } from "react";
// import { BsTypeH1 } from "react-icons/bs";
import "./App.css";
import LoginLayout from "./container/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [data, setData] = useState(null);
    const [tabs, setTabs] = useState("Contact Form");

    // useEffect(() => {
    //     fetch(`${endpoints.getAllContacts}`)
    //         .then((res) => res.json())
    //         .then((data) => setData(data.message));
    // }, []);
    // console.log({ data });

    const handleTabs = (e) => {
        setTabs(e);
        // console.log({ tabs: e });
    };

    const Token = localStorage.getItem("token");

    return (
        <>
            <Router data-testid="App">
                <Routes>
                    <Route path="/" element={<LoginLayout />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
