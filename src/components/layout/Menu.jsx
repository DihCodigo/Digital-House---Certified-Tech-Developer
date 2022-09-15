import './Menu.css'
import React from "react";

import { Link } from 'react-router-dom';
import NotFound from './../../views/examples/NotFound';

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/about">DH - Sobre</Link>
                </li>
                <li>
                    <Link to="/">DH - FrontE_I</Link>
                </li>
                <li>
                    <Link to="/param/001">#01</Link>
                </li>
                <li>
                    <Link to="/param/002">#02</Link>
                </li>
                

                <li>
                    <Link to="/NaoExiste">NotFound</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu