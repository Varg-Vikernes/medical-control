import React from "react";
import { Link, useLocation } from "react-router-dom";
import dobos from '../img/dobos.png'
import '../style/nabvar.component.css'

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <div className="font p-2 fixed w-full top-0 z-50 mb-20">
            <ul className="flex space-x-9 p-1">
                <img
                    src={dobos}
                    alt=""
                    className="w-70 h-10 object-cover font-sans "
                />
                <li className={`nav-item p-1 ${isActive("/")}`}>
                    <Link className="nav-link" to="/">
                        Historia clinica
                    </Link>
                </li>
                <li className={`nav-item p-1 ${isActive("/Hcx2")}`}>
                    <Link className="nav-link" to="/Hcx2">
                        Examen medico
                    </Link>
                </li>
                <li className={`nav-item p-1 ${isActive("/Hcx3")}`}>
                    <Link className="nav-link" to="/Hcx3">
                        Padecimiento actual
                    </Link>
                </li>
                <li className={`nav-item p-1 ${isActive("/Hcx4")}`}>
                    <Link className="nav-link" to="/Hcx4">
                        Examen medico extremidades
                    </Link>
                </li>
                <li className={`nav-item ml-auto p-1 space-x-10 ${isActive("/login")}`}>
                    <Link className="nav-link x-10" to="/login">
                        Iniciar sesion
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
