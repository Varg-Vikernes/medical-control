import React from "react";
import { RenderInputLabel, TitleForm } from "../../Reusable/ComponentesReusables";
import DataAntecedenteLaboral from '../../Utils/DataHeredoFamiliar.json';

const AntecedenteLaboral = () =>{
    return(
        <>
        <TitleForm title="Antecedentes laborales" />
        {[
            DataAntecedenteLaboral.WorkHistory
        ].map((data, idx) => (
            <RenderInputLabel data={data} key={idx} />
        ))}
        </>
    )
}
export default AntecedenteLaboral;