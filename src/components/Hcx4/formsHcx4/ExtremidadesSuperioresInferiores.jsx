import React from "react";
import { RenderInputLabel, TitleForm }from "../../Reusable/ComponentesReusables";
import DataExtremidades from '../../Utils/DataExamenGenitales.json'
const ExtremidadesInfSup = ({data})  => {
    return(
        <>
            <TitleForm title="Extremidades Superiores" />
            {[
                DataExtremidades.ExtremidadesSuperiores
            ].map((data, idx) =>(
                <RenderInputLabel data={data} key={idx} />
            ))}
            <TitleForm title="Extremidades Inferiores" />
            {[
                DataExtremidades.ExtremidadesInferiores
            ].map((data, idx) =>(
                <RenderInputLabel data={data} key={idx} />
            ))}

        </>
    )
}
export default ExtremidadesInfSup