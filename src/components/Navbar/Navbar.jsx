import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="bg-light">
                <div className="container mx-auto p-4">
                    <div className="flex items-center justify-between">
                        <span className="font-italic text-2xl">Alfaparf Milano</span>
                        <div className="flex">
                            <ul className="flex space-x-4">
                                <li className="nav-item">
                                    <a className="nav-link" href="/Hcx1">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Hcx2">
                                        Formulario1
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Hcx3">
                                        Formulario2
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Hcx4">
                                        Formulario3
                                    </a>
                                </li>

                            </ul>
                            <form className="form-inline ml-4">
                                <input
                                    className="form-control mr-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
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
        </>
    );
}

export default Navbar;