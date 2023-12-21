import React from "react";
import DataGenitales from '../../Utils/DataExamenGenitales.json';

const RenderInputLabel = ({data}) =>{
    return(
        <div>
            {data.map((item, idx) => (
                <div key={idx}>
                <label htmlFor="">{item.name}</label>
                <input type="text" />
                </div>
            ))}
        </div>
    )
}

const TitleForm = (props) => {
    return(
        <div className="seven">
        <h1>{props.title}</h1>
    </div>
    )
}

const Genitales = () => {
    
   return(
   <>
        <TitleForm  title="Genitales"/>
        {[
            DataGenitales.genitales
        ].map((data, idx) => (
            <RenderInputLabel data={data} key={idx} />
        ))}
        <TitleForm title= "Extremidades Superiores" />
        {[
            DataGenitales.ExtremidadesSuperiores
        ].map((data, idx) =>(
            <RenderInputLabel data={data} key={idx} />
        ))}
        <TitleForm title="Extremidades Inferiores"/>
        {[
            DataGenitales.ExtremidadesInferiores
        ].map((data , idx) => (
            <RenderInputLabel data={data} key={idx} />
        ))}
        <TitleForm title="Exploracion psiconeurologica" />
        {[
            DataGenitales.ExploracionPsiconeurologica
        ].map((data, idx) => (
            <RenderInputLabel data={data} key={idx} />
        ))}
        <TitleForm title="Examenes de Laboratorio" />
        {[
            DataGenitales.ExameDeLaboratorio
        ].map((data, idx) => (
            <RenderInputLabel data={data} key={idx} />
        ))}
        <TitleForm title="Diagnostico" />
        {[
            DataGenitales.DIAGNOSTICOS
        ].map((data, idx) => (
            <RenderInputLabel data={data} key={idx} />
        ))}
        </>
    )
}
export default Genitales;