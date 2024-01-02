import DataExploracion from '../../Utils/DataExamenGenitales.json';
import React from 'react';
import { RenderInputLabel, TitleForm } from "../../Reusable/ComponentesReusables";

const ExploracionPsiconeurologica = ({data}) => {
    return(
        <>
        <TitleForm title ="Exploracion Neurologica" />
        {[
            DataExploracion.PsychoneurologicalExamination
        ].map((data, idx) =>(
            <RenderInputLabel data={data} key={idx} />
        ))}
        </>
    )
}
export default ExploracionPsiconeurologica