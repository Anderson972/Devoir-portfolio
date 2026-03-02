import Modale from '../modale.jsx'

const Home = () => {
    return(
        <div className = "img_header">
            <div className="content_header">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <button type="button" className="btn btn-danger " data-bs-toggle="modal" data-bs-target="#Modale">En savoir plus</button>
                <Modale />
            </div>
        </div>
    )
}

export default Home;