import React from 'react'
import Consultas from '../../Services/Usuarios/UserServices'

export default class ViewUsuarios extends React.Component {
    state = {
        usuario: [], isModal: false
    };

    async componentDidMount() {
        this.getUsuario();
        

    }
    
    getUsuario = () => {
        Consultas.getAllUsuario()
        .then((response) => {
            this.setState({
                usuario: response.data["usuario"]
            });
            console.log(response.data["usuario"]);
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

          
            <div className="columns is-centered is-vcentered">
                <div className="column is-9">
                    <div className="table-container">
                    <table class="table is-bordered is-striped is-fullwidth is-hoverable">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Roles</th>
                            
                        
                            <th>Estado</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuario.map((usuario, index) => {
                                    return(
                                        <tr>
                                            <td>{index}</td>
                                            <td>{usuario.nombre}</td>
                                            <td>{usuario.apellido}</td>
                                            <td>{usuario.correo}</td>
                                            <td>{usuario["roles"].tipo}</td>
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
         
        )

    }
}