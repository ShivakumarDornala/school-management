import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./routes/index.css";
import App from "./routes/App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import Home from "./Components/Home.jsx";
import AddClass from "./Components/AddClass.jsx";
import Teachers from "./Components/Teacher.jsx";
import { ClassProvider } from "./ClassContext.jsx";
import AddTeacher from "./Components/AddTeacher.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "classes", element: <AddClass /> },
      { path: "teachers", element: <AddTeacher /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClassProvider>
      <RouterProvider router={router} />
    </ClassProvider>
  </StrictMode>,
);
