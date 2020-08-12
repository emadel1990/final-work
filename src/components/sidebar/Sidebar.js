import React from 'react';
import logo from 'https://i.ibb.co/dbm3s4r/logo.png';
// import items from '../sidebar/items';
// import 'materialize-css/dist/css/materialize.min.css';


class Sidebar extends React.Component {

    foo(e) {
        return e.preventDefault();
    }

    render() {
        return (
            <div className="grilla">

                <div className="sidebar" >
                    <img src={logo} alt="logo" className="logo" border="0" />
                    {/* <img src={logo} alt="logo pagina" className="logo" /> */}
                    <ul className="items">
                        <li><a href={'/'} className="waves-effect waves-light btn-small" onClick={this.foo}>
                            <i class="material-icons left">{"shopping_cart"}</i>{"Caja"}</a></li>
                        <li><a href={'/'} className="waves-effect waves-light btn-small" onClick={this.foo}>
                            <i class="material-icons left">{"face"}</i>{"Clientes"}</a></li>
                        <li><a href={'/'} className="waves-effect waves-light btn-small" onClick={this.foo}>
                            <i class="material-icons left">{"local_shipping"}</i>{"Proveedores"}</a></li>
                        <li><a href={'/'} className="waves-effect waves-light btn-small" onClick={this.foo}>
                            <i class="material-icons left">{"build_circle"}</i>{"Reparaciones"}</a></li>
                    </ul>
                </div>
                <div >
                    <nav className="navbar">
                        <a href={"/"} data-target="slide-out"
                            className="sidenav-trigger show-on-large " onClick={this.foo}>
                            <i class="material-icons">{"menu"}</i>
                        </a>
                        <ul className="ul-inicio">
                            <li className="ini">
                                <a href={'/'} className="waves-effect waves-light btn-inicio" onClick={this.foo}>
                                    <i class="material-icons icono-inicio">{"home"}</i>{"Inicio"}</a>
                            </li>
                        </ul>
                    </nav>


                </div >

            </div>
        )
    }
}

export default Sidebar;