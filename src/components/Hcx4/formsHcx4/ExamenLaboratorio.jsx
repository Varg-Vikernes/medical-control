import DataLaboratorio from '../../Utils/DataExamenGenitales.json'
import React from 'react'
import { TitleForm,RenderInputLabel } from "../../Reusable/ComponentesReusables";

const ExamenLaboratorio = ({data }) => {
    return (
        <>
            <TitleForm title ="Examenes de Laboratorio y Diagnosticos" />
            {[
                DataLaboratorio.ExameDeLaboratorio,
            ].map((data,idx) =>(
            <RenderInputLabel  data={data} key={idx} />
            ))}
            <TitleForm title="Diagnosticos y Tratamientos" />
            {[
                DataLaboratorio.DIAGNOSTICOS,
            ].map((data,idx) =>(
                <RenderInputLabel data={data} key={idx} />
            ))}
        </>
    )
}
export default ExamenLaboratorio