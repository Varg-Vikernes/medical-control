import React from "react";
import { RenderInputLabel, TitleForm } from "../../Reusable/ComponentesReusables";
import DataFichaIdentificacion from '../../Utils/DataHeredoFamiliar.json';

const FichaIdenticion = () =>{
    return(
        <>
        <TitleForm title="Ficha de Identificacion" />
        {[
            DataFichaIdentificacion.FichaDeIdentificacion
        ].map((data, idx) => (
            <RenderInputLabel data={data} key={idx} />
        ))}
        </>
    )
}
export default FichaIdenticion;