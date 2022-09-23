import React from 'react';
import "./Modal.scss"
import { ReactComponent as CrossIcon } from "../../../assets/crossIcon.svg";


const Modal = ({children}) => {
  return (
    <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content modal-container">
                    <div className="modal-header">
                        <h5 className="modal-title title" id="staticBackdropLabel" style={{ color: "#303F60", fontSize: "20px", fontWeight: "600", letterSpacing: "0.5px" }}>Applicant for the job</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><CrossIcon /></span>
                        </button>
                    </div>
                    <div className="modal-body body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Modal