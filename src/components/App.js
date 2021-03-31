import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar/";
import About from "./About";
import "./style.scss";
import Realizations from "./Realizations";
import Ofert from "./Ofert";
import Contact from "./Contact/index";
import Projects from "./Realizations/Projects";
import Inventory from "./Realizations/Inventory";
import Supervision from "./Realizations/Supervision";
import Workmenship from "./Realizations/Workmenship";
import GreenInteriors from "./GreenInteriors";
import GreenRoof from "./GreenRoof";
function App() {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route exact path="/realizacje">
                        <Realizations />
                    </Route>
                    <Route exact path="/oferta">
                        <Ofert />
                    </Route>
                    {/* <Route exact path="/zielen-we-wnetrzach">
                        <GreenInteriors />
                    </Route>
                    <Route exact path="/system-dachow-zielonych-grs">
                        <GreenRoof />
                    </Route> */}
                    <Route exact path="/kontakt">
                        <Contact />
                    </Route>
                    {/* <Route exact path="/realizacje/projekty">
                        <Projects />
                    </Route>
                    <Route exact path="/realizacje/wykonawstwo">
                        <Workmenship />
                    </Route>
                    <Route exact path="/realizacje/inwentaryzacje">
                        <Inventory />
                    </Route>
                    <Route exact path="/realizacje/analiza_i_nadzor">
                        <Supervision />
                    </Route> */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
