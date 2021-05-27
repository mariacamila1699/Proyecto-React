import React from 'react'
import Consultas from '../../Services/HorarioEstudiante/HorarioEstudianteService'

export default class ViewHorarioEstudiante extends React.Component {
    state = {
        horario: [],
        isModal: false,
        formulario: {
            id: '',
            dia: '',
            hora_inicio: '',
            hora_final: '',
            tipomodal: ''
        }
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
        await Consultas.CreateHorarioEstudiante(
            this.state.formulario
        )
            .then((response) => {
                this.handleClick();
                this.getHorarioEstudiante();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    funcionmodalupdate = (horario) => {
        this.setState({
            tipomodal: 'actualizar',
            formulario: {
                id: horario._id,
                dia: horario.dia,
                hora_inicio: horario.hora_inicio,
                hora_final: horario.hora_final,

            }
        })
    }

    functionput = (id) => {
        Consultas.EditarHorarioEstudiante(id, this.state.formulario)
            .then((response) => {
                this.handleClick();
                this.getHorarioEstudiante();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    funcioneliminar = (id) => {
        console.info(id)
        Consultas.EliminarHorarioEstudiante(id, this.state.formulario)
            .then((response) => {
                this.getHorarioEstudiante();
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
                            <h1 className="is-size-1">LISTAR HORARIO ESTUDIANTE</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-5 has-text-left mt-*">
                            <h2 className="is-size-2">HORARIOS</h2>
                        </div>
                        <div className="column is-2">
                            <section class="section">
                                <button onClick={() => { this.setState({ formulario: null, tipomodal: 'insertar' }); this.handleClick() }} className="button is-primary">
                                    Agregar Horario
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
                                        <th>Dia</th>
                                        <th>Hora_Inicio</th>
                                        <th>Hora_Final</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.horario.map((horario, index) => {
                                            return (
                                                <tr>
                                                    <td>{index}</td>
                                                    <td>{horario.dia}</td>
                                                    <td>{horario.hora_inicio}</td>
                                                    <td>{horario.hora_final}</td>

                                                    <td>
                                                        <a class="button is-primary" onClick={()=>{this.funcionmodalupdate(horario); this.handleClick()}}>Editar</a> ||
                                                        <a class="button is-danger" onClick={() => this.funcioneliminar(horario._id)}>Eliminar</a>
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
                            <p className="modal-card-title">Nuevo Horario</p>
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
                                <label className="label">Dia</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        id="dia"
                                        onChange={this.funcioncambios}
                                        type="text"
                                        name="dia"
                                        placeholder="Ingresa  dia"
                                        value={formulario?formulario.dia: ''}
                                    />
                                </div>
                            </div>
                            
                            <div className="field">
                                <label className="label">Hora Inicio</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        id="hora_inicio"
                                        onChange={this.funcioncambios}
                                        type="text"
                                        name="hora_inicio"
                                        placeholder="ingrese hora inicio"
                                        value={formulario?formulario.hora_inicio: ''}
                                        
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Hora Final</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        id="hora_final"
                                        onChange={this.funcioncambios}
                                        type="text"
                                        name="hora_final"
                                        placeholder="ingrese hora final"
                                        value={formulario?formulario.hora_final: ''}
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