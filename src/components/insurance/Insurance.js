import React from "react";
import {arrayCard} from "../../utils/data"

function Insurance(){


    return(
        <div className="fons" id="about">
            <div className="containerMedia pt">
                <div className="Dflex">
                    <div className="omgInc">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudafi7pn-gWl7vz6OxucVWiuIpLWxzFTeDw&s" height="200px" style={{borderRadius: "50%"}}/>
                    </div>
                    <div className="InsuranceImg">
                        <div className="wInsurance">
                            <h4 className="ptIn">Теперь мы доступны в приложении GLOVO!</h4>
                            <p>
                            Заказывайте нашу вкуснейшую шаурму с удобной курьерской доставкой.
                            </p>
                            <p>
                            Приятного аппетита! 🌯🛵
                            </p>
                            <p>
                            | Пн-Вс 10:00 - 22:00
                            </p>
                            <p>
                            | +996227090990
                            </p>
                            <p>
                            | ТРЦ “Азия Молл”, пр. Чингиза Айтматова 3, | 3 этаж.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className=" yellowB">
                    <div className="fonsYellow mb-4">
                    </div>

                    <div className="containerMediaYellow yellowBlock">
                        <div className="dYellow">
                            {
                                arrayCard?.filter((_, index) => index < 3)?.map((item) => {

                                    return <div className="yellowImg" key={item.id}>
                                    <img src={item.url}/>
                                <div className="p-3">
                                    <h4 className="text-white">{item?.title}</h4>
                                    <p className="textYellow">
                                        {item?.description}
                                    </p>
                                    <p>
                                       <span style={{fontWeight: 600, color: "#fff"}}>Цена: </span> <span style={{color: "#f19a0e", fontWeight: 600, fontSize: 17 }}>{item.price}</span>
                                    </p>
                                </div>
                                </div>
                                })
                            }
                        </div>
                       
                      
                    </div>
                    <div className="containerMediaYellow" style={{display: "flex", justifyContent: "center"}}>
                       <div style={{width: "100%", paddingLeft: 10, paddingRight: 10}}>
                       <button class="btn btn-outline-secondary" type="button" style={{width: "100%"}} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            Открыть полное меню
                        </button>
                       </div>
                        </div>
                   
                </div>

            </div>
        </div>
    )
}

export default Insurance;