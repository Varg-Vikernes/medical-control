import React from "react";
import Navbar from "../Navbar/Navbar";
import LogoAlfapard from "../Navbar/logoAlfaparf";
import Abdomen from "./formsHcx3/Abdoment";
import Torax from "./formsHcx3/Torax";
import Cuello from "./formsHcx3/Cuello";
import CraneoCara from "./formsHcx3/CraneoCara";
import ExploracionF from "./formsHcx3/ExploracionFisica.component";
import '../style/Hcx1.style.css'

const Hcx3 = () => {
    return (
        <>
                <Navbar />
          <div className="flex formulario_hcx1">
                <div className="flex-1 flex flex-col ">
            <LogoAlfapard />
                    {/* Demas partes del formulario */}
                    <div className="container-form bg-white">
                        <ExploracionF />
                        <CraneoCara />
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