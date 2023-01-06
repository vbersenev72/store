const ModalItem = ({props, ModalActive, setModalActive, contentModal, setContentModal}) => {



    return(
        <div className={ModalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
            
            <div className="modal-content" onClick={e => e.stopPropagation}>
                <img className="modal-img" src={contentModal.img} alt="фотачкааа"/>
                <div className="modal-content-title">{contentModal.name}</div>
                <div className="modal-content-des">{contentModal.description}</div>
            </div>
        </div>
    )
}
export default ModalItem