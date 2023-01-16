import classes from './Modal.module.css';


function Modal({children, onCloseModal}) {
    return (
        <>
            <div className={classes.backdrop} onClick={onCloseModal}></div>
            <div className={classes.modal}>
                {children}
                <div className={classes.buttons}>
                    <button>order</button>
                    <button onClick={onCloseModal}>close</button>
                </div>
            </div>
        </>
    )
}
export default Modal;