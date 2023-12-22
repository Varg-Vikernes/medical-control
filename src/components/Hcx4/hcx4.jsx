import React from "react";
import Navbar from "../Navbar/Navbar";
import LogoAlfapard from "../Navbar/logoAlfaparf";
import ExamenLaboratorio from "./formsHcx4/ExamenLaboratorio";
import ExploracionPsiconeurologica from "./formsHcx4/ExploracionPsiconeurologica";
import ExtremidadesInfSup from "./formsHcx4/ExtremidadesSuperioresInferiores";
import Genitales from "./formsHcx4/Genitales.component";
import '../style/Hcx1.style.css'

const Hcx4 = () => {
    return (
        <>
                <Navbar />
            <div className="flex formulario_hcx1">
                <div className="flex-1 flex flex-col ">
                  <LogoAlfapard />
                    {/* ------------Formularios------------- */}
                 
                    <div className="container-form bg-white">
                        <Genitales />
                        <ExtremidadesInfSup />
                        <ExploracionPsiconeurologica />
                    <ExamenLaboratorio />
                    {/*------------------------------------- */}
                    <button className="button">Enviar datos por consola</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hcx4;