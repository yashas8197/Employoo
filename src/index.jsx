import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Report from "./pages/Report";
import Employee from "./pages/Employee";
import Body from "./components/Body";
import EmployeeDetails from "./pages/EmployeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "employee/:employeeId",
        element: <EmployeeDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
