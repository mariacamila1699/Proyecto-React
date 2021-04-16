import React from 'react'
import { Container, Section } from 'react-bulma-components'
import ViewMaterias from "../components/ListarMaterias/ViewMaterias"



class Materias extends React.Component {
    state = {

        isModal: false


    }

    handleClick = () => {
        this.setState({ isModal: !this.state.isModal });
    };

    render() {
        const active = this.state.isModal ? "is-active" : "";



        return (
            <Section>
                <Container>


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
                                                placeholder="Ingresa su nombre"
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Creditos</label>
                                        <div className="control">
                                            <textarea className="input" placeholder="Ingresa su apellido" maxLength="12">

                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Usuario</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
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
                                                placeholder="Ingresa su sexo"
                                            />
                                        </div>
                                    </div>
                                    
                                </section>
                                <footer className="modal-card-foot">
                                    <button className="button is-primary">Agregar</button>
                                    <button onClick={this.handleClick} className="button">
                                        Cancelar
                                </button>
                                </footer>
                            </div>
                        </div>


                            </div>
                        </div>

                        <ViewMaterias />
                        
                    </div>



                </Container>
            </Section>
        )

    }
}

export default Materias