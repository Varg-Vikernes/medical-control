import React from "react";

const Obstretico = () => {
    return (
        <>
            <h1 className="text-xl  font-sans mb-4">
                Antececentes personales Patologicos
            </h1>
            <div className="flex justify-betwen mb-4">
                <div className="flex-1 mr-4">
                    {/* Tabla de lado Izquierdo */}
                    <table className="table-auto  mx-auto my-4">
                        <tbody>
                            <tr>
                                <td className="border p-2 w-80 text-center">Menarca</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="menarca" id="menarca" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Ritmo</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="ritmo" id="ritmo" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Ciclo Menstrual</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="cicloMenstrual" id="cicloMenstrual" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Caracteristicas</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="caracteristicas" id="caracteristicas" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Fum</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="fum" id="fum" />
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
                                <td className="border p-2 w-80 text-center">Inicio vida sexual activa</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="sexActiva" id="sexActiva" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Gestacion</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="gestacion" id="gestacion" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Partos</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="partos" id="partos" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Cesarea</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="cesarea" id="cesarea" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Aborto</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="aborto" id="aborto" />
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
                                <td className="border p-2 w-80 text-center">Control de feritlidad</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="ctrlFertilidad" id="ctrlFertilidad" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Otros</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="otros" id="otros" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Infecciones</td>
                                <td className="border p-2 w-20 text-center">
                                    <input type="checkbox" name="infecciones" id="infecciones" />
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
        </>
    )
}

export default Obstretico;