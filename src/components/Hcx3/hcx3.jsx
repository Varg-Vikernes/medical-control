import React from "react";
import Navbar from "../Navbar/Navbar";
import ExploracionF from "./exploracionFisica/exploracionFisica.component";
import Cara from "./craneo-Cara/craneo.component";
import Cuello from "./cuello-torax-abdomen/cuello.component";
import Torax from "./cuello-torax-abdomen/torax.component";
import Abdomen from "./cuello-torax-abdomen/abdoment.component";
import '../style/hcx3.component.css'

const Hcx3 = () => {
    return (
        <>
            <div className="flex formulario_hcx3">
                <div className="w-auto ">
                    <Navbar className="w-auto" />
                </div>
                <div className="flex-1 flex flex-col ">
                    <div className="container mx-auto ">
                        <div className="flex flex-wrap items-center p-20 ">
                            {/* Imagen de la empresa */}
                            <div className="w-full md:w-1/2">
                                <img
                                    src="https://th.bing.com/th/id/R.0bb24fc69f3eadf890bc973595958d98?rik=4n7nydXfJTfMxw&pid=ImgRaw&r=0"
                                    alt=""
                                    className="w-60 h-24 object-cover font-sans "
                                />
                            </div>
                            {/* Texto que identifica el tipo de formulario*/}
                            <div className="w-full md:w-1/2 p-12 text-center">
                                <h1 className="text-4x2 font-bold">
                                    Historia Clinica --- Servicio Medico
                                </h1>
                            </div>
                        </div>
                    </div>
                    {/* Demas partes del formulario */}
                    <div className="container-form bg-white">
                    <ExploracionF />
                    <Cara />
                    <Cuello />
                    <Torax />
                    <Abdomen />
                    <button className="button" >Enviar Datos por consola</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hcx3;