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
                        <img src="https://lh3.googleusercontent.com/proxy/JwN1bYj5ofOBlm1ccL82hkuDwFn18PDf9xIDxN72TN64raYlFFQj0hHL2Ib2VRGUNMynFx1eZslFSu0-b3Qb4Ab255WmQhg2HbOSqTk1aFN29ugIwqDHHEI2dtRjnZTta55kuioib0Xmr-3yS9w" width="155" height="70"/>
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
                            <Link to={'/Materias'} className='nav-links'>Materias</Link>
                            </a>
                            <a class="navbar-item">
                            <Link to={'/Inscripcion'} className='nav-links'>Inscripciones</Link>
                            </a>
                            <a class="navbar-item">
                            <Link to={'/Grupo'} className='nav-links'>Grupos</Link>
                            </a>
                            <a class="navbar-item">
                            <Link to={'/Aula'} className='nav-links'>Aulas</Link>
                            </a>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link">
                                    Horarios
                                </a>
                                <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                    <Link to={'/HorarioProfesor'} className='nav-links'>HorarioProfesor</Link>
                                    </a>
                                    <a class="navbar-item">
                                    <Link to={'/HorarioEstudiante'} className='nav-links'>HorarioEstudiante</Link>
                                    </a>
                                    


                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-danger">
                                    <strong>Hola</strong>
                                </a>
                                <a class="button is-danger">
                                    Saludos
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