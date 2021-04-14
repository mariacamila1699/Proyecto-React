import React from 'react'
import Consultas from '../../Services/Materias/MateriasService'

export default class ViewMaterias extends React.Component {
    state = {
        materia: [], isModal: false
    };

    async componentDidMount() {
        this.getMaterias();


    }

    getMaterias = () => {
        Consultas.getAllMaterias()
            .then((response) => {
                this.setState({
                    materia: response.data["materia"]
                });
                console.log(response.data["materia"]);
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
                                        <th>Nombre</th>
                                        <th>Creditos</th>
                                        <th>Usuario</th>
                                        <th>Rol</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.materia.map((materia, index) => {
                                            if (materia["usuarios"]["roles"].tipo == 'profesor') {
                                                return (
                                                    <tr>
                                                        <td>{index}</td>
                                                        <td>{materia.nombre}</td>
                                                        <td>{materia.creditos}</td>
                                                        <td>{materia["usuarios"].nombre} {materia["usuarios"].apellido}</td>
                                                        <td>{materia["usuarios"]["roles"].tipo}</td>
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