import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

function AuthorsNew() {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState('')

    const navigate = useNavigate()
    

    //se crea una nueva pelicula
    async function createAutor(ev) {
        ev.preventDefault()

        try {
            const newAutor = await axios.post(window.$api + 'new', {
                name: name,
            })
            alert('Author added successfully')
            navigate('/')
        }
        catch (err) {
            const errors = err.response.data.errors
            if (errors.name) {
                setErrors(errors.name.message)
            }
        }
    }


    //link para ver lista peliculas
    const irAllAutores = () => {
        navigate("/");
    }

    return (
        <section>
            <Navbar></Navbar>
            <div className="row blocktotal">
                <h2>Submit a Author</h2>
                <div className="col-6 offset-1">
                    {errors === '' ? '' :
                        <div class="alert alert-danger" role="alert">
                            {errors}
                        </div>
                    }
                    <form onSubmit={createAutor}>
                        <div className="mb-3 col-5">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input required type="text" className="form-control" id="name" placeholder="Enter your Name" onChange={ev => setName(ev.target.value)} />
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

export default AuthorsNew;
