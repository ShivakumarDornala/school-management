import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "./index.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
