import React from 'react'
import Consultas from '../../Services/Aulas/AulaService'

export default class ViewAula extends React.Component {
    state = {
        aula: [], isModal: false
    };

    async componentDidMount() {
        this.getAula();
        

    }
    
    getAula = () => {
        Consultas.getAllAula()
        .then((response) => {
            this.setState({
                aula: response.data["aula"]
            });
            console.log(response.data["aula"]);
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
                            <th>Bloque</th>
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.aula.map((aula, index) => {
                                    return(
                                        <tr>
                                            <td>{index}</td>
                                            <td>{aula.nombre}</td>
                                            <td>{aula.bloque}</td>
                                            
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