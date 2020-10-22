import React from "react";
import Footer from "../Footer";
import "./style.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import fullPageSettings from "../fullPageSettings";
import GoogleMapReact from "google-map-react";
import {
    faExternalLinkAlt,
    faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import StyledButton from "../StyledButton/Ofert/index";

function GreenRoof(props) {
    const cords = { lat: 50.0448998, lng: 19.9633123 };

    return (
        <ReactFullpage
            {...fullPageSettings}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <div className="GreenRoof bg section fp-auto-height-responsive ">
                            <div className="container">
                                <div className="grid">
                                    <div className="left">
                                        <h2>
                                            Jesteśmy dystrybutorem systemu
                                            dachów zielonych GARDENA GREEN ROOF
                                            SYSTEM powered by FAKRO.
                                        </h2>

                                        <div className="conBlock">
                                            W odpowiedzi na coraz większe
                                            oczekiwania inwestorów odnośnie
                                            poprawy jakości życia w mieście oraz
                                            bazując na naszym dotychczasowym
                                            doświadczeniu stworzyliśmy unikatowe
                                            i ekologiczne rozwiązanie - system
                                            dachu zielonego w połączeniu z
                                            oknami płaskimi{" "}
                                            <b>GARDENA GREEN ROOF SYSTEM</b>{" "}
                                            powered by FAKRO.
                                        </div>
                                        <div className="conBlock">
                                            Realizacja takiego rozwiązania
                                            przynosi wiele korzyści. Oprócz
                                            funkcji estetycznych zielony dach
                                            wpływa na poprawę miejscowego
                                            mikroklimatu, latem chroni budynek
                                            przed wysokimi temperaturami, a zimą
                                            zapobiega stratom cieplnym,
                                            jednocześnie redukując koszty
                                            ogrzewania i klimatyzacji; filtruje
                                            zanieczyszczenia z powietrza
                                            pochłaniając dwutlenek węgla i
                                            produkując tlen; chroni powierzchnię
                                            dachu przez uszkodzeniami
                                            mechanicznymi oraz czynnikami
                                            atmosferycznymi (takimi jak
                                            promieniowaniem UV i grad).
                                            Dodatkowo redukuje spływ wód
                                            deszczowych, zatrzymując 90% wody,
                                            ogranicza konieczność odprowadzania
                                            jej do kanalizacji.
                                        </div>
                                        <div className="conBlock">
                                            Zielony dach charakteryzuje się
                                            dłuższą trwałością, większą izolacją
                                            akustyczną oraz może stanowić
                                            dodatkowe miejsce do rekreacji.
                                        </div>
                                        <div className="conBlock">
                                            Zielony dach charakteryzuje się
                                            dłuższą trwałością, większą izolacją
                                            akustyczną oraz może stanowić
                                            dodatkowe miejsce do rekreacji.
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="flyer">
                                            <img
                                                src={require("../../assets/flyer/Ulotka.jpg")}
                                                alt=""
                                            />
                                            <div className="">
                                                <StyledButton
                                                    icon={faFileDownload}
                                                    text="Pobierz"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
}

export default GreenRoof;
