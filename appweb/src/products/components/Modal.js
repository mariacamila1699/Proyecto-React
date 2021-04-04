import React from 'react'
import { Container, Section } from 'react-bulma-components'


const Modal = () => {

    return (
        <Section>
            <Container>

                <div class="container">
                    <div class="columns">
                        <div class="column is-3">
                            <div class="container">
                                <div class="columns">
                                    <div class="column">
                                       <button class="button is-primary" data-modal="modal">abrir modal</button>
                                        <div class="modal">
                                            <div class="modal-background"></div>
                                            <div class="modal-content">
                                                
                                            </div>
                                            <button class="modal-close is-large" aria-label="close"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <script>
                    

                </script>



            </Container>
        </Section>
    )
}

export default Modal