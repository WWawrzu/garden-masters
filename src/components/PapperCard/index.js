import React from "react";
import "./style.scss";

function PapperCard({ elements, title }) {
    return (
        <div className="PapperCard">
            {title ? <h2>{title}</h2> : null}
            <div className="liContainer">
                {elements.map((element) => (
                    <div className="liElement" key={element.id}>
                        {element.href ? (
                            <a
                                href={`http://${element.href}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {element.label}
                            </a>
                        ) : (
                            element.label
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PapperCard;
