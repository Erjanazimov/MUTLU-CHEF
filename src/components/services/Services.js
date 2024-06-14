import React from "react";
import povar from "../../assets/images/386894769_1363321524540610_232297154699667318_n.jpg"
function Services(){
    return(
        <div className="fons servicesPb" id="services">
            <div className="containerMedia">
                <div className="servicesPt">
                    <div>
                        <h4 className="textServices d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                                 className="bi bi-check2-all" viewBox="0 0 16 16">
                                <path
                                    d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                            </svg>
                            <span className="align-self-center px-2 pb-4">В ЧЕМ МЫ ЛУЧШИЕ? </span></h4>
                        <div className="servicesFlex">
                        <div className="servicesWidth">
                            <p className="pt-3 servicesImg">
                            <img src="https://static.78.ru/images/uploads/1704274476280.jpg"/>
                                </p>
                            <div>
                                <h5 className="fw-bold">18 уникальных видов шавермы! 
                                </h5>
                                <p className="fw">
                                Они все разнообразные, иногда эксцентричные в своих комбинациях, не всегда всем понятные и любимые традиционные!
                                </p>
                                <p className="fw">
                                Важно одно - у нас в Mutlu Chef каждый посетитель найдет свою идеальную шаверму по вкусу.
                                    </p>
                                    <p className="fw">
                                    Не стоит откладывать визит к нам!

                                        </p>
                                        <p className="fw">
                                        Захотели шаверму ? Мы вас ждем!

                                            </p>
                            </div>
                            <div>
                                <button className="btn form-control btn-outline-success" onClick={() => window.open("https://glovoapp.com/kg/en/bishkek/mutlu-chef-bsk/")}>
                                Заказать GLOVO
                                    <span className="px-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-chat-text-fill" viewBox="0 0 16 16"><path
      d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
</svg>
                                    </span>
                                </button>
                            </div>
                        </div>

                            <div className="servicesWidth">
                                <p className="pt-3 servicesImg">
                                    <img src={povar}/>
                                </p>
                                <div>
                                    <h5 className="fw-bold">Наш бренд-шеф 
                                    </h5>
                                    <p className="fw">
                                    – настоящий мастер, всегда вовлечен в каждый этап приготовления 😎
                                    </p>
                                    <p className="fw">
                                    Приглашаем насладиться авторской шаурмой, где каждый кусочек — это сочетание обжаренного мяса, свежего лаваша, овощей и ароматных специй, объединяющие лучшие рецепты Турции и арабских стран.
                                    </p>
                                </div>
                                <div>
                                <button className="btn form-control btn-outline-success" onClick={() => window.open("https://glovoapp.com/kg/en/bishkek/mutlu-chef-bsk/")}>
                                Заказать GLOVO

                                        <span className="px-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-chat-text-fill" viewBox="0 0 16 16"><path
                                       d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
</svg>
                                    </span>
                                    </button>
                                </div>
                            </div>

                            <div className="servicesWidth">
                                <p className="pt-3 servicesImg">
                                    <img src="https://ir.ozone.ru/s3/multimedia-q/c1000/6890518142.jpg"/>
                                </p>
                                <div>
                                    <h5 className="fw-bold">Друзья, давайте поговорим о нашем главном секрете - авторском соусе!
                                    </h5>
                                    <p className="fw">
                                    В каждой шаверме уникальный соус, который разработан нашим бренд-шефом с особой заботой и любовью.
Этот соус - наша неповторимая фишка, которая делает наши блюда по-настоящему особенными.
В видео вы можете увидеть процесс приготовления мексиканского соуса 🌶️
                                    </p>
                                    <p className="fw">
                                    Мы бережно подбираем только лучшие ингредиенты для приготовления нашего соуса, чтобы каждый гость мог наслаждаться аутентичным вкусом и неповторимым ароматом каждой шавермы.
                                    </p>
                                    <p className="fw">
                                    Приглашаем вас попробовать этот невероятный вкус сам ✨
                                        </p>
                                </div>
                                <div>
                                <button className="btn form-control btn-outline-success" onClick={() => window.open("https://glovoapp.com/kg/en/bishkek/mutlu-chef-bsk/")}>
                                Заказать GLOVO

                                        <span className="px-2">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-chat-text-fill" viewBox="0 0 16 16"><path
                                       d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
</svg>
                                    </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Services;