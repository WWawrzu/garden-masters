import React from "react";
import Footer from "../Footer";
import "./style.scss";
import { projectData } from "./data";
import PapperCard from "../PapperCard/index";

function Projects(props) {
    return (
        <div className="bgNR sub realizacjeSub">
            <div className="conSub conCenter">
                <h1 className="">Projekty</h1>
                <p>Wybrane z ostatnich lat</p>
                <PapperCard elements={projectData} />
            </div>
            <Footer />
        </div>
    );
}

export default Projects;
