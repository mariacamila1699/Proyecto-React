import React from 'react'
import { Container, Section } from 'react-bulma-components'
import ViewMaterias from "../components/ListarMaterias/ViewMaterias"



class Materias extends React.Component {
    
    render() {
        return (
            <Section>
                <Container>
 

                        <ViewMaterias />
                        
                
                </Container>
            </Section>
        );

    }
}

export default Materias