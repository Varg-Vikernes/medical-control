import React from "react";
import { RenderInputLabel, TitleForm } from "../../Reusable/ComponentesReusables";
import DataInterrogatorio from '../../Utils/DataAntecedentesPatologicos.json'

const Interrogatorio = ({data}) =>{
    return(
        <>
        <TitleForm title="Interrogatorio por aparatos y sistemas" />
        {[
            DataInterrogatorio.Interrogatorio
        ].map((data, idx) =>(
            <RenderInputLabel data={data} key={idx} />
        ))}
        </>
    )
}
export default Interrogatorio;