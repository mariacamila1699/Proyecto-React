import React from 'react'
import Consultas from '../../Services/HorarioEstudiante/HorarioEstudianteService'

export default class ViewHorarioEstudiante extends React.Component {
    state = {
        horario: [], isModal: false
    };

    async componentDidMount() {
        this.getHorarioEstudiante();
        

    }
    
    getHorarioEstudiante = () => {
        Consultas.getAllHorarioEstudiante()
        .then((response) => {
            this.setState({
                horario: response.data["horario"]
            });
            console.log(response.data["horario"]);
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
                            <th>Dia</th>
                            <th>Hora_Inicio</th>
                            <th>Hora_Final</th>
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.horario.map((horario, index) => {
                                    return(
                                        <tr>
                                            <td>{index}</td>
                                            <td>{horario.dia}</td>
                                            <td>{horario.hora_inicio}</td>
                                            <td>{horario.hora_final}</td>
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