import { NavLink } from "react-router-dom";
import miLogo from "../../../assets/img/logo.png";

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={miLogo} alt="El Logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink 
                  className="nav-link dropdown-toggle" 
                  to="#" 
                  id="navbarDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Conciertos
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink to="/plistar" className="dropdown-item">
                      Listar
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink to="/pcrear" className="dropdown-item">
                      Crear
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/padmin" className="dropdown-item">
                      Administrar
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/acerca" className="nav-link">
                  Acerca de
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
