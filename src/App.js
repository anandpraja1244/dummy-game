import "./App.css";
import AboutUs from "./component/AboutUs";
import Contact from "./component/Contact";
import FaqaPage from "./component/FaqaPage";
import Home from "./component/Home";
import NavBarW from "./component/NavBarW";
import Topaly from "./component/To_paly";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from "./component/Download";
import Footer from "./component/Footer";
import Legalty from "./component/Legalty";
import TermCond from "./component/TermCond";
import Priavacy from "./component/Priavacy";
import Download2 from "./component/Download2";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBarW />
       {/* <Download/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Legalty" element={<Legalty/>} />
          <Route exact path="/To_paly" element={<Topaly/>}/>
          <Route exact path="/FaqaPage" element={<FaqaPage/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route exact path="/TermCond" element={<TermCond/>} />
          <Route exact path="/Download" element={<Download/>} />
          <Route exact path="/Priavacy" element={<Priavacy/>} />
          <Route exact path="/Download2" element={<Download2/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
