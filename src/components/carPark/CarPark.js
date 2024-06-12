import React from "react";

function CarPark(){
    return(
        <div className="CarFons" id="carpark">
            <div className="containerMedia">
                <div className="servicesPost">
                <h4 className="fw-bold text-white d-flex">
                    <span className="align-self-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                        className="bi bi-grid-3x2-gap-fill" viewBox="0 0 16 16">
  <path
      d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z"/>
</svg>
                    </span>
                    <span className="px-2">
                    Проголодались? </span></h4>
                    <p className="text-white carText">
                    Приглашаем вас попробовать самую необычную шаурму в Бишкеке!
Наш бренд-шеф создал невероятно вкусную авторскую шаурму.
                    </p>
                    <h5 className="fw-bold text-white fsg d-flex pb-3">
                    Ждем всех гостей в нашем заведении! 🌯😋
                    </h5>
                    <button className="btn form-control btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal"> Консультация</button>
                </div>
            </div>
        </div>
    )
}

export default CarPark;