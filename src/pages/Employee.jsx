import { Link } from "react-router-dom";
import { useState } from "react";

export const employees = [
  {
    id: "1",
    name: "John Doe",
    title: "Software Developer",
    department: "IT",
    hoursWorked: 210,
    performanceRate: 0.79,
    overTimeHours: 60,
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Designer",
    department: "Design",
    hoursWorked: 195,
    performanceRate: 0.95,
    overTimeHours: 45,
  },
  {
    id: "3",
    name: "Bob Johnson",
    title: "Project Manager",
    department: "Management",
    hoursWorked: 170,
    performanceRate: 0.85,
    overTimeHours: 20,
  },
];

const Employee = () => {
  const [filteredObj, setFilteredObj] = useState("All");

  const filterSelectedDept =
    filteredObj === "All"
      ? employees
      : employees.filter((employee) => employee.department === filteredObj);

  return (
    <>
      <main className="container my-4">
        <h1>List of Employees</h1>
        <div className="my-4">
          <label htmlFor="filterDepartment">Filter By Department: </label>
          <select
            onChange={(e) => setFilteredObj(e.target.value)}
            id="filterDepartment"
            className="form-select"
          >
            <option value="All">All Department</option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
          </select>
        </div>
        <ul className="list-group">
          {filterSelectedDept.map((employee) => (
            <li key={employee.id} className="list-group-item">
              <p>
                <strong>{employee.name}</strong>
              </p>
              <p>{employee.title}</p>
              <Link className="btn btn-primary" to={`/employee/${employee.id}`}>
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Employee;
