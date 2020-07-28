import React, { Component } from "react";
import {
    HashRouter as Router,
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
            <Router basename="/klassik-jokes">
                <div className="App">
                    <NavBar />
                    <main>
                        <div className="container">
                            <Switch>
                                <Route exact path="/klassik-jokes">
                                    <Home />
                                </Route>
                                <Route path="/klassik-jokes/meme">
                                    <Meme />
                                </Route>
                                <Route path="/klassik-jokes/dark">
                                    <Dark />
                                </Route>
                                <Route path="/klassik-jokes/friends">
                                    <Friends />
                                </Route>
                                <Route path="/klassik-jokes/credit">
                                    <Credits />
                                </Route>
                                <Route path="/klassik-jokes/blank">
                                    <BlankPage />
                                </Route>
                                <Redirect to="/klassik-jokes" />
                            </Switch>
                        </div>
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
