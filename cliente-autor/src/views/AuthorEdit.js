import { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

function AuthorEdit() {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(window.$api+ 'list/' + id)
            .then(res => {
                setName(res.data.name)
            })
    }, [id])

    //editar un autor
    function editAutor(ev) {
        ev.preventDefault()

        axios.put(window.$api + id, {name}     
            )
            .then(res => {
                alert('Author edit successfully')
                navigate('/')
            })
            
        }
    //link para ver lista peliculas
    const irAllAutores = () => {
        navigate("/");
    }

    return (
        <section>
            <Navbar></Navbar>
            <div className="row blocktotal">
                <h2>Edit</h2>
                <div className="col-6 offset-1">
                    {errors === '' ? '' :
                        <div class="alert alert-danger" role="alert">
                            {errors}
                        </div>
                    }
                    <form onSubmit={editAutor}>
                        <div className="mb-3 col-5">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input required type="text" className="form-control" id="name"  onChange={ev => setName(ev.target.value)} value={name}/>
                            <div className="invalid-feedback">
                                Please provide your name.
                            </div>
                        </div>
                        <div className="estiloFomBotones">
                            <button type="submit" className="btn btn-outline-dark sombra">Submit</button>
                            <button type="submit" className="btn btn-outline-dark sombra" onClick={() => irAllAutores()}>Cancel</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}

export default AuthorEdit;