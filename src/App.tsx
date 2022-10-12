import React from "react";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./app/router";

const App = () => {

    return (
        <BrowserRouter>
            <div className="main-wrapper">
                <AppRouter/>
            </div>
        </BrowserRouter>
    )
}

export default App;