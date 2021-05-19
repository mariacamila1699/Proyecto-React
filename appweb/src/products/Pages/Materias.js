import React from 'react'
import { Container, Section } from 'react-bulma-components'
import ViewMaterias from "../components/ListarMaterias/ViewMaterias"



class Materias extends React.Component {
    state = {

        isModal: false


    }

    handleClick = () => {
        this.setState({ isModal: !this.state.isModal });
    };

    render() {
        const active = this.state.isModal ? "is-active" : "";



        return (
            <Section>
                <Container>
 

                        <ViewMaterias />
                        
                
                </Container>
            </Section>
        )

    }
}

export default Materias