import React from "react";
import DataCraneoCara from '../../Utils/ExploracionFisica.json'
import { RenderInputLabel, TitleForm } from "../../Reusable/ComponentesReusables";

const CraneoCara = ({data}) => {
    return(
        <>
        <TitleForm title="Craneo Cara" />
        {[
            DataCraneoCara.CraneoCara
        ].map((data,idx) =>(
            <RenderInputLabel data={data} key={idx} />
        ))}

</>
    )   
}

export default CraneoCara