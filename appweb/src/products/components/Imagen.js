import React from 'react'
import { Container, Section, } from 'react-bulma-components'

const Imagen = () => {

    const style = {

        enlace: {
            
            width: 250,
            height: 250,
        }



    };

    return (
        <Section>
            <Container>

                
                <div class="column has-text-centered">
                <figure class="image is-128x128 is-inline-block" style={style.enlace}>
                <img class="is-rounded" style={style.enlace} src="https://thumbs.dreamstime.com/b/logotipo-del-libro-53875554.jpg" />

                </figure>
                </div>

               



            </Container>
        </Section>
    )
}

export default Imagen