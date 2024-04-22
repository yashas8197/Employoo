import { employees } from "./Employee";

const mostWorkedEmployee = employees.reduce((acc, curr) =>
  acc.hoursWorked > curr.hoursWorked ? acc : curr,
);

const highestRatedEmployee = employees.reduce((acc, curr) =>
  acc.performanceRate > curr.performanceRate ? acc : curr,
);

const overtimeWorked = employees.reduce(
  (acc, curr) => acc + curr.overTimeHours,
  0,
);

const Report = () => {
  return (
    <>
      <main className="container my-4">
        <h2 className="display-3">HR Report</h2>
        <hr />
        <div className="row ">
          <div className="col-md-12 d-flex justify-content-between">
            <div className="card-body m-4">
              <h3>Most Worked Employee</h3>
              <p>Name: {mostWorkedEmployee.name}</p>
              <p>Hours Worked: {mostWorkedEmployee.hoursWorked}</p>
            </div>
            <div className="card-body m-4">
              <h3>Highest Rated Employee</h3>
              <p>Name: {highestRatedEmployee.name}</p>
              <p>Hours Worked: {highestRatedEmployee.performanceRate}</p>
            </div>
            <div className="card-body m-4">
              <h3>Total Overtime Hours</h3>
              <p>Total Overtime Hours: {overtimeWorked}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Report;
