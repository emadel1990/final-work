import React from 'react';
import './sidebar.css';
import 'app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUsers,
    faPeopleCarry,
    faWallet,
    faTools
} from '@fortawesome/free-solid-svg-icons';




export default class Sidebar extends React.Component {

    prevent(e) {
        this.prevendDefault()
    }
    render() {
        return (
            <nav className="sidebar">
                <ul className="sidebar-nav">
                    <li className="sidebar-item">
                        <a href={this.prevent} className=" sidebar-link">
                            <FontAwesomeIcon className="icono" icon={faWallet} />
                            <span className="link-text">Caja</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href={this.prevent} className="sidebar-link">
                            <FontAwesomeIcon className="icono" icon={faUsers} />
                            <span className="link-text">Clientes</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href={this.prevent} className="sidebar-link">
                            <FontAwesomeIcon className="icono" icon={faPeopleCarry} />
                            <span className="link-text">Proveedores</span>
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href={this.prevent} className="sidebar-link">
                            <FontAwesomeIcon className="icono" icon={faTools} />
                            <span className="link-text">Reparaciones</span>
                        </a>
                    </li>

                </ul>
            </nav >
        )
    }
}
