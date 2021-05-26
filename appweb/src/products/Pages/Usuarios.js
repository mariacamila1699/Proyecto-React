import React from 'react'
import { Container, Section, Card } from 'react-bulma-components'
import ViewUsuarios from "../components/ListarUsuarios/ViewUsuarios.js"



class Usuarios extends React.Component {
    
    render() {
        
        return (
            <Section>
                <Container>


                        <ViewUsuarios />

                        <Card />
                        

                </Container>
            </Section>
        )

    }
}

export default Usuarios