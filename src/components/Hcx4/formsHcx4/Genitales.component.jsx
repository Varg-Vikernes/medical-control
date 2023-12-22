import React from "react";
import DataGenitales from '../../Utils/DataExamenGenitales.json';
import { TitleForm, RenderInputLabel } from "../../Reusable/ComponentesReusables";

const Genitales = () => {
    
   return(
   <>
        {/* Formulario Genitales */}
        <TitleForm  title="Genitales"/>
        {[
            DataGenitales.genitales
        ].map((data, idx) => (
            <RenderInputLabel data={data} key={idx} />
        ))}
        </>
    )
}
export default Genitales;