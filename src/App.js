import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Meme from "./components/Meme/Meme";
import Credits from "./components/Credits/Credits";
import Dark from "./components/Dark/Dark";
import Friends from "./components/Friends/Friends";
import BlankPage from "./components/BlankPage/BlankPage";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar />
                    <main>
                        <div className="container">
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/meme">
                                    <Meme />
                                </Route>
                                <Route path="/dark">
                                    <Dark />
                                </Route>
                                <Route path="/friends">
                                    <Friends />
                                </Route>
                                <Route path="/credit">
                                    <Credits />
                                </Route>
                                <Route path="/blank">
                                    <BlankPage />
                                </Route>
                                <Redirect to="/blank" />
                            </Switch>
                        </div>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
