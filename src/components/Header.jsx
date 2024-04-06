import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-info text-white py-4">
      <nav className="container d-flex">
        <h3>Company Logo</h3>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/employee" className="nav-link">
              Employee
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/report" className="nav-link">
              Report
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
