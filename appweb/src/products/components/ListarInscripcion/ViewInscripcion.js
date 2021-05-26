import React from 'react'
import Consultas from '../../Services/Inscripcion/InscripcionService'

export default class Viewinscripcion extends React.Component {
    state = {
        inscripcion: [],
        isModal: false,
        formulario: {
            id: '',
            fecha_inscripcion: '',
            user: '',
            tipomodal: ''
            
        }
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
        await Consultas.CreateInscripcion(
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

    funcionmodalupdate = (inscripcion) => {
        this.setState({
            tipomodal: 'actualizar',
            formulario: {
                id: inscripcion._id,
                fecha_inscripcion: inscripcion.fecha_inscripcion,
                user: inscripcion.user,
                
            }
        })
    }

    functionput = (id) => {
        Consultas.EditarInscripcion(id, this.state.formulario)
            .then((response) => {
                this.handleClick();
                this.getRoles();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    funcioneliminar = (id) => {
        Consultas.EliminarInscripcion(id, this.state.formulario)
            .then((response) => {
                this.getRoles();
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
                            <h1 className="is-size-1">LISTA DE INSCRIPCIONES</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-5 has-text-left mt-*">
                            <h2 className="is-size-2">INSCRIPCIONES</h2>
                        </div>
                        <div className="column is-2">
                            <section class="section">
                                <button onClick={() => { this.setState({ formulario: null, tipomodal: 'insertar' }); this.handleClick() }} className="button is-primary">
                                    Agregar Inscripcion
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
                                        <th>Fecha</th>
                                        <th>usuario</th>
                                        

                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.inscripcion.map((inscripcion, index) => {

                                            

                                                return (
                                                    <tr>
                                                        <td>{index}</td>
                                                        <td>{inscripcion.fecha_inscripcion}</td>
                                                        <td>{inscripcion["user"].nombre}</td>
                                                        
                                                        <td>
                                                            <a class="button is-primary" onClick={()=>{this.funcionmodalupdate(inscripcion); this.handleClick()}}>Editar</a> ||
                                                        <a class="button is-danger" onClick={() => this.funcioneliminar(formulario.id)}>Eliminar</a>
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

                <div className={`modal ${active}`}>
                    <div className="modal-background" />
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Nuevo Inacripcion</p>
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
                                <label className="label">FECHA</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        id="fecha_inscripcion"
                                        onChange={this.funcioncambios}
                                        type="text"
                                        name="fecha_inscripcion"
                                        placeholder="Ingresa su fecha"
                                        value={formulario?formulario.fecha_inscripcion: ''}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Usuario</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        id="user"
                                        onChange={this.funcioncambios}
                                        type="text"
                                        name="user"
                                        placeholder="Ingrese id usuario"
                                        value={formulario?formulario.user: ''}
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
        )

    }
}