import React from "react";
import DataExploracionFisica from '../../Utils/ExploracionFisica.json';
import { RenderInputLabel, TitleForm } from "../../Reusable/ComponentesReusables";
const ExploracionF = () => {    
    return(
     <>
    <TitleForm title="Exploracion Fisica" />
    {[
DataExploracionFisica.Physical
    ].map((data, idx) =>(
        <RenderInputLabel data={data} key={idx} />
    ))}
        </> 
    );
}

export default ExploracionF 