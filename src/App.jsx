import "./App.css";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="py-4">
          <img
            src="https://placehold.co/600x400?text=Employee+Smiling"
            className="img-fluid rounded"
          />
        </div>
        <div className="my-5">
          <h2>Our Employee</h2>
          <p>
            Meet our dedicated team of professionals who work tirelessly to
            achieve our company's goals.
          </p>
          <Link className="btn btn-primary" to="/employee">
            View Employee
          </Link>
        </div>
        <div className="my-5">
          <h2>Company Report</h2>
          <p>
            Expolore our latest Finance Report to gain insights into our
            company's performance and growth.
          </p>
          <Link className="btn btn-primary" to="/report">
            View Employee
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
