import React from "react";

function Modal(){
    return(
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content fonsBorder">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Оставьте свой номер и
                            перезвоним вам</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Введите ваше имя</label>
                                <input type="name" className="form-control tel" placeholder="Имя"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Номер телефона</label>
                                <input type="number" className="form-control tel" id="exampleInputPassword1"
                                placeholder="Введите ваш номер"/>
                            </div>
                            <button type="submit" className="form-control btn btn-outline-success mt-3 mb-3">Перезвоните мне</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Modal;