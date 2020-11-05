import React, { Component } from "react";
import axios from "axios";
import PapperCard from "../PapperCard/index";
import Footer from "../Footer";
import "./style.scss";
import LoadingScrenn from "../LoadingScrenn";

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            list: [],
        };
    }
    componentDidMount = () => {
        axios
            .get(
                `${process.env.REACT_APP_BACKEND}/gm-realizacje-inwentaryzacje`,
            )
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
                        <h1 className="withoutSub">Inwentaryzacje</h1>
                        <PapperCard elements={list} />
                    </div>
                    <Footer />
                </div>
            );
    }
}

// function Inventory(props) {
//     return (
// <div className="bgNR sub realizacjeSub">
//     <div className="conSub conCenter">
//         <h1 className="withoutSub">Inwentaryzacje</h1>
//         {inventoryData.map((card) => (
//             <PapperCard elements={card.data} />
//         ))}
//     </div>
//     <Footer />
// </div>
//     );
// }

export default Inventory;
