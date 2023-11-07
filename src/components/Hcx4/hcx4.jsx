import React from "react";
import Navbar from "../Navbar/Navbar";
import Genitales from "./genitales/genitales.component";
import ExtremidadesSuperiores from "./extremidades/superiores.component";
import ExtremidadesInferiores from "./extremidades/inferiores.component";
import ExploracionPsiconeurologica from "./exploracionPsico/exploracionPsico.component";
import { Laboratorio } from "./exmLaboratorio/examenLaboratorio.component";
import { Diagnostico } from "./Diagnostico/diagnostico.component";


const Hcx4 = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap items-center">
                    {/* Imagen de la empresa */}
                    <div className="w-full md:w-1/2">
                        <img src="https://th.bing.com/th/id/R.0bb24fc69f3eadf890bc973595958d98?rik=4n7nydXfJTfMxw&pid=ImgRaw&r=0"
                            alt=""
                            className="w-60 h-24 object-cover font-sans "
                        />
                    </div>
                    {/* Texto que identifica el tipo de formulario*/}
                    <div className="w-full md:w-1/2 p-4 text-center">
                        <h1 className="text-4x2 font-bold">Historia Clinica ---  Servicio Medico</h1>

                    </div>
                </div>
            </div>
            {/* Formularios */}
            <Genitales />
            <ExtremidadesSuperiores />
            <ExtremidadesInferiores />
            <ExploracionPsiconeurologica />
            <Laboratorio />
            <Diagnostico />
        </>
    )
}

export default Hcx4;