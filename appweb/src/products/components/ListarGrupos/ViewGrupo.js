import React from 'react'
import Consultas from '../../Services/Grupos/GrupoService'

export default class ViewgrupoProfesor extends React.Component {
    state = {
        grupo: [], 
        isModal: false,
        formulario: {
            id: '',
            nombre: '',
            capacidad: ''
        }
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
        await Consultas.CreateGrupo(
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


    render() {
        const active = this.state.isModal ? "is-active" : "";
        const { formulario } = this.state;
        return (

            <div class="box">

                <div className="container">
                    <div className="columns ">
                        <div className="column is-full has-text-centered">
                            <h1 className="is-size-1">LISTAR GRUPOS</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-5 has-text-left mt-*">
                            <h2 className="is-size-2">GRUPOS</h2>
                        </div>
                        <div className="column is-2">
                            <section class="section">
                                <button onClick={this.handleClick} className="button is-primary">
                                    Agregar Grupo
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
                                        <th>Capacidad</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.grupo.map((grupo, index) => {
                                            return (
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

                <div className={`modal ${active}`}>
                    <div className="modal-background" />
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Nuevo Grupo</p>
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
                                        value={formulario.id}
                                        
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
                                        placeholder="Ingrese nombre"
                                        value={formulario.nombre}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Capacidad</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        id="capacidad"
                                        onChange={this.funcioncambios}
                                        type="text"
                                        name="capacidad"
                                        placeholder="Ingrese capacidad"
                                        value={formulario.capacidad}
                                    />
                                </div>
                            </div>
                            
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-primary" onClick={() => this.funcionpost()}>Agregar</button>
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