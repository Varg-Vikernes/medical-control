import React, { useState } from "react";
import DataExamendMedico from '../../Utils/DataAntecedentesPatologicos.json';
import { CheckboxTableRow, TitleForm } from "../../Reusable/ComponentesReusables";
const AntPatologico = ({data}) =>{
  return (
    <>
  <TitleForm title="Antecedentes Patologicos" />
    {[
      DataExamendMedico.EnfermedadPartOne,
      DataExamendMedico.AntecedentesMasculinosTwo,
      DataExamendMedico.AntecedentesMasculinosTree
    ].map((data, idx) =>(
      <CheckboxTableRow data={data} key={idx} />
    ))}
    </>
  );
}


export default AntPatologico;
