import React, {useState} from "react";
//Manejo de las tablas de tipo checkbox
export const CheckboxTableRow = ({ data }) => {
 
  return( 
              <div className="border rounded-lg p-8 shadow-md ">
    <table className="table-auto w-full p-4">
    <tbody>
      {data.map((item, idx) => (
        <tr key={idx}>
          {/* Renderiza la celda con el nombre del item */}
          <td className="border p-2 w-40 text-center">{item.name}</td>
          {/* Manejo de los checkbox */}
          <td className="border p-2 w-50 text-center">
            <input type="checkbox"
            className="border"
            />
          </td>
        </tr>
      ))}
    </tbody>
    </table>
    </div>
)
}

  export const RenderInputLabel = ({ data }) => {
    
    // function for divide of chunks on limit the three
    const chunkArray = (arr, size) => {
      return arr.reduce((chunks, el, i) => (i % size ? chunks[chunks.length - 1].push(el) : chunks.push([el])) && chunks, []);
    };  
    // --> divide the inputs in a limit of three
    const groupedData = chunkArray(data, 3);
    
    // --> we manage the status of the information
  const [formData, setFormData] = useState({})

    //  --> We change the information implicitly 
   
   const handleInputChange = (name, value ) =>{
     setFormData({...formData, [name]: value})
    }

    // --> We send the information by console
   /** Function to send data to the back but not yet operational
  
   const handleSubmit = async () =>{
     try {
       const response = await fetch('http://localhost:3000/api/auth/clinic/', {
         method: 'POST', 
         headers:{
           'Content-type': "application.json",
          },
          body: JSON.stringify(formData)
        });
        
        if(response.ok){
          console.log("Data save", formData)
        }else{
          console.error('Error not saved data')
        }
        
      } catch (error) {
        console.error("Error en la solicitud", error)
      }
    }
    */
    
  const handleSubmit = () => {
    console.log("Save data" , formData)
  }

    return (
      <div className="w-full p-4">
        <div className="border rounded-lg p-8 shadow-md ">
        {groupedData.map((row, rowIndex) => (
          <div key={rowIndex} className="flex mb-4">
            {row.map((item, idx) => (
              <div key={idx} className="flex-1 mr-4">
                <label htmlFor="" className="block text-sm font-medium text-center font-bold">
                  {item.name}
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 text-center"
                  onChange={(e) => handleInputChange(item.name, e.target.value)}
                />
              </div>
            ))}
          </div>
        ))}
        <button type="submit" className="button" onClick={handleSubmit} >Enviar datos</button>
        </div>
    </div>
    );
  };

export const TitleForm = (props) => {
    return(
        <div className="seven">
        <h1>{props.title}</h1>
    </div>
    )
}
