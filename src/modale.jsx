

const Modale = () =>{


    return(
        <div className="modal fade" id="Modale" tabIndex="-1" aria-labelledby="ModaleLabel">
            <div className="modal-dialog">
                <div className="modal-content bg-dark text-light">
                    <div className="modal-header">
                        <h1 className="modal-title" id="ModaleLabel">Mon profil Github</h1>
                        <button type="button" className="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modale;