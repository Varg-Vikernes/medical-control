import React, { useState } from "react";

const HeredoFamiliar = () => {

    const [checklist, setChecklist] = useState({
        asmaticos: false,
        diabeticos: false,
        psiquiatrico: false,
        epileptico: false,
        neoplasticos: false,
        artriticos: false,
        obesidad: false,
        cardiovasculares: false,
        hipertensivos: false,
        congenitos: false,
        hematologicos: false,
        audiologicos: false,
        tuberculosos: false,
        sifiliticos: false,
        ulcerosos: false,
        litiasicos: false,
        padre: false,
        madre: false,
        hermano: false,
        hijo: false,
        otros: false,
    });

    return (
        <>

            <div className="container Form-AntecedentesHeredo">
                <div className="border rounded-lg p-8 shadow-md  ">
                    <h1 className="text-xl  font-sans mb-4">Antecedentes heredo Familiares</h1>
                    <table className="table-auto border">
                        <thead>
                            <tr>
                                <th className="border p-2 w-40 text-center">------------</th>
                                <th className="border p-2 w-40 text-center">Padre</th>
                                <th className="border p-2 w-40 text-center">Madre</th>
                                <th className="border p-2 w-40 text-center">Hermano</th>
                                <th className="border p-2 w-40 text-center">Hijo</th>
                                <th className="border p-2 w-40 text-center">Otros</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2 w-40 text-center">asmatico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.asmaticos}
                                        onChange={() => HeredoFamiliar(true)}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.asmaticos}
                                        onChange={() => HeredoFamiliar(true)}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.asmaticos}
                                        onChange={() => HeredoFamiliar(true)}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.asmaticos}
                                        onChange={() => HeredoFamiliar(true)}
                                    />
                                </td>
                                <td className="border p-2 center w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.asmaticos}
                                        onChange={() => HeredoFamiliar(true)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Diabetico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.diabeticos}
                                        onChange={() => HeredoFamiliar(true)}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.diabeticos}
                                        onChange={() => HeredoFamiliar('diabetico')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.diabeticos}
                                        onChange={() => HeredoFamiliar('diabetico')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.diabeticos}
                                        onChange={() => HeredoFamiliar('diabetico')}
                                    />
                                </td>
                                <td className="border p-2 center w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.diabeticos}
                                        onChange={() => HeredoFamiliar('diabetico')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Psiquiatricos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.psiquiatrico}
                                        onChange={() => HeredoFamiliar('psiquiatrico')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.psiquiatrico}
                                        onChange={() => HeredoFamiliar('psiquiatrico')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.psiquiatrico}
                                        onChange={() => HeredoFamiliar('psiquiatrico')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.psiquiatrico}
                                        onChange={() => HeredoFamiliar('psiquiatrico')}
                                    />
                                </td>
                                <td className="border p-2 center w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.psiquiatrico}
                                        onChange={() => HeredoFamiliar('psiquiatrico')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Epileptico</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.epileptico}
                                        onChange={() => HeredoFamiliar('epileptico')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.epileptico}
                                        onChange={() => HeredoFamiliar('epileptico')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.epileptico}
                                        onChange={() => HeredoFamiliar('epileptico')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.epileptico}
                                        onChange={() => HeredoFamiliar('epileptico')}
                                    />
                                </td>
                                <td className="border p-2 center w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.epileptico}
                                        onChange={() => HeredoFamiliar('epileptico')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Neoplasicos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.neoplasticos}
                                        onChange={() => HeredoFamiliar('neoplasticos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.neoplasticos}
                                        onChange={() => HeredoFamiliar('neoplasticos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.neoplasticos}
                                        onChange={() => HeredoFamiliar('neoplasticos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.neoplasticos}
                                        onChange={() => HeredoFamiliar('neoplasticos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.neoplasticos}
                                        onChange={() => HeredoFamiliar('neoplasticos')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Artriticos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.artriticos}
                                        onChange={() => HeredoFamiliar('artriticos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.artriticos}
                                        onChange={() => HeredoFamiliar('artriticos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.artriticos}
                                        onChange={() => HeredoFamiliar('artriticos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.artriticos}
                                        onChange={() => HeredoFamiliar('artriticos')}
                                    />
                                </td>
                                <td className="border p-2 center w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.artriticos}
                                        onChange={() => HeredoFamiliar('artriticos')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Obesidad</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.obesidad}
                                        onChange={() => HeredoFamiliar('obesidad')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.obesidad}
                                        onChange={() => HeredoFamiliar('obesidad')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.obesidad}
                                        onChange={() => HeredoFamiliar('obesidad')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.obesidad}
                                        onChange={() => HeredoFamiliar('obesidad')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.obesidad}
                                        onChange={() => HeredoFamiliar('obesidad')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">CardioVasculares</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.cardiovasculares}
                                        onChange={() => HeredoFamiliar('cardioVasculares')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.cardiovasculares}
                                        onChange={() => HeredoFamiliar('cardioVasculares')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.cardiovasculares}
                                        onChange={() => HeredoFamiliar('cardioVasculares')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.cardiovasculares}
                                        onChange={() => HeredoFamiliar('cardioVasculares')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.cardiovasculares}
                                        onChange={() => HeredoFamiliar('cardioVasculares')}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Hipertencivos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.hipertensivos}
                                        onChange={() => HeredoFamiliar('hipertensivos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.hipertensivos}
                                        onChange={() => HeredoFamiliar('hipertensivos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.hipertensivos}
                                        onChange={() => HeredoFamiliar('hipertensivos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.hipertensivos}
                                        onChange={() => HeredoFamiliar('hipertensivos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.hipertensivos}
                                        onChange={() => HeredoFamiliar('hipertensivos')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Congenitos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.congenitos}
                                        onChange={() => HeredoFamiliar('congenitos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.congenitos}
                                        onChange={() => HeredoFamiliar('congenitos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.congenitos}
                                        onChange={() => HeredoFamiliar('congenitos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.congenitos}
                                        onChange={() => HeredoFamiliar('congenitos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.congenitos}
                                        onChange={() => HeredoFamiliar('congenitos')}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="border p-2 w-40 text-center">Hermatologicos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.hematologicos}
                                        onChange={() => HeredoFamiliar('hermatologicos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.hematologicos}
                                        onChange={() => HeredoFamiliar('hermatologicos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center" >
                                    <input
                                        type="checkbox"
                                        checked={checklist.hematologicos}
                                        onChange={() => HeredoFamiliar('hermatologicos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.hematologicos}
                                        onChange={() => HeredoFamiliar('hermatologicos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.hematologicos}
                                        onChange={() => HeredoFamiliar('hermatologicos')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Audiologicos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.audiologicos}
                                        onChange={() => HeredoFamiliar('audiologicos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.audiologicos}
                                        onChange={() => HeredoFamiliar('audiologicos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.audiologicos}
                                        onChange={() => HeredoFamiliar('audiologicos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.audiologicos}
                                        onChange={() => HeredoFamiliar('audiologicos')}
                                    />
                                </td>
                                <td className="border p-2 cw-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.audiologicos}
                                        onChange={() => HeredoFamiliar('audiologicos')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Tuberculosos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.tuberculosos}
                                        onChange={() => HeredoFamiliar('tuberculosos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.tuberculosos}
                                        onChange={() => HeredoFamiliar('tuberculosos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.tuberculosos}
                                        onChange={() => HeredoFamiliar('tuberculosos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.tuberculosos}
                                        onChange={() => HeredoFamiliar('tuberculosos')}
                                    />
                                </td>
                                <td className="border p-2 center w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.tuberculosos}
                                        onChange={() => HeredoFamiliar('tuberculosos')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Tuberculosos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.tuberculosos}
                                        onChange={() => HeredoFamiliar('tuberculosos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.tuberculosos}
                                        onChange={() => HeredoFamiliar('tuberculosos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.tuberculosos}
                                        onChange={() => HeredoFamiliar('tuberculosos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.tuberculosos}
                                        onChange={() => HeredoFamiliar('tuberculosos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.tuberculosos}
                                        onChange={() => HeredoFamiliar('tuberculosos')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Sifiliticos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.sifiliticos}
                                        onChange={() => HeredoFamiliar('sifiliticos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.sifiliticos}
                                        onChange={() => HeredoFamiliar('sifiliticos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.sifiliticos}
                                        onChange={() => HeredoFamiliar('sifiliticos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.sifiliticos}
                                        onChange={() => HeredoFamiliar('sifiliticos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.sifiliticos}
                                        onChange={() => HeredoFamiliar('sifiliticos')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Ulcerosos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.ulcerosos}
                                        onChange={() => HeredoFamiliar('ulcerosos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.ulcerosos}
                                        onChange={() => HeredoFamiliar('ulcerosos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.ulcerosos}
                                        onChange={() => HeredoFamiliar('ulcerosos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.ulcerosos}
                                        onChange={() => HeredoFamiliar('ulcerosos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.ulcerosos}
                                        onChange={() => HeredoFamiliar('ulcerosos')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Litiasicos</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.litiasicos}
                                        onChange={() => HeredoFamiliar('litiacicos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.litiasicos}
                                        onChange={() => HeredoFamiliar('litiacicos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.litiasicos}
                                        onChange={() => HeredoFamiliar('litiacicos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.litiasicos}
                                        onChange={() => HeredoFamiliar('litiacicos')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.litiasicos}
                                        onChange={() => HeredoFamiliar('litiacicos')}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="border p-2 w-40 text-center">Otros</td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.otros}
                                        onChange={() => HeredoFamiliar('otros')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.otros}
                                        onChange={() => HeredoFamiliar('otros')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.otros}
                                        onChange={() => HeredoFamiliar('otros')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.otros}
                                        onChange={() => HeredoFamiliar('otros')}
                                    />
                                </td>
                                <td className="border p-2 w-40 text-center">
                                    <input
                                        type="checkbox"
                                        checked={checklist.otros}
                                        onChange={() => HeredoFamiliar('otros')}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default HeredoFamiliar;