import React, { useState } from "react";
import dataExamendMedico from '../../Utils/DataAntecedentesPatologicos.json';


//Manejo de las tablas de tipo checkbox
const CheckboxTableRow = ({ data }) => (
  <table className="table-auto  mx-auto my-4">
  <tbody>
    {data.map((item, idx) => (
      <tr key={idx}>
        {/* Renderiza la celda con el nombre del item */}
        <td className="border p-2 w-40 text-center">{item.name}</td>
        {/* Manejo de los checkbox */}
        <td className="border p-2 w-40 text-center">
          <input type="checkbox" />
        </td>
      </tr>
    ))}
  </tbody>
  </table>
);
// Manejo de los label y los inputs de tipo texto
const InputLabel = ({txt}) => (
    <div>
        {txt.map((item, idx) => (
            <div key={idx}>
                  {/* Mapea el array de interrogacion añadiendo los textos y agrando un label */}
                <label htmlFor=""className="block font-bold" key={idx} >{item.name}</label>
                {/* Manejo de los inputs de tipo text*/}
                <input type="text" className="w-full border p-2 w-full" />
            </div>
        ))}
    </div>
);


const AntPatologico = () => {
  const [mostrarOcultar, setMostrarOcultar] = useState (false);

  const View = () => {
    setMostrarOcultar(!mostrarOcultar)
  }
  return (
    <>
  <button className="cta" onClick={View}>
    <span><b>{mostrarOcultar ? "Introduce los datos correctamente" : "Formulario antecedentes"}</b></span>
  </button>
  {
    mostrarOcultar && (
      <>
        <div className="seven">
        <h1>Formulario Antecedentes</h1>
      </div>
      {/* Accedemos ala data segun sean las propiedades que queramos */}
      {[
        dataExamendMedico.EnfermedadPartOne,
        dataExamendMedico.EnfermedadPartTwo,
        dataExamendMedico.EnfermedadPartTree,
      ].map((data, idx) => (
              <CheckboxTableRow data={data} key={idx} />
      ))}
      </>
    )
  }
   
   <button className="cta" onClick={View}>
    <span><b>{mostrarOcultar ? "Ingresa los datos correctos" : "Antecedente Personal Patologico"}</b></span>
   </button>
   {
    mostrarOcultar && (
      <>
       {/* Formulario GinecoObstetrico */}
       <div className="seven">
        <h1>Antecedente personal patologico</h1>
      </div>
      {[
        dataExamendMedico.GinecoObstreticoOne,
        dataExamendMedico.GinecoObstreticoTwo,
        dataExamendMedico.GinecoObstreticoTree,
      ].map((data, idx) => (
              <CheckboxTableRow data={data} key={idx} />
      ))}
      </>
    )
   }
    
<button className="cta" onClick={View}>
  <span><b>{mostrarOcultar ? "Introduce correctamente los datos" : "Antecedentes Masculinos"}</b></span>
</button>
     {
      mostrarOcultar && (
        <>
     {/*   Formulario Antecedentes Masculino */}
     <div className="seven">
        <h1>Antecedentes Masculinos</h1>
      </div>
      {[
        dataExamendMedico.AntecedentesMasculinosOne,
        dataExamendMedico.AntecedentesMasculinosTwo,
        dataExamendMedico.AntecedentesMasculinosTree,
      ].map((data, idx) => (
              <CheckboxTableRow data={data} key={idx}/>
      ))}

        </>
      )
     }

     <button className="cta" onClick={View}>
      <span><b>{mostrarOcultar ?"Ingrese correctamente los datos" : "Interrogatorio por aparatos y sistemas"}</b></span>
     </button>
     {
      mostrarOcultar && (
        <>

{/* Formulario para interrogatorio por aparatos y sistenas  */}
<div className="seven">
  <h1>Interrogatorio por aparatos y sistemas</h1>
</div>
{[
  dataExamendMedico.Interrogatorio
].map((txt, idx)=> (
 <InputLabel txt={txt}  key={idx}/>
))}
        </>
      )
     }
    </>
  );
};

export default AntPatologico;
