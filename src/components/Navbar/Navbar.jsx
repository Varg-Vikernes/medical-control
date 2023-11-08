import React from "react";
import { useLocation } from "react-router-dom";
const Navbar = () => {

    const Location = useLocation();
    //Funcion para verificar si una ruta esta activa
    const isActive = (path) => {
        return Location.pathname === path ? "active" : "";
    };

    return (
        <>
            <div className="fixed w-full">
                <nav className="navbar" style={{
                    background: 'rgb(38,255,140)',
                    backgroundImage: 'linear-gradient(90deg, rgba(38,255,140,1) 0%, rgba(85,207,191,1) 100%, rgba(255,255,255,0.9332107843137255) 100%)'
                }}>
                    <div className="container mx-auto p-2">
                        <div className="flex items-center justify-between">
                            <span className="font-italic text-2xl">Alfaparf Milano</span>

                            <div className="flex ">
                                <ul className="flex space-x-4">
                                    <li className={`nav-item ${isActive("/")}`}>
                                        <a className="nav-link" href="/" to="/">
                                            Historia clinica
                                        </a>
                                    </li>
                                    <li className={`nav-item ${isActive("/Hcx2")}`}>
                                        <a className="nav-link" href="/Hcx2" to="/Hcx2">
                                            Examen medico
                                        </a>
                                    </li>
                                    <li className={`nav-item ${isActive("/Hcx3")}`}>
                                        <a className="nav-link" href="/Hcx3" to="Hcx3">
                                            Padecimiento actual
                                        </a>
                                    </li>
                                    <li className={`nav-item ${isActive("/Hcx4")}`}>
                                        <a className="nav-link" href="/Hcx4" to="/Hcx4">
                                            Examen medico extremidades
                                        </a>
                                    </li>
                                    <li className={`nav-item ${isActive("/Hcx4")}`}>
                                        <a className="nav-link" href="/login" to="/login">
                                            Iniciar sesion
                                        </a>
                                    </li>

                                </ul>
                                <form className="form-inline ml-4">
                                    <button
                                        className="btn btn-outline-success my-2 my-sm-0"
                                        type="submit"
                                    >
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;