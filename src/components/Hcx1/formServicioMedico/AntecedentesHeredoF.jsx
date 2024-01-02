import React from "react";
import data from '../../Utils/DataHeredoFamiliar.json';

const familiaresData = data.FamilyData;
const enfermedadesData = data.DiseasesData;

const renderTableHeader = () => (
  <thead>
    <tr>
      <th className="border p-2 w-40 text-center">----------</th>
      {familiaresData.map((familiar, idx) => (
        <th key={idx} className="border p-2 w-40 text-center" >
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
        {familiaresData.map((familiar, idx) => (
          <td key={familiar.title} className="border p-2 w-40 text-center">
            <input
              type="checkbox"
              key={idx}
            />
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);


const HeredoFamiliar = () => {


  return (
    <>
          <form  className="Form-Antecedentes w-full p-4">
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
  );
};

export default HeredoFamiliar;
