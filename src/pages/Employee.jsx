import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Employee = () => {
  return (
    <>
      <Header />
      <main className="container my-4">
        <h1>List of Employees</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <p>
              <strong>John Doe</strong>
            </p>
            <p>Software Developer</p>
            <Link className="btn btn-primary" to="/employee/1">
              View Details
            </Link>
          </li>
          <li className="list-group-item">
            <p>
              <strong>Jane Smith</strong>
            </p>
            <p>Designer</p>
            <Link className="btn btn-primary" to="/employee/2">
              View Details
            </Link>
          </li>
          <li className="list-group-item">
            <p>
              <strong>Bob Johnson</strong>
            </p>
            <p>Project Manager</p>
            <Link className="btn btn-primary" to="/employee/3">
              View Details
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Employee;
