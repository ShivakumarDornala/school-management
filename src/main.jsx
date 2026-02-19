import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./routes/index.css";
import App from "./routes/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import Home from "./Components/Home.jsx";
import Classes from "./Components/Classes.jsx";
import Teachers from "./Components/Teachers/Teachers.jsx";
import SingleTeacher from "./Components/Teachers/[id]/singleteacher.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "classes", element: <Classes /> },
      { path: "teachers", element: <Teachers /> },
      { path: "teachers/:id", element: <SingleTeacher /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
