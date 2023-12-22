import React from "react";
import LogoAlfaparf from "../Navbar/logoAlfaparf";
import Navbar from "../Navbar/Navbar";
import '../style/Hcx1.style.css'
import AntecedentePersonal from "./formServicioMedico/AntecedentePersonal";
import AntecedenteLaboral from "./formServicioMedico/AntecedenteLaboral";
import FichaIdenticion from "./formServicioMedico/FichaIdentificacion";
import ServicioMedico from "./formServicioMedico/ServicioMedico";
import HeredoFamiliar from "./formServicioMedico/AntecedentesHeredoF";
const Hcx1 = () => {

    return (
        <>

            <Navbar />
                <div className="flex formulario_hcx1">
                <div className="flex-1 flex flex-col ">
                   <LogoAlfaparf / >
                        {/* Aquí van los formularios */}
                        <div className="container-form bg-white">
                            {/* Logica del boton mostrar ocultar */}
                            <ServicioMedico />
                            <FichaIdenticion />
                            <AntecedenteLaboral />
                            <AntecedentePersonal />
                            <HeredoFamiliar />
                        <button className="button">Enviar datos por consola</button>
                        </div>
                    </div>
            </div>

        </>
    );
};

export default Hcx1;
