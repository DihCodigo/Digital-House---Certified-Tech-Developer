import React from "react";

import '../css/About.css'
import { Link } from 'react-router-dom';

const About = props => (
    <aside className="About">
        <header>
            <h1>Digital House - Certified Tech Developer</h1>
            <div className="calendar" id="calendar"></div>
            <p>1ª etapa: 1 ano e 9 meses | 2ª etapa (especialização): 1 ano</p>
        </header>

        <main>
            <section className="bloco1">
                <p>É um curso completo de Programação, pensado e desenhado pelo Mercado
                    Livre e Globant em conjunto com a Digital House. Você aprenderá os
                    conhecimentos técnicos e as soft skills necessárias para entrar
                    nas melhores empresas de tecnologia.
                </p>
            </section>

            <section className="bloco2">
                <h2>Conteúdo do Curso</h2>
                <ol>
                    <li>
                        <Link to="">Fundamentos</Link>
                        <ul>
                            <li>Ferramentas Tecnicas</li>
                            <li>GIT</li>
                            <li>Programação Imperativa:JavaScript</li>
                            <li>Programação Orientada a Objetos:Java</li>
                        </ul>
                    </li>
                    <li>
                        <Link to="">Front-end</Link>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript e Progressive Web Apps (especialização)</li>
                        </ul>
                    </li>
                    <li>
                        <Link to="">Back-end</Link>
                        <ul>
                            <li>Java</li>
                            <li>Spring</li>
                            <li>MVC</li>
                            <li>Aplicações monolíticas</li>
                            <li>APIs</li>
                            <li>Gerenciamento de dados (especialização)</li>
                        </ul>
                    </li>
                    <li>
                        <Link to="">Qualidade</Link>
                        <ul>
                            <li>Test Driven Development</li>
                        </ul>
                    </li>
                    <li>
                        <Link to="">Infraestrutura</Link>
                        <ul>
                            <li>Custos</li>
                            <li>Escalabilidade </li>
                            <li>Manutenção</li>
                        </ul>
                    </li>
                </ol>
            </section>

        </main>
    </aside>
)

export default About