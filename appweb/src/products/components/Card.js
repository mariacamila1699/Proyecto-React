import React from 'react'
import { Container, Section } from 'react-bulma-components'


const Header = () => {

    const style = {

        enlace: {

            margin: 0,
            border: 0,
            maxwidth: 965,

        }

    };

    return (
        <Section>
            <Container>
                
                    <section class="section">
                        <div class="container">
                            <h3 class="title has-text-centered is-size-4">Maestros Destacados</h3>
                            <div class="columns mt-5 is-8 is-variable">
                                <div class="columns mt-5 is-8 is-variable">
                                    <div class="column is-4-tablet is-3-desktop">
                                        <div class="card">
                                            <div class="card-image has-text-centered px-6">
                                                <img src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?size=626&ext=jpg" alt="Placeholder image" ></img>
                                            </div>
                                            <div class="card-content">
                                                <p>Docente</p>
                                                <p class="title is-size-5">Jaime Beltran</p>
                                            </div>
                                            <div class="card-content">
                                                    <div class="content">
                                                    Ingeniero Profesional con bases en diferentes lenguajes de programacion.
                                                    </div>
                                                </div>
                                            <footer class="card-footer">
                                                <p class="card-footer-item">
                                                    <a href="" class="has-text-grey">View</a>
                                                </p>
                                            </footer>
                                        </div>
                                    </div>
                                    <div class="column is-4-tablet is-3-desktop">
                                        <div class="card">
                                            <div class="card-image has-text-centered px-6">
                                                <img src="https://image.freepik.com/foto-gratis/cierrese-encima-retrato-hombre-afeitar-contento-lentes-que-mira-camara-sonrisa-sincera-pie-brazos-cruzados-aislados-sobre-gris_171337-631.jpg" alt="Placeholder image" ></img>
                                            </div>
                                            <div class="card-content">
                                                <p>Docente</p>
                                                <p class="title is-size-5">Carlos Hurtado</p>
                                            </div>
                                            <div class="card-content">
                                                    <div class="content">
                                                    Docente especializado en licenciatura en matematicas de area.
                                                    </div>
                                                </div>
                                            <footer class="card-footer">
                                                <p class="card-footer-item">
                                                    <a href="" class="has-text-grey">View</a>
                                                </p>
                                            </footer>
                                        </div>
                                    </div>
                                    <div class="column is-4-tablet is-3-desktop">
                                        <div class="card">
                                            <div class="card-image has-text-centered px-6">
                                                <img src="https://image.freepik.com/foto-gratis/hombre-negocios-guapo-vestido-traje-apuntando-dedos-lado-mirando-camara-sonrisa-cara-pie-sobre-fondo-blanco_141793-54206.jpg" alt="Placeholder image" ></img>
                                            </div>
                                            <div class="card-content">
                                                <p>Docente</p>
                                                <p class="title is-size-5">Wilder Murcia</p>
                                            </div>
                                            <div class="card-content">
                                                    <div class="content">
                                                    Docente de area y licenciado en lengua castellana y del arte.
                                                    </div>
                                                </div>
                                            <footer class="card-footer">
                                                <p class="card-footer-item">
                                                    <a href="" class="has-text-grey">View</a>
                                                </p>
                                            </footer>
                                        </div>
                                    </div>
                                    <div class="column is-4-tablet is-3-desktop">
                                        <div class="card">
                                            <div class="card-image has-text-centered px-6">
                                                <img src="https://img.freepik.com/foto-gratis/retrato-hombre-guapo-alegre-mantiene-manos-juntas-sonrie-ampliamente-vestido-camisa-elegante_273609-16601.jpg?size=626&ext=jpg" alt="Placeholder image" ></img>
                                            </div>
                                            <div class="card-content">
                                                <p>Docente</p>
                                                <p class="title is-size-5">Carlos Perez</p>
                                            </div>
                                            
                                                <div class="card-content">
                                                    <div class="content">
                                                    Docente de area de ingles y licenciado en idiomas extranjeros.
                                                    </div>
                                                </div>
                                           
                                            <footer class="card-footer">
                                                <p class="card-footer-item">
                                                    <a href="" class="has-text-grey">View</a>
                                                </p>
                                            </footer>
                                        </div>
                                    </div>


                                </div>

                            </div>



                        </div>
                    </section>

                


            </Container>
        </Section>
    )
}

export default Header