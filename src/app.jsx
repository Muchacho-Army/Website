import Navbar from "./components/Navbar";
import { useParams } from "react-router-dom";
import Config from "./config.json";

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
                                <div className="about-text">{Config.aboutText}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>)
    );
}

export function RedirectPage() {
    const params = useParams();
    const route = params.route;
    const url = Config.routes[route];
    if (url) window.location.href = url;
    else window.location.href = "/";
}