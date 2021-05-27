import React from 'react'
import Consultas from '../../Services/Carrera/CarreraService'

export default class ViewCarrera extends React.Component {
    state = {
        carrera: [],
        isModal: false,
        formulario: {
            id: '',
            nombre: '',
            semestre: '',
            tipomodal: ''
        }
    };

    async componentDidMount() {
        this.getCarrera();


    }

    getCarrera = () => {
        Consultas.getAllCarrera()
            .then((response) => {
                this.setState({
                    carrera: response.data["carrera"]
                });
                console.log(response.data["carrera"]);
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
        await Consultas.CreateCarrera(
            this.state.formulario
        )
            .then((response) => {
                this.handleClick();
                this.getCarrera();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    funcionmodalupdate = (carrera) => {
        this.setState({
            tipomodal: 'actualizar',
            formulario: {
                id: carrera._id,
                nombre: carrera.nombre,
                semestre: carrera.semestre,

            }
        })
    }

    functionput = (id) => {
        Consultas.EditarCarrera(id, this.state.formulario)
            .then((response) => {
                this.handleClick();
                this.getCarrera();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    funcioneliminar = (id) => {
        Consultas.EliminarCarrera(id, this.state.formulario)
            .then((response) => {
                this.getCarrera();
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
                            <h1 className="is-size-1">LISTAR CARRERAS</h1>
                        </div>
                    </div>
                    <hr />
                    <div className="columns is-centered is-vcentered">
                        <div className="column is-5 has-text-left mt-*">
                            <h2 className="is-size-2">CARRERAS</h2>
                        </div>
                        <div className="column is-2">
                            <section class="section">
                                <button onClick={() => { this.setState({ formulario: null, tipomodal: 'insertar' }); this.handleClick() }} className="button is-primary">
                                    Agregar Carrera
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
                                        <th>Semestre</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.carrera.map((carrera, index) => {
                                            return (
                                                <tr>
                                                    <td>{index}</td>
                                                    <td>{carrera.nombre}</td>
                                                    <td>{carrera.semestre}</td>
                                                    <td>
                                                        <a class="button is-primary" onClick={()=>{this.funcionmodalupdate(carrera); this.handleClick()}}>Editar</a> // 
                                                        <a class="button is-danger" onClick={() => this.funcioneliminar(carrera._id)}>Eliminar</a>
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
                            <p className="modal-card-title">Nuevo Carrera</p>
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
                                <label className="label">Semestre</label>
                                <div className="control">
                                    <input
                                        className="input"
                                        id="semestre"
                                        onChange={this.funcioncambios}
                                        type="text"
                                        name="semestre"
                                        placeholder="Ingresa su semestre"
                                        value={formulario?formulario.semestre: ''}
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