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
import Random from "./components/Random/Random";
import Daddy from "./components/Daddy/Daddy";
import Meme from "./components/Meme/Meme";
import MemeEdit from "./components/Meme/MemeEdit";
import Credits from "./components/Credits/Credits";
import Dark from "./components/Dark/Dark";
import Friends from "./components/Friends/Friends";
import BlankPage from "./components/BlankPage/BlankPage";

class App extends Component {
    render() {
        return (
            <Router basename="/">
                <div className="App">
                    <NavBar />
                    <main>
                        <div className="container">
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/random">
                                    <Random />
                                </Route>
                                <Route path="/daddy">
                                    <Daddy />
                                </Route>
                                <Route exact path="/meme">
                                    <Meme />
                                </Route>
                                <Route name="edit" path="/meme/edit">
                                    <MemeEdit />
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
