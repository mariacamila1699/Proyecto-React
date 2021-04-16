import React from 'react'
import Consultas from '../../Services/Grupos/GrupoService'

export default class ViewgrupoProfesor extends React.Component {
    state = {
        grupo: [], isModal: false
    };

    async componentDidMount() {
        this.getGrupo();
        

    }
    
    getGrupo = () => {
        Consultas.getAllGrupo()
        .then((response) => {
            this.setState({
                grupo: response.data["grupo"]
            });
            console.log(response.data["grupo"]);
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
                            <th>Capacidad</th>
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.grupo.map((grupo, index) => {
                                    return(
                                        <tr>
                                            <td>{index}</td>
                                            <td>{grupo.nombre}</td>
                                            <td>{grupo.capacidad}</td>
                                            <td>
                                            <a class="button is-primary">Editar</a> ||
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