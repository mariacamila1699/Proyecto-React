import React from 'react'
import { Container, Section, } from 'react-bulma-components'
import { Link } from 'react-router-dom';


const Menu = () => {

    const style = {
        marginLeft: "50px",
        marginTop: "5px",
        enlace: {
            boxbackgroundcolor: '$scheme-main'
        }

    };

    return (

        <Section>
            <Container>

               
                <nav class="navbar is-primary" role="navigation" aria-label="main navigation" style={style}>
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                        </a>

                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>


                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item">
                            <Link to={'/Home'} className='nav-links'>Home</Link>
                            </a>

                            <a class="navbar-item">
                            <Link to={'/Usuarios'} className='nav-links'>Usuarios</Link>
                             </a>

                            <a class="navbar-item">
                            <Link to={'/Roles'} className='nav-links'>Roles</Link>
                             </a>

                            <a class="navbar-item">
                            <Link to={'/Productos'} className='nav-links'>Productos</Link>
                            </a>
                            <a class="navbar-item">
                            <Link to={'/Estudiantes'} className='nav-links'>Estudiantes</Link>
                            </a>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link">
                                    Mas
                                </a>
                                <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                        otro
                                    </a>
                                    <a class="navbar-item">
                                        otro
                                    </a>
                                    <a class="navbar-item">
                                        otro
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-light">
                                    <strong>Registrarse</strong>
                                </a>
                                <a class="button is-light">
                                    Log in
          </a>
                            </div>
                        </div>
                    </div>
                </nav>

                



            </Container>
        </Section>



    )
}

export default Menu