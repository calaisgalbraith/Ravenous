import "./Modal.css";

const Modal = () => {
    return (
    <>
    <div className="modal fade show" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-body">
                To use this application, please connect to the CORS demo server <a target="_blank" rel="noopener noreferrer" href="https://cors-anywhere.herokuapp.com/corsdemo">here</a>.
                <br /><br />
                If you're still unable to use the application after connecting to the server, please get in touch with <a href="mailto:calaisgalbraith@gmail.com">calaisgalbraith@gmail.com</a>  
            </div>
            </div>
        </div>
    </div>
    <div className="modal-backdrop fade show"></div>
    </>
    )
}

export default Modal