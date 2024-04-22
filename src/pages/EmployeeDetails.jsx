import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const employeeDetails = [
    {
      id: "1",
      name: "Jhon Doe",
      designation: "Software Developer",
      department: "IT",
    },
    {
      id: "2",
      name: "Jane Smith",
      designation: "Designer",
      department: "Design",
    },
    {
      id: "3",
      name: "Bob Jhonson",
      designation: "Product Manager",
      department: "Management",
    },
  ];

  const employeeData = employeeDetails.find(
    (details) => details.id === employeeId,
  );
  return (
    <>
      <div className="container my-4">
        <h3>{employeeData.name}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Name: </strong>
            {employeeData.name}
          </li>
          <li className="list-group-item">
            <strong>Designation: </strong>
            {employeeData.designation}
          </li>
          <li className="list-group-item">
            <strong>Department: </strong>
            {employeeData.department}
          </li>
        </ul>
      </div>
    </>
  );
};

export default EmployeeDetails;
