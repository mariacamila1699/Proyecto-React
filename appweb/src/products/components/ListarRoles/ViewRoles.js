import React from 'react'
import Consultas from '../../Services/Roles/RolesService'

export default class ViewRoles extends React.Component {
    state = {
        Rol: [],
        modal: false,
        formulario: {
            id: '',
            tipo: '',
            tipomodal: ''


        }

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
            .catch(a => {
                console.log(a);
            });
    }

    funcionmodal = () => {
        this.setState({ modal: !this.state.modal });
    }

    funcioncambios = async e => {
        e.persist();
        await this.setState({
            formulario: {
                ...this.state.formulario,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.formulario);
    }

    funcionpost = async () => {
        delete this.state.formulario.id;

        console.log(this.state.formulario)
        await Consultas.CreateRoles(
            this.state.formulario
        )
            .then((response) => {
                this.funcionmodal();
                this.getRoles();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    funcionmodalupdate = (rol) => {
        this.setState({
            tipomodal: 'actualizar',
            formulario: {
                id: rol._id,
                tipo: rol.tipo,
            }
        })
    }

    funcioneditar = (id) => {
        Consultas.EditarRoles(id, this.state.formulario)
            .then((response) => {
                this.funcionmodal();
                this.getRoles();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    funcioneliminar = (id) => {
        Consultas.EliminarRoles(id)
            .then((response) => {
                this.getRoles();
        })
        
      }


    render() {

        const activarmodal = this.state.modal ? "is-active" : "";
        const { formulario } = this.state;

        return (

            <div>
                <div className="columns">
                    <div className="column">
                        <section class="section">
                            <h1 class="title">Roles</h1>
                        </section>
                    </div>

                    <div className="column">
                        <section className="section">

                            <button onClick={() => { this.setState({ formulario: null, tipomodal: 'insertar' }); this.funcionmodal() }} className="button is-primary">Agregar</button>

                        </section>

                    </div>

                </div>
               
                <div className="columns is-centered is-vcentered">
                    <div className=" column is-5">
                        <div class="table-container">
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
                                            return (
                                                <tr>
                                                    <td>{index}</td>
                                                    <td>{rol.tipo}</td>
                                                    <td>
                                                        <a onClick={() => { this.funcionmodalupdate(rol); this.funcionmodal() }} class="button is-primary">Editar</a> ||       
                                                        <a onClick={() =>  this.funcioneliminar(rol) }  class="button is-danger">Eliminar</a>
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

                <div class={`modal ${activarmodal}`}>
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                            <p class="modal-card-title">Rol</p>
                            <button onClick={this.funcionmodal} class="delete" aria-label="close"></button>
                        </header>
                        <section class="modal-card-body">
                            <div className="field">
                                <label className="label">id</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        id="id"
                                        onChange={this.funcioncambios}
                                        type="text"
                                        name="id"
                                        disabled
                                        value={formulario ? formulario.id : ''}



                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Rol</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        id="tipo"
                                        onChange={this.funcioncambios}
                                        type="text"
                                        placeholder="Ingrese el rol"
                                        name="tipo"
                                        value={formulario ? formulario.tipo : ''}


                                    />
                                </div>
                            </div>
                        </section>
                        <footer class="modal-card-foot">
                            {this.state.tipomodal === 'insertar' ?

                                <button onClick={() => this.funcionpost()} class="button is-success">Save changes</button>
                                :
                                <button className="button is-primary" onClick={() => this.funcioneditar(formulario.id)}>Editar</button>
                            }
                            <button onClick={this.funcionmodal} class="button">Cancel</button>

                        </footer>

                        
                    </div>

                    
                </div>

                
                
            </div>

        )

    }
}

