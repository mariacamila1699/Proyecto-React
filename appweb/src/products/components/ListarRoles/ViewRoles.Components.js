import React from 'react'
import Consultas from '../../Services/Roles/RolesService'

export default class ViewRoles extends React.Component {
    state = {
        Rol: [], isModal: false
    };

    async componentDidMount() {
        this.getRoles();
        

    }
    
    getRoles = () => {
        Consultas.getAllRoles()
        .then((response) => {
            this.setState({
                Rol: response.data["Rol"]
            });
            console.log(response.data["Rol"]);
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
                            <th>Tipo</th>
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Rol.map((rol, index) => {
                                    return(
                                        <tr>
                                            <td>{index}</td>
                                            <td>{rol.tipo}</td>
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