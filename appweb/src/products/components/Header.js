import React from 'react'
import {Container, Section} from 'react-bulma-components'
import Menu from './Menu'

const Header = ({title}) =>{

    return(
        <Section>
            <Container>
                
                
                <h1 className="title has-text-centered">BIENVENIDOS A MI PAGINA</h1>
                
                <Menu ></Menu>

            </Container>
        </Section>
    )
}

export default Header