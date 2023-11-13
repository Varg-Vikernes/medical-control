import React from "react";
import Primario from "./DatosPrimarios/primario";
import Identificacion from "./FichaIdentificacion/identificacion";
import AntecedentesLaborales from "./AntecentesLaboral/antecedentesLabotales";
import PersonalPatologico from "./PersonalPatologico/antecedentePersonal";
import HeredoFamiliar from "./antecedentesHeredoFam/antecedentesHeredoF";
import Navbar from "../Navbar/Navbar";

const Hcx1 = () => {
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
                    {/* Aquí van los formularios */}
                    <Primario />
                    <Identificacion />
                    <AntecedentesLaborales />
                    <PersonalPatologico />
                    <HeredoFamiliar />
                </div>
            </div>
        </>
    );
};

export default Hcx1;
