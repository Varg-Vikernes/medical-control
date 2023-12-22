import React from "react";
import { CheckboxTableRow, TitleForm } from "../../Reusable/ComponentesReusables";
import DataGinecoObstetrico from '../../Utils/DataAntecedentesPatologicos.json';

const GinecoObstetrico = ({data}) => {
    return(
        <>
        <TitleForm title="Gineco Obstetrico" />
        {[
            DataGinecoObstetrico.GinecoObstreticoOne,
            DataGinecoObstetrico.GinecoObstreticoTwo,
            DataGinecoObstetrico.GinecoObstreticoTree
        ].map((data, idx) => (
            <CheckboxTableRow data={data} key={idx} />
        ))}
        </>
    )
}
export default GinecoObstetrico