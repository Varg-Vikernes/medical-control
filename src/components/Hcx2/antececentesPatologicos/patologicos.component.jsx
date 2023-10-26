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
                    <table className="table-full border">
                        <tbody>
                            <tr>
                                <td className="border p-2 w-40">Alergico</td>
                                <td className="border p-2 w-20">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2">Diabetico</td>
                                <td className="border p-2">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2">Diabetico</td>
                                <td className="border p-2">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex-1 mr-4">
                    {/* Tabla de centro */}
                    <table className="table-auto">
                        <tbody>
                            <tr>
                                <td className="border o-2">Endocrinologo</td>
                                <td className="border p-2">
                                    <input type="checkbox" />                        </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex-1 mr-4">
                    {/* Tabla lado derecho */}
                    <table className="table-auto">
                        <tbody>
                            <tr>
                                <td className="border p-2">Sarampion</td>
                                <td className="border p-2">
                                    <input type="checkbox" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default AntPatologico;