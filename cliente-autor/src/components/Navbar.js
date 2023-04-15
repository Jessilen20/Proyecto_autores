import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    //link para revisar las reseñas
    const salir = () => {
        navigate("/");
    }

    return (
        <div className="navbar">
            <div className="tituloNav">
                <h2>Favorite Authors</h2>
            </div>
            <div>
                <button type="button" className=" btn btn-primary" id="botonLogin" onClick={() => salir()}>Inicio</button>
            </div>
        </div>
    );
}

export default Navbar;