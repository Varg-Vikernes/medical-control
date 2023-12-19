import React from "react";
import { useState } from "react";
const AntPatologico = () => {


    const [mostrarOcultar, setMostrarOcultar] = useState(false)

    const toogleMO = () => {
        setMostrarOcultar(!mostrarOcultar)
    }


    return (
        <>
            <button onClick={toogleMO} className="cta">
                <span><b>{mostrarOcultar ? "Introduzca los datos" : "Antecedentes Personales Patologicos"}</b></span>
            </button>
            {
                mostrarOcultar && (
                    <>
                        <div className="seven">
                            <h1 >Antececentes personales Patologicos</h1>
                        </div>
                        <div className="Form border rounded-lg p-8 shadow-md">
                            <div className="flex justify-betwen mb-4 ">
                                <div className="flex-1 mr-4">
                                    {/* Tabla de lado Izquierdo */}
                                    <table className="table-auto  mx-auto my-4 bg-white tabla_derecha">
                                        <tbody>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Alergico</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-26"
                                                    />
                                                    <label for="_checkbox-26">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Diabetico</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-27"
                                                    />
                                                    <label for="_checkbox-27">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>

                                            <tr>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Cardiovascular</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-29"
                                                    />
                                                    <label for="_checkbox-29">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Hipertenso</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-30"
                                                    />
                                                    <label for="_checkbox-30">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Hematologico</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-31"
                                                    />
                                                    <label for="_checkbox-31">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Traumatico</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-32"
                                                    />
                                                    <label for="_checkbox-32">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Siquiatrico</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-33"
                                                    />
                                                    <label for="_checkbox-33">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Neoplastico</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-34"
                                                    />
                                                    <label for="_checkbox-34">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Quirurgico</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-35"
                                                    />
                                                    <label for="_checkbox-35">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center"></td>
                                                <td className="border w-40 h-10"></td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center"></td>
                                                <td className="border w-40 h-10"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="flex-1 mr-4">
                                    {/* Tabla de centro */}
                                    <table className="table-auto  mx-auto my-4 bg-white tabla_centro">
                                        <tbody>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Endocrinologo</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-36"
                                                    />
                                                    <label for="_checkbox-36">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Genitourinario</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-37"
                                                    />
                                                    <label for="_checkbox-37">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Neurologico</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-38"
                                                    />
                                                    <label for="_checkbox-38">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Asmatico</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-39"
                                                    />
                                                    <label for="_checkbox-39">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Icterico</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-40"
                                                    />
                                                    <label for="_checkbox-40">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Congenito</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-41"
                                                    />
                                                    <label for="_checkbox-41">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Audiologico</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-42"
                                                    />
                                                    <label for="_checkbox-42">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Transfuncional</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-43"
                                                    />
                                                    <label for="_checkbox-43">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Parasitos</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-44"
                                                    />
                                                    <label for="_checkbox-44">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Otros</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-45"
                                                    />
                                                    <label for="_checkbox-45">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center"></td>
                                                <td className="border p-2 w-40 h-10 text-center"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="flex-1 mr-4">
                                    {/* Tabla lado derecho */}
                                    <table className="table-auto  mx-auto my-4 bg-white border tabla-derecha">
                                        <tbody>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Sarampion</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-46"
                                                    />
                                                    <label for="_checkbox-46">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Rubeola</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-47"
                                                    />
                                                    <label for="_checkbox-47">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Otttis</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-48"
                                                    />
                                                    <label for="_checkbox-48">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Varicela</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-49"
                                                    />
                                                    <label for="_checkbox-49">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Escarlatina</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-50"
                                                    />
                                                    <label for="_checkbox-50">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Venereas</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-51"
                                                    />
                                                    <label for="_checkbox-51">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Tuberculosis</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-52"
                                                    />
                                                    <label for="_checkbox-52">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Parotiditis</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-53"
                                                    />
                                                    <label for="_checkbox-53">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Amigdalitis</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-54"
                                                    />
                                                    <label for="_checkbox-54">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Bronquitis</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-55"
                                                    />
                                                    <label for="_checkbox-55">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border p-2 w-40 text-center">Otros</td>
                                                <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                    <input
                                                        type="checkbox" id="_checkbox-56"
                                                    />
                                                    <label for="_checkbox-56">
                                                        <div class="tick_mark"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="Comentario" className="block font-bold " >Comentario</label>

                                <input type="text" className="w-full border p-2" id="Comentario" />
                            </div>
                            <button className="button" type="submit"> Enviar Datos</button>
                        </div>
                    </>
                )
            }
        </>
    )
}
export default AntPatologico;