import React from "react";
import ReviewModal from "./components/ReviewModal";
import "./App.css";

const App = () => {
    return (
        <div>
            <header>
                <h1>Store</h1>
            </header>
            <nav>
                <div className="main">
                    <a href="Home.html">STORE</a>
                    <a href="" className="main-active">
                        REVIEWS
                    </a>
                    <a href="About.html">ABOUT</a>
                    <a href="Contact.html">CONTACT</a>
                </div>
            </nav>
            <ReviewModal />
        </div>
    );
};

export default App;
