import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

//importa el componente nav
import Navbar from "../components/Navbar";

function AuthorsList() {
    const navigate = useNavigate();
    const [authors, setAuthors] = useState([])
    const [errors, setErrors] = useState('');


    //lista de peliculas
    useEffect(
        () => {
            //llamado de la base
            axios.get(window.$api)
                .then(resp => {
                    setAuthors(resp.data.authors)
                })
                .catch(error => {
                    alert(error)
                })
        },
        []
    )

    //funcion eliminar 
    async function eliminarAutores(id) {
        try {
            await axios.delete(window.$api + id + '/delete')
            alert('Author deleted');
            navigate("/");
        }
        catch (err) {
            const errors = err.response.data.errors
            if (errors.name) {
                setErrors(errors.name.message)
            }
        }

    }

    //link para agregar un autor
    const agregarAutor = () => {
        navigate("/new");
    }

    //link para editar un autor
    const editarAutor = (id) => {
        navigate("/edit/" + id);
    }

    return (
        <section>
            <Navbar></Navbar>

            <div className="row blocktotal">
                <div className='block1'>
                    <h3>we have quotes by:</h3>
                    <button className='b1button' onClick={() => agregarAutor()}> Add a New Author</button>
                </div>
                <div className='col-8 offset-2'>
                    <Table striped bordered hover>
                        <thead>
                            <tr className='estiloTabla'>
                                <th>Author</th>
                                <th>Actions Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map(item =>
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>
                                        <div className='estiloTablaBoton'>
                                            <button onClick={() => eliminarAutores(item._id)} className="btn btn-primary" id="estiloBoton1">Delete</button>
                                            <button onClick={() => editarAutor(item._id)} className="btn btn-primary" id="estiloBoton2">Edit</button>
                                        </div>

                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>

        </section>
    );
}

export default AuthorsList;