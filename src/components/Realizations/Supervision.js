import React, { Component } from "react";
import axios from "axios";
import Footer from "../Footer";
import "./style.scss";
import PapperCard from "../PapperCard/index";
import LoadingScrenn from "../LoadingScrenn";

class Supervision extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            lists: [],
        };
    }
    componentDidMount = () => {
        axios
            .get(
                `${process.env.REACT_APP_BACKEND}/gm-realizacje-analiza-i-nadzor`,
            )
            .then((res) => {
                this.setState({ lists: res.data.lists, loaded: true });
            });
    };
    render() {
        const lists = this.state.lists;
        if (!this.state.loaded) return <LoadingScrenn />;
        else
            return (
                <div>
                    <div className="bgNR sub realizacjeSub">
                        <div className="conSub conCenter">
                            <h1 className="">Projekty</h1>
                            {lists.map(({ title, list }) => (
                                <PapperCard title={title} elements={list} />
                            ))}
                        </div>
                        <Footer />
                    </div>
                </div>
            );
    }
}
export default Supervision;
