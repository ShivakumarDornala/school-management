import Footer from "../Components/Footer";
import Sidebar from "../Components/Header";
import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen flex flex-col">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
