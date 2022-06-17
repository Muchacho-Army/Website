import Navbar from "./components/Navbar";

const aboutText = "Moin Muchacho! Wir sind Marbossa & Deko und sind bekannt für Gameplay voller Emotionen. Was das bedeutet darfst du gerne selber rausfinden. Wir zocken am meisten GTA V, Rainbow Six: Siege & Warzone!";

export default function WebContent() {    
    return (
        (<>
            <Navbar />
            <section className="page-section">
                <div className="page-section-inner">
                    <div id="top-container" className="flex-container align-center justify-center">
                        <img loading="lazy" className="home-img" src="banner.png" alt=""></img>
                    </div>
                    <div id="bottom-container">
                        <div className="flex-container align-center justify-center">
                            <div className="page-section-inner">
                                <div className="about-text">{aboutText}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>)
    );
}