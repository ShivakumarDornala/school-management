import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./routes/index.css";
import App from "./routes/App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import Home from "./Components/Home.jsx";
import Classes from "./Components/Classes.jsx";
import Teachers from "./Components/Teachers/Teachers.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "classes", element: <Classes /> },
      { path: "teachers", element: <Teachers /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
