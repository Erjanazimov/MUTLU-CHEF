import React from "react";
import "./global.css";
import "./media.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Insurance from "./components/insurance/Insurance";
import Services from "./components/services/Services";
import CarPark from "./components/carPark/CarPark";
import Modal from "./components/modal/Modal";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { arrayCard } from './utils/data';

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
           <div className="block_whatsApp">
            <a href="https://api.whatsapp.com/send/?phone=996227090990&text&type=phone_number&app_absent=0">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
            </a>
           </div>
           <Modal/>
           <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
    <svg color="#fff" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
    </button>
  </div>
  <div class="offcanvas-body">
  <div className="dYellow">
                            {
                                arrayCard?.map((item) => {

                                    return <div className="yellowImg" key={item.id}>
                                    <img src={item.url}/>
                                <div className="p-3">
                                    <h4 className="text-black fw-bold">{item?.title}</h4>
                                    <p className="textYellow">
                                        {item?.description}
                                    </p>
                                    <p className="price">
                                       <span style={{fontWeight: 600, color: "black"}}>Цена: </span> <span style={{color: "#f19a0e", fontWeight: 600, fontSize: 17 }}>{item.price}</span>
                                    </p>
                                </div>
                                </div>
                                })
                            }
                        </div>
                        <button style={{marginTop: 20}} className="btn form-control btn-outline-secondary" onClick={() => window.open("https://glovoapp.com/kg/en/bishkek/mutlu-chef-bsk/")}>
                                Заказать GLOVO
                                </button>
  </div>
</div>
       </div>
   </>
  )
}

export default App;
