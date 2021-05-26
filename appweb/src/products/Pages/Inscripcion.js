import React from 'react'
import { Container, Section } from 'react-bulma-components'
import ViewInscripcion from "../components/ListarInscripcion/ViewInscripcion"



class Inscripcion extends React.Component {
    

    render() {
        
        return (
            <Section>
                <Container>


                        <ViewInscripcion />
                        

                </Container>
            </Section>
        )

    }
}

export default Inscripcion