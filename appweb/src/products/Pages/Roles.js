import React from 'react'
import { Container, Section } from 'react-bulma-components'
import Getroles from '../components/ListarRoles/ViewRoles'


class Roles extends React.Component {


    render() {

        return (
            <section>
                <Container>
                    <div class="container is-fluid">
                        <br class="mb-5" />



                        <Getroles />

                    </div>
                </Container>
            </section>

        );
    }

}

export default Roles;