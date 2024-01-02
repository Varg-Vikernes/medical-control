import React from "react";
import DataAntecedentesPersonales  from '../../Utils/DataHeredoFamiliar.json'
import { RenderInputLabel, TitleForm } from "../../Reusable/ComponentesReusables";

const AntecedentePersonal = () => {
    return(
        <>
        <TitleForm title="Antecedentes personal no patologico" />
        {[
            DataAntecedentesPersonales.PathologicalPersonalHistory
        ].map((data, idx) =>(
            <RenderInputLabel data={data} key={idx} />
        ))}
        </>
    )
}
export default AntecedentePersonal;