import React, { useState } from "react";

const HeredoFamiliar = () => {

  const [mostrarOcultar, setMostrarOcultar] = useState(true)

  const toogleMO =() =>{
    setMostrarOcultar(!mostrarOcultar)
  }

    return (
        <>
            <button onClick={toogleMO} className="cta">
                <span><b>{mostrarOcultar ? "Introduzca los datos" : "Antecedentes Heredo-Familiares"}</b></span>
            </button>
            {
                mostrarOcultar && (
                    <form action="" className="w-full p-4">
            <div className="container Form-AntecedentesHeredo">
                <div className="border rounded-lg p-8 shadow-md  ">
                    <h1 className="text-xl  font-sans mb-4 title">Antecedentes heredo Familiares</h1>
                    <table className="table-auto border     ">
                        <thead>
                            <tr>
                                <th className="border p-2 w-20 text-center">------------</th>
                                <th className="border p-2 w-60 text-center">Padre</th>
                                <th className="border p-2 w-60 text-center">Madre</th>
                                <th className="border p-2 w-60 text-center">Hermano</th>
                                <th className="border p-2 w-60 text-center">Hijo</th>
                                <th className="border p-2 w-60 text-center">Otros</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2 w-40 text-center">asmatico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                           />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                            />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                           />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                             />
                                </td>
                                <td className="border p-2 center w-50 text-center">
                                    <input
                                        type="checkbox"
                                            />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Diabetico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                             />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                      />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                   />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                  />
                                </td>
                                <td className="border p-2 center w-40 text-center">
                                    <input
                                        type="checkbox"
                                                      />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Psiquiatricos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                         />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                         />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                         />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                         />
                                </td>
                                <td className="border p-2 center w-40 text-center">
                                    <input
                                        type="checkbox"
                                                          />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Epileptico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                     />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                     />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                           />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                     />
                                </td>
                                <td className="border p-2 center w-40 text-center">
                                    <input
                                        type="checkbox"
                                                     />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Neoplasicos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                         />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                           />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                           />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                           />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                         />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Artriticos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                       />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                       />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                       />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                         />
                                </td>
                                <td className="border p-2 center w-40 text-center">
                                    <input
                                        type="checkbox"
                                                         />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Obesidad</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                   />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                     />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                     />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                   />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">CardioVasculares</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                                 />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Hipertencivos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                           />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                         />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                                 />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                                 />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                                 />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Congenitos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                           />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                           />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                           />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                           />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                           />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Hermatologicos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                                  />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                                  />
                                </td>
                                <td className="border p-2 w-40 text-center" >
                                    <input
                                        type="checkbox"
                                                                  />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                                  />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                                  />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Audiologicos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 cw-40 text-center">
                                    <input
                                        type="checkbox"
                         />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Tuberculosos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 center w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Tuberculosos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                                               />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Sifiliticos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Ulcerosos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Litiasicos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Otros</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"

                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </form>
                )
            }
        </>
    );
}

export default HeredoFamiliar;