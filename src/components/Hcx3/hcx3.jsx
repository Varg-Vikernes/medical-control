import React from "react";
import Navbar from "../Navbar/Navbar";
import ExploracionF from "./exploracionFisica/exploracionFisica.component";
import Cara from "./craneo-Cara/craneo.component";
import Cuello from "./cuello-torax-abdomen/cuello.component";
import Torax from "./cuello-torax-abdomen/torax.component";
import Abdomen from "./cuello-torax-abdomen/abdoment.component";
import '../style/hcx1.component.css'
import alfaparf from '../img/logoDobos.png'
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
                                    src={alfaparf}
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