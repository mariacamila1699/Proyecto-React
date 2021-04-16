import React from 'react'
import Consultas from '../../Services/Inscripcion/InscripcionService'

export default class Viewinscripcion extends React.Component {
    state = {
        inscripcion: [], isModal: false
    };

    async componentDidMount() {
        this.getInscripcion();


    }

    getInscripcion = () => {
        Consultas.getAllInscripcion()
            .then((response) => {
                this.setState({
                    inscripcion: response.data["inscripcion"]
                });
                console.log(response.data["inscripcion"]);
            })
            .catch(e => {
                console.log(e);
            });
    }

    handleClick = () => {
        this.setState({ isModal: !this.state.isModal });
    };


    render() {
        const active = this.state.isModal ? "is-active" : "";
        return (

            <div class="box">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-9">
                        <div className="table-container">
                            <table class="table is-bordered is-striped is-fullwidth is-hoverable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Fecha</th>
                                        <th>usuario</th>
                                        <th>Rol</th>
                                        
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.inscripcion.map((inscripcion, index) => {

                                            if (inscripcion["usuarios"]["roles"].tipo == 'Estudiante') {
                                            
                                                return (
                                                    <tr>
                                                        <td>{index}</td>
                                                        <td>{inscripcion.fecha_inscripcion}</td>
                                                        <td>{inscripcion["usuarios"].nombre}</td>
                                                        <td>{inscripcion["usuarios"]["roles"].tipo}</td>
                                                        
                                                        
                                                        <td>
                                                            <a class="button is-warning">Editar</a> ||
                                                        <a class="button is-danger">Eliminar</a>
                                                        </td>

                                                    </tr>
                                                )
                                         }    
                                            
                                        }

                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}