import React from 'react'
import { Container, Section } from 'react-bulma-components'
import ViewAula from "../components/ListarAulas/ViewAula"



class Aula extends React.Component {
    

    render() {
        
        return (
            <Section>
                <Container>

                        <ViewAula />
                        
            
                </Container>
            </Section>
        )

    }
}

export default Aula