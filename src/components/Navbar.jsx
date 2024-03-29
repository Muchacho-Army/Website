import "./Navbar.scss";

function NavbarItem(props) {
    const { text, link } = props;

    return (
        <a className="nav-item" href={link} target="_blank">{text}</a>
    );
}

export default function Navbar() {
    return (
        <>
            <header id="navbar" className="page-section flex-container align-center">
                <div className="page-section-inner">
                    <a className="navbar-logo-container" href="/">
                        <img className="navbar-logo" src="logo.png" alt="MuchachoArmy Logo" />
                    </a>
                    <nav id="navbar-nav-items" className="flex-container align-center">
                        <NavbarItem text="Clan Discord" link="/clan-discord" />
                        <NavbarItem text="Community Discord" link="/community-discord" />
                        <NavbarItem text="YouTube" link="/youtube" />
                        <NavbarItem text="Twitch" link="/twitch" />
                        <NavbarItem text="Merch" link="/merch" />
                    </nav>
                </div>
            </header>
        </>
    );
}
