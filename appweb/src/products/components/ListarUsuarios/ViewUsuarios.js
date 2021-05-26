import React from 'react'
import Consultas from '../../Services/Usuarios/UserServices'

export default class ViewUsuarios extends React.Component {
    state = {
        usuario: [],
        isModal: false,
        formulario: {
            id: '',
            nombre: '',
            apellido: '',
            correo: '',
            roles: '',
            tipomodal: ''
        }
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
        

        console.log(this.state.formulario)
        await Consultas.CreateUsuario(
            this.state.formulario
        )
            .then((response) => {
                this.handleClick();
                this.getRoles();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    funcionmodalupdate = (usuario) => {
        this.setState({
            tipomodal: 'actualizar',
            formulario: {
                id: usuario._id,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                correo: usuario.correo,
                roles: usuario.roles,
            }
        })
    }

    functionput = (id) => {
        Consultas.EditarUsuario(id, this.state.formulario)
            .then((response) => {
                this.handleClick();
                this.getRoles();
            })
            .catch(error => {
                console.log(error.message);
            })
    }



    render() {
        const active = this.state.isModal ? "is-active" : "";
        const { formulario } = this.state;
        return (

            <div class="box">

                <div className="container">
                    <div className="columns ">
                        <div className="column is-full has-text-centered">
                            <h1 className="is-size-1">LISTA DE USUARIOS</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-5 has-text-left mt-*">
                            <h2 className="is-size-2">Usuarios</h2>
                        </div>
                        <div className="column is-2">
                            <section class="section">
                                <button onClick={() => { this.setState({ formulario: null, tipomodal: 'insertar' }); this.handleClick() }} className="button is-primary">
                                    Agregar Usuario
                                </button>
                            </section>




                        </div>
                    </div>
                </div>


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
                                            return (
                                                <tr>
                                                    <td>{index}</td>
                                                    <td>{usuario.nombre}</td>
                                                    <td>{usuario.apellido}</td>
                                                    <td>{usuario.correo}</td>
                                                    <td>{usuario["roles"].tipo}</td>
                                                    <td>
                                                        <a class="button is-primary" onClick={()=>{this.funcionmodalupdate(usuario); this.handleClick()}}>Editar</a> ||
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

                    <div className={`modal ${active}`}>
                        <div className="modal-background" />
                        <div className="modal-card">
                            <header className="modal-card-head">
                                <p className="modal-card-title">Nuevo Estudiante</p>
                                <button
                                    onClick={this.handleClick}
                                    className="delete"
                                    aria-label="close"
                                />
                            </header>
                            <section className="modal-card-body">

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
                                            value={formulario?formulario.id: ''}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Nombre</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            id="nombre"
                                            onChange={this.funcioncambios}
                                            type="text"
                                            name="nombre"
                                            placeholder="Ingresa su nombre"
                                            value={formulario?formulario.nombre: ''}
                                        />
                                    </div>
                                </div>
                                
                                <div className="field">
                                    <label className="label">Apellido</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            id="apellido"
                                            onChange={this.funcioncambios}
                                            type="text"
                                            name="apellido"
                                            placeholder="ingresa su apellido"
                                            value={formulario?formulario.apellido : ''}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Correo</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            id="correo"
                                            onChange={this.funcioncambios}
                                            type="text"
                                            name="correo"
                                            placeholder="Ingresa su correo"
                                            value={formulario?formulario.correo: ''}
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Roles</label>
                                    <div className="control">
                                        <input
                                            className="input"
                                            id="roles"
                                            onChange={this.funcioncambios}
                                            type="text"
                                            name="roles"
                                            placeholder="ingrese su rol"
                                            value={formulario?formulario.roles: ''}
                                        />
                                    </div>
                                </div>
                            </section>
                            <footer className="modal-card-foot">
                            {this.state.tipomodal === 'insertar' ? 
                                <button className="button is-primary" onClick={() => this.funcionpost()}>Agregar</button>
                                :
                                <button className="button is-primary"  onClick={() => this.functionput(formulario.id)}>Editar</button>
                            }   
                                <button onClick={this.handleClick} className="button">
                                    Cancelar
                                </button>
                            </footer>
                        </div>
                    </div>

                </div>

            </div>


        )

    }
}