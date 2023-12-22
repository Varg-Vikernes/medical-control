import React from "react";

//Manejo de las tablas de tipo checkbox
export const CheckboxTableRow = ({ data }) => (
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

  export const RenderInputLabel = ({data}) =>{
    return(
        <div>
            {data.map((item, idx) => (
                <div key={idx}>
                <label htmlFor=""  >{item.name}</label>
                <input type="text"   />
                </div>
            ))}
        </div>
    )
}

export const TitleForm = (props) => {
    return(
        <div className="seven">
        <h1>{props.title}</h1>
    </div>
    )
}
