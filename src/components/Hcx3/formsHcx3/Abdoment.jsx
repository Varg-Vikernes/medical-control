import React from "react";
import DataAbdomen from '../../Utils/ExploracionFisica.json';
import { RenderInputLabel, TitleForm } from "../../Reusable/ComponentesReusables";

const Abdomen = () => {
    return(
        <>
        <TitleForm title="Abdomen" />
        {[
            DataAbdomen.abdomen
        ].map((data, idx) => (
            <RenderInputLabel data={data} key={idx} />
        ))}
        </>
    )
}
export default Abdomen