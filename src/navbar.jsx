const navbar = ()=>{
    return(
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#header">JOHN DOE</a>
                    <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div
                className="collapse"
                id="navbarToggleExternalContent"
                data-bs-theme="dark"
            >
                <div className="bg-dark p-4 text-light">
                    <ul className="navbar-nav justify-content-end">
                    <li className="nav-item"><a className="nav-link" href="#header">HOME</a></li>
                    <li className="nav-item"><a className="nav-link" href="#header">SERVICE</a></li>
                    <li className="nav-item"><a className="nav-link" href="#header">PORTFOLIO</a></li>
                    <li className="nav-item"><a className="nav-link" href="#header">CONTACT</a></li>
                    <li className="nav-item">
                        <a className="nav-link" href="#header">MENTION LEGAL</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default navbar();