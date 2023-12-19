import React, { useState } from "react";

const AntececenteMasculino = () =>{
    const [mostrarOcultar , setMostrarOcultar] = useState (false)
    const toogleMO = () => {
            setMostrarOcultar(!mostrarOcultar)
        }
    
    return (
        <>
             <button onClick={toogleMO} className="cta">
                <span><b>{mostrarOcultar ? "Introduzca los datos" : "Antecedentes Masculinos"}</b></span>
            </button>
            {
                mostrarOcultar &&(
                    <>
                    <div className="seven">
                    <h1 >Antecedentes Masculinos</h1>
                    </div>
                        <div className="Form border rounded-lg p-8 shadow-md">    
                    <div className="flex justify-betwen mb-4 ">
                            <div className="flex-1 mr-4 ">
                                {/* Tabla de lado Izquierdo */}
                                <table className="table-auto  mx-auto my-4">
                                    <tbody>
                                        <tr>
                                            <td className="border p-2 w-80 text-center">Enfermedades de prostata</td>
                                            <td className="border p-2 w-20 text-center">
                                                <input type="checkbox" name="enfermProstata" id="enfermProstata" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Desordenes reproductivo</td>
                                            <td className="border p-2 w-20 text-center">
                                                <input type="checkbox" name="desordenesRepro" id="desordenesRepro" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Dolor en testiculos</td>
                                            <td className="border p-2 w-20 text-center">
                                                <input type="checkbox" name="dolorTesticulo" id="dolorTesticulo" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Otros</td>
                                            <td className="border p-2 w-20 text-center">
                                                <input type="checkbox" name="Otros" id="Otros" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* ------------------------------------- */}
                            <div className="flex-1 mr-4">
                                <table className="table-auto mx-auto my-4">
                                    <tbody>
                                        <tr>
                                            <td className="border p-2 w-80 text-center">Orina frecuente Opaca</td>
                                            <td className="border p-2 w-20 text-center">
                                                <input type="checkbox" name="orinaFrecuente" id="orinaFrecuente" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Masa en testiculos</td>
                                            <td className="border p-2 w-20 text-center">
                                                <input type="checkbox" name="masaTesticulos" id="masaTesticulos" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Vasectomia</td>
                                            <td className="border p-2 w-20 text-center">
                                                <input type="checkbox" name="Vasectomia" id="Vasectomia" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 h-10 text-center"></td>
                                            <td className="border p-2 w-20 text-center">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* ------------------------------------- */}
                            <div className="flex-1 mr-4">
                                <table className="table-auto mx-auto my-4">
                                    <tbody>
                                        <tr>
                                            <td className="border p-2 w-80 text-center">Infeccion de pene</td>
                                            <td className="border p-2 w-20 text-center">
                                                <input type="checkbox" name="infeccionPene" id="infeccionPene" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Infeccion de prostata</td>
                                            <td className="border p-2 w-20 text-center">
                                                <input type="checkbox" name="infeccionProstata" id="infeccionProstata" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Infeccion de testiculos</td>
                                            <td className="border p-2 w-20 text-center">
                                                <input type="checkbox" name="infeccionTesticulos" id="infeccionTesticulos" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 h-10 text-center"></td>
                                            <td className="border p-2 w-20 text-center">

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                            </div>
                            </>
                )
            }
        </>
    )
}
export default AntececenteMasculino