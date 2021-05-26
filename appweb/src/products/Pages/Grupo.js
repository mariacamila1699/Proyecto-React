import React from 'react'
import { Container, Section } from 'react-bulma-components'
import ViewGrupo from "../components/ListarGrupos/ViewGrupo"



class Grupo extends React.Component {
    
    render() {
        
        return (
            <Section>
                <Container>



                        <ViewGrupo />
                        
                
                </Container>
            </Section>
        )

    }
}

export default Grupo