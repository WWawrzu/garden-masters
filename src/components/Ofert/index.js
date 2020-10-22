import React from "react";
import "./style.scss";
import ReactFullpage from "@fullpage/react-fullpage";
import fullPageSettings from "../fullPageSettings";
import PapperCard from "../PapperCard";
import Footer from "../Footer";

function Ofert(props) {
    let oferta = [
        { label: "Inwentaryzacje istniejącej zieleni" },
        { label: "Ekspertyzy dendrologiczne" },
        { label: "Raporty ekologiczne do certyfikacji BREEAM" },
        { label: "Wykonywanie projektów technicznych zieleni" },
        { label: "Projektowanie i montaż systemów nawadniających" },
        { label: "Wycinkę i karczowanie drzew" },
        {
            label:
                "Chirurgię drzew, ciecia pielęgnacyjne, zabezpieczanie drzew przy inwestycjach",
        },
        { label: "Kompleksowe wykonanie zieleni" },
        { label: "Umocnienia skarp i rowów" },
        { label: "Wykonanie zbiorników retencyjnych" },
        { label: "Rekultywację terenów" },
        { label: "Zielone dachy" },
        { label: "Przesadzanie drzew" },
        { label: "Pielęgnację terenów zieleni" },
        { label: "Hydroobsiew" },
        { label: "Optymalizację projektów zieleni" },
        { label: "Roślinne dekoracje wnętrz" },
        { label: "Poradnictwo z zakresu ochrony roślin" },
        { label: "Nawierzchnie elastyczne placów zabaw" },
        { label: "Montaż małej architektury" },
        {
            label:
                "Szkolenia z zakresu budowy terenów zieleni, ochrony środowiska, kompozycji roślinnych, wykorzystania roślin antysmogowych w ogrodach i wnętrzach",
        },
        {
            label:
                "Nadzór Inspektorski nad pracami z zakresu budowy terenów zieleni",
            href: "#",
        },
    ];

    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(
        require.context("../../assets/brands/", false, /\.(png|jpe?g|svg)$/),
    );

    console.log(images);

    return (
        <div className="Ofert bgNR section fp-auto-height fp-auto-height-responsive ">
            <div className="container">
                <h1>Oferta</h1>
                <div className="block">
                    Nasza firma oferuje szeroki zakres usług związanych z
                    zakładaniem terenów zieleni.
                </div>
                <PapperCard
                    elements={oferta}
                    title="Oferta obejmuje między innymi"
                />
                <div className="block brandP">
                    Współpracujemy z takimi Generalnymi Wykonawcami jak:
                </div>
            </div>

            <div className="brands">
                {images.map((logo) => (
                    <div className="BrandLogo">
                        <img src={logo} alt="" />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
        // <ReactFullpage
        //     {...fullPageSettings}
        //     render={({ state, fullpageApi }) => {
        //         return (
        //             <ReactFullpage.Wrapper>
        //                 <div className="Ofert bg section fp-auto-height fp-auto-height-responsive ">
        //                     <div className="container">
        //                         <h1>Oferta</h1>
        //                         <div className="block">
        //                             Nasza firma oferuje szeroki zakres usług
        //                             związanych z zakładaniem terenów zieleni.
        //                         </div>
        //                         <PapperCard
        //                             elements={oferta}
        //                             title="Oferta obejmuje między innymi"
        //                         />
        //                         <div className="block brandP">
        //                             Współpracujemy z takimi Generalnymi
        //                             Wykonawcami jak:
        //                         </div>
        //                     </div>

        //                     <div className="brands">
        //                         {images.map((logo) => (
        //                             <div className="BrandLogo">
        //                                 <img src={logo} alt="" />
        //                             </div>
        //                         ))}
        //                     </div>
        //                 </div>
        //                 <Footer />
        //             </ReactFullpage.Wrapper>
        //         );
        //     }}
        // />
    );
}

export default Ofert;
