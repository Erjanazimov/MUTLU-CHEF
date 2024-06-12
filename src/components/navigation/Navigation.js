import React from "react";

function Navigation(){
    return(
        <div className="fons" id="navigation">
            <div className="containerMedia">
                <div className="p-5 ">
                    <h3 className="fw-bold d-flex pt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                             className="bi bi-pin-map-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                            <path fill-rule="evenodd"
                                  d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                        </svg>
                        <span className="align-self-center px-3 pb-4">
                            МОЖЕМ ДОСТАВИТЬ</span></h3>
                    <div className="navigationImg navigation">
                    </div>
                    </div>
                <div>
                <div className="navigationMap">
                    <div>
                        <div className="imgNav imgNavGlav">
                            <img src="http://eragroup.kg/img/roadmap-mob.png"/>
                        </div>
                        <div className="container">
                            <div className="flexNav">
                            <div>
                                <img src="http://eragroup.kg/img/country-marker.png"/>
                                <p className="pt-3">
                                    Страны ЕС
                                </p>
                            </div>
                            <div>
                                <img src="http://eragroup.kg/img/country-marker.png"/>
                                <p className="pt-3">
                                    Грузия
                                </p>
                            </div>
                            <div>
                                <img src="http://eragroup.kg/img/country-marker.png"/>
                                <p className="pt-3">
                                    Турция
                                </p>
                            </div>
                            </div>
                        <div className="flexNav">
                                <div>
                                    <img src="http://eragroup.kg/img/country-marker.png"/>
                                    <p className="pt-3">
                                        Страны ТС
                                    </p>
                                </div>

                                <div>
                                    <img src="http://eragroup.kg/img/country-marker.png"/>
                                    <p className="pt-3">
                                        Средняя <br/> Азия
                                    </p>
                                </div>

                                <div>
                                    <img src="http://eragroup.kg/img/country-marker.png"/>
                                    <p className="pt-3">
                                        Китай
                                    </p>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;