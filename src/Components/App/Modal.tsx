import React from 'react';

interface ModalProps {
    savedYears: number;
    savedMonths: number;
    savedTotalPaid: number;
    setModal: (arg1:boolean)=>void;
}
const Modal = ({ savedYears, savedMonths, savedTotalPaid, setModal }: ModalProps) => {
    return (
        <div className="modal">
            <h2 className="modal-header">
                <button className="modal-close" onClick={() => setModal(false)}>
                    X
                </button>
                <span className="positiveLarge">Savings!</span>
            </h2>
            <div className="modal-content">
                <div className="amounts positive">
                    {savedYears} years {savedMonths} months Saved!
                </div>
                <div className="amounts positive">${savedTotalPaid} Saved</div>
            </div>
        </div>
    );
};
export default Modal;
