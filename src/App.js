import React from "react";
import Fifth from "./pages/fifth/fifthPage";
import First from "./pages/first/firstPage";
import Fourth from "./pages/fourth/fourthPage";
import Navbar from "./pages/navbar/navbar";
import Second from "./pages/second/secondPage";
import Seven from "./pages/seventh/seventhPage";
import Sixth from "./pages/sixth/sixthPage";
import Third from "./pages/third/thirdPage";
import "./style.css";

const App = () => {
    return (
        <div>
            <Navbar />
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Sixth />
            <Seven/>
        </div>
    )
}

export default App;