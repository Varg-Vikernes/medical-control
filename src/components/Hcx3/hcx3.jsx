import React from "react";
import Navbar from "../Navbar/Navbar";
import ExploracionF from "./ExploracionFisica/ExploracionFisica.component";


import '../style/Hcx1.style.css'
import alfa from "../../img/logoDobos.png";

const Hcx3 = () => {
    return (
        <>
                <Navbar />
          <div className="flex formulario_hcx1">
                <div className="flex-1 flex flex-col ">
                    <div className="container mx-auto p-10">
                        <div className="flex flex-wrap items-center p-5 ">
                            {/* Imagen de la empresa */}
                            <div className="w-full md:w-1/2">
                                <img
                                src={alfa}
                                    alt=""
                                    className="w-30 h-20 object-cover font-sans "
                                />
                            </div>
                            {/* Texto que identifica el tipo de formulario*/}
                            <div className="w-full md:w-1/2 p-11 text-center">
                                <h1 className="text-4x2 font-bold">
                                    Historia Clinica --- Servicio Medico
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Demas partes del formulario */}
                    <div className="container-form bg-white">
                    <ExploracionF />
                  
                    <button className="button" >Enviar Datos por consola</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hcx3;