import React from 'react'
import Consultas from '../../Services/Materias/MateriasService'

export default class ViewMaterias extends React.Component {
    state = {
        materia: [], 
        isModal: false,
        formulario: {
            id: '',
            nombre: '',
            creditos: '',
            tipomodal: ''
        }
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

    funcionmodalupdate = (materia) => {
        this.setState({
            tipomodal: 'actualizar',
            formulario: {
                id: materia.nombre,
                tipo: materia.creditos,
            }
        })
    }

    funcioneditar = (id) => {
        Consultas.EditarMaterias(id, this.state.formulario)
            .then((response) => {
                this.handleClick();
                
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
                                                            <a onClick={() => { this.funcionmodalupdate(materia); this.handleClick() }}  class="button is-primary">Editar</a> ||
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

                <div className="container">
                        <div className="columns ">
                            <div className="column is-full has-text-centered">
                                <h1 className="is-size-1">LISTA DE MATERIAS</h1>
                            </div>
                        </div>
                        <hr />
                        <div className="columns is-centered is-vcentered">
                            <div className="column is-5 has-text-left mt-*">
                                <h2 className="is-size-2">MATERIAS</h2>
                            </div>
                            <div className="column is-2">
                                <section class="section">
                                    <button onClick={this.handleClick} className="button is-primary">
                                        Agregar Materia
                                </button>
                                </section>

                                <div className={`modal ${active}`}>
                            <div className="modal-background" />
                            <div className="modal-card">
                                <header className="modal-card-head">
                                    <p className="modal-card-title">Nuevo Materia</p>
                                    <button
                                        onClick={this.handleClick}
                                        className="delete"
                                        aria-label="close"
                                    />
                                </header>
                                <section className="modal-card-body">
                                    <div className="field">
                                        <label className="label">Nombre</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                onChange={this.funcioncambios}
                                                placeholder="Ingresa su nombre"
                                                value={formulario ? formulario.nombre: ''}
                                                
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Creditos</label>
                                        <div className="control">
                                            <input 
                                            className="input" 
                                            id="creditos"
                                            name="creditos"
                                            onChange={this.funcioncambios}
                                            placeholder="Ingresa su apellido" maxLength="12">
                                              
                                               

                                            </input>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Usuario</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                onChange={this.funcioncambios}
                                                placeholder="infresa su direccion"
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Rol</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                onChange={this.funcioncambios}
                                                placeholder="Ingresa su sexo"
                                            />
                                        </div>
                                    </div>
                                    
                                </section>
                                <footer className="modal-card-foot">
                                   {this.state.tipomodal === 'insertar' ?
                                    <button className="button is-primary">Agregar</button>
                                    :
                                    <button className="button is-primary" onClick={() => this.funcioneditar(formulario.id)}>Editar</button>
                                   }
                                    <button onClick={this.handleClick} className="button">
                                        Cancelar
                                </button>
                                </footer>
                            </div>
                        </div>


                            </div>
                        </div>

                       
                        
                    </div>

            </div>
        )

    }
}