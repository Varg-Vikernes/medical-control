import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const Location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const isActive = (path) => {
        return Location.pathname === path ? "active" : "";
    };

    return (
        <>

            <div className="flex h-screen">
                {sidebarOpen && (
                    <div
                        className="w-64 bg-gradient-to-b from-green-400 to-cyan-500 p-4  sideBarFondo"
                        style={{ minWidth: "16rem" }}
                    >
                        <button
                            className="text-xl text-white cursor-pointer"
                            onClick={closeSidebar}
                        >
                            &times;
                        </button>
                        <ul className="flex flex-col space-y-4 mt-4 p-10">
                            <img src="" />
                            <li className={`nav-item ${isActive("/")}`} onClick={closeSidebar}>
                                <a className="nav-link" href="/" to="/">
                                    Historia clinica
                                </a>
                            </li>
                            <li
                                className={`nav-item ${isActive("/Hcx2")}`}
                                onClick={closeSidebar}
                            >
                                <a className="nav-link" href="/Hcx2" to="/Hcx2">
                                    Examen medico
                                </a>
                            </li>
                            <li
                                className={`nav-item ${isActive("/Hcx3")}`}
                                onClick={closeSidebar}
                            >
                                <a className="nav-link" href="/Hcx3" to="Hcx3">
                                    Padecimiento actual
                                </a>
                            </li>
                            <li
                                className={`nav-item ${isActive("/Hcx4")}`}
                                onClick={closeSidebar}
                            >
                                <a className="nav-link" href="/Hcx4" to="/Hcx4">
                                    Examen medico extremidades
                                </a>
                            </li>
                            <li
                                className={`nav-item ${isActive("/login")}`}
                                onClick={closeSidebar}
                            >
                                <a className="nav-link" href="/login" to="/login">
                                    Iniciar sesion
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
                <div className="flex flex-col flex-1 overflow-hidden w-full">
                    <div className="bg-gradient-to-r from-green-400 to-cyan-500 p-2">
                        <button
                            className="text-xl text-white cursor-pointer w-200"
                            onClick={toggleSidebar}
                        >
                            ☰
                        </button>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;
