import React from 'react'
import {Container, Section} from 'react-bulma-components'
import Imagen from '../components/Imagen'
import Card from '../components/Card'



const Home = () =>{

    return(
        <Section>
            <Container>
                
            <div class="box">  
            <h1 className="title has-text-centered">EQUIPO EDUCATIVO</h1>
            <Imagen></Imagen>
            <Card></Card>
            
            </div>


                

            </Container>
        </Section>
    )
}

export default Home 