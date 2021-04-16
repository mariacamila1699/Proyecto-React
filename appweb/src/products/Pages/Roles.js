import React from 'react'
import { Container, Section } from 'react-bulma-components'
import ViewRoles from "../components/ListarRoles/ViewRoles"



class Roles extends React.Component {
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
                                <h1 className="is-size-1">LISTA DE ROLES</h1>
                            </div>
                        </div>
                        <hr />
                        <div className="columns is-centered is-vcentered">
                            <div className="column is-5 has-text-left mt-*">
                                <h2 className="is-size-2">Roles</h2>
                            </div>
                            <div className="column is-2">
                                <section class="section">
                                    <button onClick={this.handleClick} className="button is-primary">
                                        Agregar Rol
                                </button>
                                </section>

                                <div className={`modal ${active}`}>
                            <div className="modal-background" />
                            <div className="modal-card">
                                <header className="modal-card-head">
                                    <p className="modal-card-title">Nuevo Rol</p>
                                    <button
                                        onClick={this.handleClick}
                                        className="delete"
                                        aria-label="close"
                                    />
                                </header>
                                <section className="modal-card-body">
                                    <div className="field">
                                        <label className="label">Tipo de Rol</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Ingresa su nombre"
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

                        <ViewRoles />
                        
                    </div>



                </Container>
            </Section>
        )

    }
}

export default Roles