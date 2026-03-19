import "../App.css";


function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><button className="navbutton" onClick={() => window.location.href = '/'}>Home</button></li>
                    <li><button className="navbutton" onClick={() => window.location.href = '/Fighters'}>Fighters</button></li>
                    <li><button className="navbutton" onClick={() => window.location.href = '/Videos'}>Videos</button></li>
                    <li><button className="navbutton" onClick={() => window.location.href = '/Games'}>Games</button></li>

                </ul>
            </nav>

        </header>
    );
}

export default Header;
