import React from "react";
import Primario from "./DatosPrimarios/primario";
import Navbar from "../Navbar/Navbar";
import Identificacion from "./FichaIdentificacion/identificacion";
import AntecedentesLaborales from "./AntecentesLaboral/antecedentesLabotales";
import PersonalPatologico from "./PersonalPatologico/antecedentePersonal";
import HeredoFamiliar from "./antecedentesHeredoFam/antecedentesHeredoF";

const Hcx1 = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="flex flex-wrap items-center p-10">
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
            {/* Aqui ya van los formularios */}
            <Primario />
            <Identificacion />
            <AntecedentesLaborales />
            <PersonalPatologico />
            <HeredoFamiliar />
        </>
    )
}
export default Hcx1;