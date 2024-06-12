import React from "react";
import povar from "../../assets/images/386894769_1363321524540610_232297154699667318_n.jpg"
function About(){
    return(
        <div className="containerMedia">
            <div className="aboutFlex">
                <div className="wAbout">
                <div className="textAbout p-2 pb-5">
                    ДАВАЙТЕ ЗНАКОМИТЬСЯ
                </div>
                </div>
                <div className="dflex">
                    <div>
                        <img className="imgAbout" src={povar}/>
                    </div>
                <div className="width">
                    <h5 className="p-2 fw-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                             className="bi bi-chevron-bar-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                  d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
                        </svg>ТУРЕЦКИЙ И АРАБСКИЙ ВКУС
                    </h5>
                    <div className="textAboutWidth">
                    Наш бренд-шеф – настоящий мастер, всегда вовлечен в каждый этап приготовления 😎
                    </div>
                    <br/>
                    <div className="textAboutWidth">
                    Приглашаем насладиться авторской шаурмой, где каждый кусочек — это сочетание обжаренного мяса, свежего лаваша, овощей и ароматных специй, объединяющие лучшие рецепты Турции и арабских стран.
                    </div>
                </div>
                </div>
                </div>
        </div>
    )
}

export default About;