import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav id="navBar" className="navbar navbar-expand-lg">
        <div className="container">
          <Link
            className="navbar-brand text-white fw-bold fs-2 text-uppercase"
            to={"/"}
          >
            Start FrameWork
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-semibold fs-6 text-uppercase"
                  aria-current="page"
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-semibold fs-6 text-uppercase"
                  to={"/portfolio"}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fw-semibold fs-6 text-uppercase"
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
