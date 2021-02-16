import React from "react";

function MainAbout({ style, text }) {
    return (
        <div className="section fp-auto-height-responsive">
            <div className="MainAbout container">
                <h1>O Firmie</h1>
                <div
                    className="aboutSection"
                    dangerouslySetInnerHTML={{ __html: text.Opis }}
                />
                <div className="logo">
                    <img
                        src={require("../../assets/logo.jpg")}
                        alt="logo Garden Master"
                    />
                </div>
            </div>
        </div>
    );
}

export default MainAbout;
