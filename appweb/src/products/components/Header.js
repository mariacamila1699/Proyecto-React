import React from 'react'
import { Container, Section } from 'react-bulma-components'
import Menu from './Menu'

const Header = ({ title }) => {

    return (
        <Section>
            <Container>


                <section class="hero is-primary">
                    <div class="hero-body">
                        <p class="title">
                            BIENVENIDO
                        </p>
                        <p class="subtitle">
                            ADMINISTRADOR
                       </p>
                    </div>
                    <Menu ></Menu>
                </section>

            
            </Container>
        </Section>

        
    )
}

export default Header