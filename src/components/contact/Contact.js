import React from "react";
import SimpleMap from "./SimpleMap";

function Contact(){
    return(
        <div  id="contact">
            <div className="fons pt-5">
                <div className="containerMedia">
                    <div className="textContact d-flex">
                        <h5 className="fw-bold txt ">
                        Ждём всех, чтобы попробовать нашу авторскую шаверму.

                        </h5>
                        <p className="imgContact">
                            <img src="https://belayareka.kg/uploads/cache/7084d958d8611f122b176867ef533d80.png"/>
                        </p>
                    </div>
                </div>
            </div>
            <SimpleMap/>
        </div>
    )
}

export default Contact;