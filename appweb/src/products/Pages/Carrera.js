import React from 'react'
import { Container, Section } from 'react-bulma-components'
import ViewCarrera from "../components/ListarCarreras/ViewCarrera"



class Carrera extends React.Component {
    

    render() {
    

        return (
            <Section>
                <Container>
   

                        <ViewCarrera />
                        
    

                </Container>
            </Section>
        )

    }
}

export default Carrera