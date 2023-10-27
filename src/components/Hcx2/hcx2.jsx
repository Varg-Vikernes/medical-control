import React from "react";
import Navbar from "../Navbar/Navbar";
import AntPatologico from "./antececentesPatologicos/patologicos.component";
import Obstretico from "./genico-Obstretico/obstretico.component";
import AntececenteMasculino from "./AntecedentesMasculinos/antecMasculinos.component";
import AntecedentesPorAparatos from "./InterrogatorioPorAparatos/interrogatorio.component";

const Hcx2 = () => {
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
                        <h1 className="text-4x2 font-bold">Historia Clinica ----  Servicio Medico</h1>

                    </div>
                </div>
            </div>
            {/* Formularios */}
            <AntPatologico />
            <Obstretico />
            <AntececenteMasculino />
            <AntecedentesPorAparatos />
        </>
    )
}
export default Hcx2;