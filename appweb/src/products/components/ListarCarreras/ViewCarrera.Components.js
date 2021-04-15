import React from 'react'
import Consultas from '../../Services/Carrera/CarreraService'

export default class ViewCarrera extends React.Component {
    state = {
        carrera: [], isModal: false
    };

    async componentDidMount() {
        this.getCarrera();
        

    }
    
    getCarrera = () => {
        Consultas.getAllCarrera()
        .then((response) => {
            this.setState({
                carrera: response.data["carrera"]
            });
            console.log(response.data["carrera"]);
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
                            <th>Semestre</th>
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.carrera.map((carrera, index) => {
                                    return(
                                        <tr>
                                            <td>{index}</td>
                                            <td>{carrera.nombre}</td>
                                            <td>{carrera.semestre}</td>
                                            <td>
                                            <a class="button is-warning">Editar</a> ||
                                            <a class="button is-danger">Eliminar</a>
                                            </td>
                                            
                                        </tr>
                                    )
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