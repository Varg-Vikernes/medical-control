import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <div className="bg-gradient-to-r from-green-400 to-cyan-500 p-2 fixed w-full top-0 z-50 mb-20">
            <ul className="flex space-x-10 p-2">
                <img
                    src="https://th.bing.com/th/id/R.0bb24fc69f3eadf890bc973595958d98?rik=4n7nydXfJTfMxw&pid=ImgRaw&r=0"
                    alt=""
                    className="w-60 h-14 object-cover font-sans "
                />
                <li className={`nav-item ${isActive("/")}`}>
                    <Link className="nav-link" to="/">
                        Historia clinica
                    </Link>
                </li>
                <li className={`nav-item ${isActive("/Hcx2")}`}>
                    <Link className="nav-link" to="/Hcx2">
                        Examen medico
                    </Link>
                </li>
                <li className={`nav-item ${isActive("/Hcx3")}`}>
                    <Link className="nav-link" to="/Hcx3">
                        Padecimiento actual
                    </Link>
                </li>
                <li className={`nav-item ${isActive("/Hcx4")}`}>
                    <Link className="nav-link" to="/Hcx4">
                        Examen medico extremidades
                    </Link>
                </li>
                <li className={`nav-item ml-auto ${isActive("/login")}`}>
                    <Link className="nav-link x-10" to="/login">
                        Iniciar sesion
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
