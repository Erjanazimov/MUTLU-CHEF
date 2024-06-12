import React from "react";
import "./global.css";
import "./media.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Insurance from "./components/insurance/Insurance";
import Services from "./components/services/Services";
import CarPark from "./components/carPark/CarPark";
import Navigation from "./components/navigation/Navigation";
import Modal from "./components/modal/Modal";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
   <>
       <div>
           <div>
           <Navbar/>
           </div>
           <Header/>
           <About/>
           <Insurance/>
           <Services/>
           <CarPark/>
           {/* <Navigation/> */}
           <Contact/>
           <Footer/>
           <Modal/>
       </div>
   </>
  )
}

export default App;
