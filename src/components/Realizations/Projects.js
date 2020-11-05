import React, { Component } from "react";
import axios from "axios";
import Footer from "../Footer";
import "./style.scss";
import PapperCard from "../PapperCard/index";
import LoadingScrenn from "../LoadingScrenn";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            list: [],
        };
    }
    componentDidMount = () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND}/gm-realizacje-projekty`)
            .then((res) => {
                this.setState({ list: res.data.list, loaded: true });
            });
    };
    render() {
        const list = this.state.list;
        if (!this.state.loaded) return <LoadingScrenn />;
        else
            return (
                <div className="bgNR sub realizacjeSub">
                    <div className="conSub conCenter">
                        <h1 className="">Projekty</h1>
                        <p>Wybrane z ostatnich lat</p>
                        <PapperCard elements={list} />
                    </div>
                    <Footer />
                </div>
            );
    }
}

export default Projects;
