import React from "react";
import { RenderInputLabel, TitleForm } from "../../Reusable/ComponentesReusables";
import DataCuello from '../../Utils/ExploracionFisica.json';

const Cuello = ({data}) => {
    return(
        <>
            <TitleForm title="Cuello" />
            {[
                DataCuello.Cuello
            ].map((data, idx) => (
                <RenderInputLabel data={data} key={idx} />
            ))}
        </>
    )
}
export default Cuello;