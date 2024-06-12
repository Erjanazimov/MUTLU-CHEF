import React from "react";

function Header(){
    return(
        <div id="header">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item ">
                    <div className="imgScroll2 d-flex">
                        <div className="Text containerM">
                            <h1 className="textHeader">
                            Хинкал (Хинкали)
                            </h1>
                            <p className="widthHeader">
                            Хинкал — это одно из самых популярных блюд восточной кухни, которое невозможно не полюбить. Наиболее популярно на Кавказе, является своеобразным символом Дагестана. В основе блюда — кусочки теста, которые проваривают в насыщенном мясном бульоне. Настоящий хинкал готовят исключительно на баранине.

                            </p>
                            <div className="pt-3">
                                <div className="dHeader2">
                                    <div className="d-flex pt-3 block">
                                        <p className="textWhite">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
</svg>
                                        </p>
                                        <p className="px-3 Text textH">
                                        Пн-Вс 10:00 - 22:00
                                        </p>
                                    </div>
                                    <div className="d-flex pt-3 block">
                                        <p className="textWhite">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
                                        </p>
                                        <p className="px-3 Text textH">
                                        +996227090990
                                        </p>
                                    </div>
                                    <div className="d-flex pt-3 block">
                                        <p className="textWhite">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                                        </p>
                                        <p className="px-3 Text textH">
                                        ТРЦ “Азия Молл”, пр. Чингиза Айтматова 3, 3 этаж.

                                        </p>
                                    </div>
                                    <div className="d-flex pt-3 block">
                                        <p className="textWhite">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-taxi-front-fill" viewBox="0 0 16 16">
  <path d="M6 1a1 1 0 0 0-1 1v1h-.181A2.5 2.5 0 0 0 2.52 4.515l-.792 1.848a.8.8 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 9.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413q0-.248-.049-.49l-.335-1.68a1.8 1.8 0 0 0-.964-1.261.8.8 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 3H11V2a1 1 0 0 0-1-1zM4.309 4h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17s-3.688.097-4.597.17a.51.51 0 0 1-.497-.731l.956-1.913A.5.5 0 0 1 4.309 4M4 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"/>
</svg>
                                        </p>
                                        <p className="px-3 Text textH">
                                        Теперь мы доступны в приложении GLOVO!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active">
                    <div className="imgScroll d-flex">
                        <div className="Text containerM">
                            <h1 className="textHeader">
                            MUTLU CHEF 
                            </h1>
                            <p className="widthHeader">
                            это кулинарное путешествие, где каждое блюдо превращается в часть турецкой культуры и волшебства вкуса.

Кебабы, сочные и ароматные, словно олицетворяют дух востока, а Шаурма, искусно пропитанная соусами, рассказывает о великолепной сладкой стороне Турции.                             </p>
                            <div className="pt-3">
                                <div className="dHeader2">
                                    <div className="d-flex pt-3 block">
                                        <p className="textWhite">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
</svg>
                                        </p>
                                        <p className="px-3 Text textH">
                                        Пн-Вс 10:00 - 22:00
                                        </p>
                                    </div>
                                    <div className="d-flex pt-3 block">
                                        <p className="textWhite">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
                                        </p>
                                        <p className="px-3 Text textH">
                                        +996227090990
                                        </p>
                                    </div>
                                    <div className="d-flex pt-3 block">
                                        <p className="textWhite">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
                                        </p>
                                        <p className="px-3 Text textH">
                                        ТРЦ “Азия Молл”, пр. Чингиза Айтматова 3, 3 этаж.

                                        </p>
                                    </div>
                                    <div className="d-flex pt-3 block">
                                        <p className="textWhite">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-taxi-front-fill" viewBox="0 0 16 16">
  <path d="M6 1a1 1 0 0 0-1 1v1h-.181A2.5 2.5 0 0 0 2.52 4.515l-.792 1.848a.8.8 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 9.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V14.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413q0-.248-.049-.49l-.335-1.68a1.8 1.8 0 0 0-.964-1.261.8.8 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 3H11V2a1 1 0 0 0-1-1zM4.309 4h7.382a.5.5 0 0 1 .447.276l.956 1.913a.51.51 0 0 1-.497.731c-.91-.073-3.35-.17-4.597-.17s-3.688.097-4.597.17a.51.51 0 0 1-.497-.731l.956-1.913A.5.5 0 0 1 4.309 4M4 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-9 0a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"/>
</svg>
                                        </p>
                                        <p className="px-3 Text textH">
                                        Теперь мы доступны в приложении GLOVO!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    )
}

export default Header;