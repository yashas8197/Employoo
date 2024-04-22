import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-light py-4">
      <nav className="container d-flex">
        <h3>Company Logo</h3>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-secondary">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/employee" className="nav-link text-secondary">
              Employee
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/report" className="nav-link text-secondary">
              Report
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
