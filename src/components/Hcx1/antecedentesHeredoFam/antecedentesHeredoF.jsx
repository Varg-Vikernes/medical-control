import React, { useState } from "react";
import data from '../../Utils/DataHeredoFamiliar.json';

const familiaresData = data.familiaresData;
const enfermedadesData = data.enfermedadesData;

const HeredoFamiliar = () => {
  const [enfermedadesValues, setEnfermedadesValues] = useState({});

  const renderTableHeader = () => (
    <thead>
      <tr>
        <th className="border p-2 w-40 text-center"></th>
        {familiaresData.map((familiar) => (
          <th key={familiar.title} className="border p-2 w-40 text-center">
            {familiar.name}
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderTableData = () => (
    <tbody>
      {enfermedadesData.map((enfermedad) => (
        <tr key={enfermedad.title}>
          <td className="border p-2 w-40 text-center">{enfermedad.name}</td>
          {familiaresData.map((familiar) => (
            <td key={familiar.title} className="border p-2 w-40 text-center">
              <input
                type="checkbox"
                checked={enfermedadesValues[`${enfermedad.title}-${familiar.title}`] || false}
                onChange={(e) => handleInputChange(`${enfermedad.title}-${familiar.title}`, e.target.checked)}
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  const handleInputChange = (key, value) => {
    setEnfermedadesValues({ ...enfermedadesValues, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías enviar los datos al servidor o manejarlos según tus necesidades
    console.log("Datos enviados:", enfermedadesValues);
  };

  const [mostrarOcultar, setMostrarOcultar] = useState(false);

  const toggleMO = () => {
    setMostrarOcultar(!mostrarOcultar);
  };

  return (
    <>
      <button onClick={toggleMO} className="cta">
        <span><b>{mostrarOcultar ? "Introduzca los datos" : "Antecedentes Heredo Familiares"}</b></span>
      </button>
      {mostrarOcultar && (
        <>
          <form onSubmit={handleSubmit} className="Form-Antecedentes w-full p-4">
            <div className="border rounded-lg p-8 shadow-md ">
              <div className="seven">
                <h1>Antecedentes Heredo Familiares</h1>
              </div>
              <table className="table-auto border">
                {renderTableHeader()}
                {renderTableData()}
              </table>
              <button className="button" type="submit">Enviar Datos</button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default HeredoFamiliar;
