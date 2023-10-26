import React from "react";

const AntPatologico = () => {
    return (
        <>
            <h1 className="text-x1 font-sans mb4">
                Antececentes personales Patologicos
            </h1>
            <div className="flex justify-betwen mb-4">
                <div className="flex-1 mr-4">
                    {/* Tabla de lado Izquierdo */}
                    <table className="table-auto  mx-auto my-4">
                        <tbody>
                            <tr>
                                <td className="border p-2 w-40 text-center">Alergico</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Diabetico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Diabetico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Artritico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Cardiovascular</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Hipertenso</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Hematologico</td>
                                <td className="border p-2 w-40 text-center" >
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Traumatico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Siquiatrico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Neoplastico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Quirurgico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex-1 mr-4">
                    {/* Tabla de centro */}
                    <table className="table-auto  mx-auto my-4">
                        <tbody>
                            <tr>
                                <td className="border p-2 w-40 text-center">Endocrinologo</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Genitourinario</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Neurologico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Asmatico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Icterico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Congenito</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Audiologico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Transfuncional</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Parasitos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Otros</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center"></td>
                                <td className="border p-2 w-40 text-center"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex-1 mr-4">
                    {/* Tabla lado derecho */}
                    <table className="table-auto  mx-auto my-4">
                        <tbody>
                            <tr>
                                <td className="border p-2 w-40 text-center">Sarampion</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Rubeola</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Otttis</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Varicela</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Escarlatina</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Venereas</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Tuberculosis</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Parotiditis</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Amigdalitis</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Bronquitis</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Otros</td>
                                <td className="border p-2 w-40 text-center">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <label htmlFor="">Comentarios
                <input type="text" name="" id="" />
            </label>
        </>
    )
}
export default AntPatologico;