import React from 'react'
import { Container, Section, } from 'react-bulma-components'

const Imagen = () => {

    const style = {

        enlace: {
            
            width: 350,
            height: 350,
        }



    };

    return (
        <Section>
            <Container>

                
                <div class="column has-text-centered">
                <figure class="image is-128x128 is-inline-block" style={style.enlace}>
                <img class="is-rounded" style={style.enlace} src="https://urpimedia.com/wp-content/uploads/2019/07/marketing-digital-difusi%C3%B3n-instituciones-educativas.png" />

                </figure>
                </div>

               



            </Container>
        </Section>
    )
}

export default Imagen