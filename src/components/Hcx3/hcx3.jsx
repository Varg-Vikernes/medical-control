import React from "react";
import Navbar from "../Navbar/Navbar";
import ExploracionF from "./exploracionFisica/exploracionFisica.component";
import Cara from "./craneo-Cara/craneo.component";
import Cuello from "./cuello-torax-abdomen/cuello.component";
import Torax from "./cuello-torax-abdomen/torax.component";
import Abdomen from "./cuello-torax-abdomen/abdoment.component";

const Hcx3 = () => {
    return (
        <>
            <div className="flex">
                <div className="w-auto ">
                    <Navbar className="w-auto" />
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="container mx-auto p-7">
                        <div className="flex flex-wrap items-center p-10">
                            {/* Imagen de la empresa */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src="https://th.bing.com/th/id/R.0bb24fc69f3eadf890bc973595958d98?rik=4n7nydXfJTfMxw&pid=ImgRaw&r=0"
                                    alt=""
                                    className="w-60 h-24 object-cover font-sans "
                                />
                            </div>
                            {/* Texto que identifica el tipo de formulario*/}
                            <div className="w-full md:w-1/2 p-4 text-center">
                                <h1 className="text-4x2 font-bold">
                                    Historia Clinica --- Servicio Medico
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/* Demas partes del formulario */}
                    <ExploracionF />
                    <Cara />
                    <Cuello />
                    <Torax />
                    <Abdomen />
                </div>
            </div>
        </>
    )
}
export default Hcx3;