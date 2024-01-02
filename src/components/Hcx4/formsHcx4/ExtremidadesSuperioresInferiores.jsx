import React from "react";
import { RenderInputLabel, TitleForm }from "../../Reusable/ComponentesReusables";
import DataExtremidades from '../../Utils/DataExamenGenitales.json'
const ExtremidadesInfSup = ({data})  => {
    return(
        <>
            <TitleForm title="Extremidades Superiores" />
            {[
                DataExtremidades.LowerExtremities
            ].map((data, idx) =>(
                <RenderInputLabel data={data} key={idx} />
            ))}
            <TitleForm title="Extremidades Inferiores" />
            {[
                DataExtremidades.UpperExtremities
            ].map((data, idx) =>(
                <RenderInputLabel data={data} key={idx} />
            ))}

        </>
    )
}
export default ExtremidadesInfSup