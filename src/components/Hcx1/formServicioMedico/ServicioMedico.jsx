import React from "react";
import { RenderInputLabel, TitleForm } from "../../Reusable/ComponentesReusables";
import DataServicioMedico from '../../Utils/DataHeredoFamiliar.json'

const ServicioMedico =() => {
    return(
        <>
        <TitleForm title="Servicio Medico" />
        {[
            DataServicioMedico.MedicalService
        ].map((data, idx) => (
            <RenderInputLabel data={data} key={idx} />
        ))}
        </>
    )
}
export default ServicioMedico