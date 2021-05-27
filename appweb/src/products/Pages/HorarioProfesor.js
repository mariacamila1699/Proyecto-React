import React from 'react'
import { Container, Section } from 'react-bulma-components'
import ViewHorarioProfesor from "../components/ListarHorarioProfesor/ViewHorarioProfesor"



class HorarioProfesor extends React.Component {
    
    render() {
        
        return (
            <Section>
                <Container>


                        <ViewHorarioProfesor />
                        
            
                </Container>
            </Section>
        )

    }
}

export default HorarioProfesor