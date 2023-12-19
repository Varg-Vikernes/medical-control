import React, { useState } from "react";

const Obstretico = () => {
    const [mostrarOcultar , setMostrarOcultar] = useState(false);

    const toogleMO =() =>{
        setMostrarOcultar(!mostrarOcultar)
    }
    return (
        <>
        <button onClick={toogleMO} className="cta"> 
            <span><b>{mostrarOcultar ? "Introduzca los datos " : "Antecedentes Personales Patologicos"}</b></span>
        </button>
        {
            mostrarOcultar &&(
                <>
                <div className="seven">
                <h1>Antecedentes personales Patologicos</h1>
                </div>
                <div className="Form border rounded-lg p-8 shadow-md">
                    
              
                    <div className="flex justify-betwen mb-4  bg-white">
                            <div className="flex-1 mr-4">
                                {/* Tabla de lado Izquierdo */}
                                <table className="table-auto  mx-auto my-4 bg-white">
                                    <tbody>
                                        <tr>
                                            <td className="border p-2 w-80 text-center">Menarca</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-57"
                                                />
                                                <label for="_checkbox-57">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Ritmo</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-58"
                                                />
                                                <label for="_checkbox-58">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Ciclo Menstrual</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-59"
                                                />
                                                <label for="_checkbox-59">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Caracteristicas</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-60"
                                                />
                                                <label for="_checkbox-60">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Fum</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-61"
                                                />
                                                <label for="_checkbox-61">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* ------------------------------------- */}
                            <div className="flex-1 mr-4">
                                <table className="table-auto mx-auto my-4 bg-white">
                                    <tbody>
                                        <tr>
                                            <td className="border p-2 w-80 text-center">Inicio vida sexual activa</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-62"
                                                />
                                                <label for="_checkbox-62">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Gestacion</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-63"
                                                />
                                                <label for="_checkbox-63">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Partos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-64"
                                                />
                                                <label for="_checkbox-64">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Cesarea</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-65"
                                                />
                                                <label for="_checkbox-65">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Aborto</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-66"
                                                />
                                                <label for="_checkbox-66">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* ------------------------------------- */}
                            <div className="flex-1 mr-4">
                                <table className="table-auto mx-auto my-4 bg-white">
                                    <tbody>
                                        <tr>
                                            <td className="border p-2 w-80 text-center">Control de feritlidad</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-67"
                                                />
                                                <label for="_checkbox-67">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Otros</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-68"
                                                />
                                                <label for="_checkbox-68">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Infecciones</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-69"
                                                />
                                                <label for="_checkbox-69">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 h-10 text-center"></td>
                                            <td className="border p-2 w-20 text-center">

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
                        <button className="button" type="submit"> Enviar Datos</button>
                        </div>
                        </>
    
            )
        }
        </>
    )
}

export default Obstretico;