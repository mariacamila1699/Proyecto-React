import React from 'react'
import { Container, Section } from 'react-bulma-components'
import ViewHorarioEstudiante from "../components/ListarHorarioEstudiante/ViewHorarioEstudiante"



class HorarioEstudiante extends React.Component {
   

    render() {
       

        return (
            <Section>
                <Container>
                    
                        <ViewHorarioEstudiante />
                        

                </Container>
            </Section>
        )

    }
}

export default HorarioEstudiante