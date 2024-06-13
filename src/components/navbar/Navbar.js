import React from "react";
import logo from "../../assets/images/icons8-wok-80.png"

function Navbar(){
    return(
        <>
            <div className="bg-white fixed-top">
            <nav className="navbar containerMedia">
                <div className="container-fluid">
                    <div className="d-flex" style={{justifyContent: "space-between"}}>
                    <a className="navbar-brand text-dark logo_border" href="#">
                        <img className="logo" src={logo}/>
                    </a>

                        <div className="fs-5 tex Text" style={{marginLeft:2}}>
                        MUTLU CHEF
                        </div>
                        <div className="font">
                        Турецкий <br/>
                        и арабский вкус | Бишкек
                    </div>
                    </div>
                    <div style={{display: "flex"}}>
                    <div style={{
                            display: "flex",
                        }}>
                        <div className="Text px dBlock">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                 className="bi bi-telephone-forward" viewBox="0 0 16 16">
                                <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            <a href="tel:+996 557 76 04 60" className="px-3 textNav" style={{color: "black"}}>
                                +996 557 76 04 60
                            </a>
                            <p className="px-5 textNav2">10:00-22:00</p>
                        </div>
                        <div className="Text dBlock2">
                            <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Заказать звонок</button>
                        </div>
                        </div>
                        <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    
                    <div className="offcanvas black offcanvasend" tabIndex="-1" id="offcanvasNavbar"
                         aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <div>
                                <div className="d-flex">
                                <p className="text-white">
                                ТУРЕЦКИЙ И АРАБСКИЙ ВКУС | БИШКЕК

                                </p>
                                <p className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                               fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
  <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
</svg></span>
                                </p>
                                </div>
                                <hr className="hr"/>
                                <div>
                                    <ul>
                                        <li>
                                            <a href="#header">Главная</a>
                                        </li>
                                        <li>
                                            <a href="#about">Меню</a>
                                        </li>
                                        <li>
                                            <a href="#services">О нас</a>
                                        </li>
                                        <li>
                                            <a href="#carpark">Проголодались</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Контакты</a>
                                        </li>
                                        <li className="pt-4">
                                            <button className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Заказать звонок</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Navbar;