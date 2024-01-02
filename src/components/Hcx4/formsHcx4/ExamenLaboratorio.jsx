import DataLaboratorio from '../../Utils/DataExamenGenitales.json'
import React from 'react'
import { TitleForm,RenderInputLabel } from "../../Reusable/ComponentesReusables";

const ExamenLaboratorio = () => {
    return (
        <>
            <TitleForm title ="Examenes de Laboratorio y Diagnosticos" />
            {[
                DataLaboratorio.LaboratoryTests
            ].map((data,idx) =>(
            <RenderInputLabel  data={data} key={idx} />
            ))}
            <TitleForm title="Diagnosticos y Tratamientos" />
            {[
                DataLaboratorio.DIAGNOSES
            ].map((data,idx) =>(
                <RenderInputLabel data={data} key={idx} />
            ))}
        </>
    )
}
export default ExamenLaboratorio