import React from "react";
import DataTorax from '../../Utils/ExploracionFisica.json';
import { RenderInputLabel,TitleForm } from "../../Reusable/ComponentesReusables";

const Torax = ({data}) =>{
    return(
        <>
        <TitleForm title ="Torax" />
        {[
            DataTorax.Torax
        ].map((data, idx) =>(
            <RenderInputLabel data={data} key={idx} />
        ))}
        </>
    )
}
export default Torax