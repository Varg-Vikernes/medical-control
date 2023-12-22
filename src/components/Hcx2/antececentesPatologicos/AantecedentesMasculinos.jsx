import React from "react";
import { CheckboxTableRow, TitleForm } from "../../Reusable/ComponentesReusables";
import DataAntecedentesMascu from '../../Utils/DataAntecedentesPatologicos.json'

const AntecedentesMasculinos = ({data}) =>{
    return(
        <>
        <TitleForm title="Antecedentes Masculinos" />
        {[
            DataAntecedentesMascu.AntecedentesMasculinosOne,
            DataAntecedentesMascu.AntecedentesMasculinosTwo,
            DataAntecedentesMascu.AntecedentesMasculinosTree
        ].map((data, idx) => (
            <CheckboxTableRow data={data} key={idx} />
        ))}
        </>
    )
}
export default AntecedentesMasculinos