import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Book Management App</h1>
            <div className="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Liste des livres
                </NavLink>
                <NavLink to="/add" className="link" activeClassName="active">
                    Ajouter un Livre
                </NavLink>
            </div>
        </header>
    )
};

export default Header;
