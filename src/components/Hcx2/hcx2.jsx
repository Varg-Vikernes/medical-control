import React from "react";
import Navbar from "../Navbar/Navbar";
import '../style/Hcx1.style.css'
import LogoAlfapard from "../Navbar/logoAlfaparf";
import Interrogatorio from "./antececentesPatologicos/Interrogatorio";
import AntecedentesMasculinos from "./antececentesPatologicos/AantecedentesMasculinos";
import GinecoObstetrico from "./antececentesPatologicos/GinecoObstetrico";
import AntPatologico from "./antececentesPatologicos/Patologicos.component";

const Hcx2 = () => {
    return (
        <>
                <Navbar />
           <div className="flex formulario_hcx1">
                <div className="flex-1 flex flex-col ">
                  <LogoAlfapard />
                    <div className="container-form bg-white">
                    {/* Formularios */}
                    <AntPatologico />
                    <GinecoObstetrico />
                    <AntecedentesMasculinos />
                    <Interrogatorio />
                 <button className="button">Enviar datos por consola</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Hcx2;