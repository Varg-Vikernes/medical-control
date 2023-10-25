import React, { useState } from "react";





const HeredoFamiliar = (category) => {

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
        //        /*  Aqui van los familiares que tengan algo de eso *
        padre: false,
        madre: false,
        hermano: false,
        hijo: false,
        otros: false,
    })
    if (category === 'padre' || category === 'madre' ||
        category === 'hermano' || category === 'hijo' || category === 'otro') {
        if (checklist.padre || checklist.madre || checklist.hermano || checklist.hijo || checklist.otros) {
            setChecklist({
                checklist,
                asmaticos: true,
                diabeticos: true
            });
        }
    }


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl  font-sans mb-4">Antecedentes heredo Familiares</h1>
            <table className="table-auto border">
                <thead>
                    <tr>
                        <th className="border p-2">------------</th>
                        <th className="border p-2">Padre</th>
                        <th className="border p-2">Madre</th>
                        <th className="border p-2">Hermano</th>
                        <th className="border p-2">Hijo</th>
                        <th className="border p-2">Otros</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2">asmatico</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.asmaticos}
                                onChange={() => HeredoFamiliar('asmaticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.asmaticos}
                                onChange={() => HeredoFamiliar('asmaticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.asmaticos}
                                onChange={() => HeredoFamiliar('asmaticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.asmaticos}
                                onChange={() => HeredoFamiliar('asmaticos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.asmaticos}
                                onChange={() => HeredoFamiliar('asmaticos')}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">Diabetico</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.diabeticos}
                                onChange={() => HeredoFamiliar('diabetico')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.diabeticos}
                                onChange={() => HeredoFamiliar('diabetico')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.diabeticos}
                                onChange={() => HeredoFamiliar('diabetico')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.diabeticos}
                                onChange={() => HeredoFamiliar('diabetico')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.diabeticos}
                                onChange={() => HeredoFamiliar('diabetico')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Psiquiatricos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.psiquiatrico}
                                onChange={() => HeredoFamiliar('psiquiatrico')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.psiquiatrico}
                                onChange={() => HeredoFamiliar('psiquiatrico')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.psiquiatrico}
                                onChange={() => HeredoFamiliar('psiquiatrico')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.psiquiatrico}
                                onChange={() => HeredoFamiliar('psiquiatrico')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.psiquiatrico}
                                onChange={() => HeredoFamiliar('psiquiatrico')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Epileptico</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.epileptico}
                                onChange={() => HeredoFamiliar('epileptico')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.epileptico}
                                onChange={() => HeredoFamiliar('epileptico')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.epileptico}
                                onChange={() => HeredoFamiliar('epileptico')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.epileptico}
                                onChange={() => HeredoFamiliar('epileptico')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.epileptico}
                                onChange={() => HeredoFamiliar('epileptico')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Neoplasicos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.neoplasticos}
                                onChange={() => HeredoFamiliar('neoplasticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.neoplasticos}
                                onChange={() => HeredoFamiliar('neoplasticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.neoplasticos}
                                onChange={() => HeredoFamiliar('neoplasticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.neoplasticos}
                                onChange={() => HeredoFamiliar('neoplasticos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.neoplasticos}
                                onChange={() => HeredoFamiliar('neoplasticos')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Artriticos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.artriticos}
                                onChange={() => HeredoFamiliar('artriticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.artriticos}
                                onChange={() => HeredoFamiliar('artriticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.artriticos}
                                onChange={() => HeredoFamiliar('artriticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.artriticos}
                                onChange={() => HeredoFamiliar('artriticos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.artriticos}
                                onChange={() => HeredoFamiliar('artriticos')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Obesidad</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.obesidad}
                                onChange={() => HeredoFamiliar('obesidad')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.obesidad}
                                onChange={() => HeredoFamiliar('obesidad')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.obesidad}
                                onChange={() => HeredoFamiliar('obesidad')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.obesidad}
                                onChange={() => HeredoFamiliar('obesidad')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.obesidad}
                                onChange={() => HeredoFamiliar('obesidad')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">CardioVasculares</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.cardiovasculares}
                                onChange={() => HeredoFamiliar('cardioVasculares')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.cardiovasculares}
                                onChange={() => HeredoFamiliar('cardioVasculares')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.cardiovasculares}
                                onChange={() => HeredoFamiliar('cardioVasculares')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.cardiovasculares}
                                onChange={() => HeredoFamiliar('cardioVasculares')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.cardiovasculares}
                                onChange={() => HeredoFamiliar('cardioVasculares')}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">Hipertencivos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.hipertensivos}
                                onChange={() => HeredoFamiliar('hipertensivos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.hipertensivos}
                                onChange={() => HeredoFamiliar('hipertensivos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.hipertensivos}
                                onChange={() => HeredoFamiliar('hipertensivos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.hipertensivos}
                                onChange={() => HeredoFamiliar('hipertensivos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.hipertensivos}
                                onChange={() => HeredoFamiliar('hipertensivos')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Congenitos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.congenitos}
                                onChange={() => HeredoFamiliar('congenitos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.congenitos}
                                onChange={() => HeredoFamiliar('congenitos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.congenitos}
                                onChange={() => HeredoFamiliar('congenitos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.congenitos}
                                onChange={() => HeredoFamiliar('congenitos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.congenitos}
                                onChange={() => HeredoFamiliar('congenitos')}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">Hermatologicos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.hematologicos}
                                onChange={() => HeredoFamiliar('hermatologicos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.hematologicos}
                                onChange={() => HeredoFamiliar('hermatologicos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.hematologicos}
                                onChange={() => HeredoFamiliar('hermatologicos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.hematologicos}
                                onChange={() => HeredoFamiliar('hermatologicos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.hematologicos}
                                onChange={() => HeredoFamiliar('hermatologicos')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Audiologicos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.audiologicos}
                                onChange={() => HeredoFamiliar('audiologicos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.audiologicos}
                                onChange={() => HeredoFamiliar('audiologicos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.audiologicos}
                                onChange={() => HeredoFamiliar('audiologicos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.audiologicos}
                                onChange={() => HeredoFamiliar('audiologicos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.audiologicos}
                                onChange={() => HeredoFamiliar('audiologicos')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Tuberculosos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.tuberculosos}
                                onChange={() => HeredoFamiliar('tuberculosos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.tuberculosos}
                                onChange={() => HeredoFamiliar('tuberculosos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.tuberculosos}
                                onChange={() => HeredoFamiliar('tuberculosos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.tuberculosos}
                                onChange={() => HeredoFamiliar('tuberculosos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.tuberculosos}
                                onChange={() => HeredoFamiliar('tuberculosos')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Tuberculosos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.tuberculosos}
                                onChange={() => HeredoFamiliar('tuberculosos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.tuberculosos}
                                onChange={() => HeredoFamiliar('tuberculosos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.tuberculosos}
                                onChange={() => HeredoFamiliar('tuberculosos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.tuberculosos}
                                onChange={() => HeredoFamiliar('tuberculosos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.tuberculosos}
                                onChange={() => HeredoFamiliar('tuberculosos')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Sifiliticos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.sifiliticos}
                                onChange={() => HeredoFamiliar('sifiliticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.sifiliticos}
                                onChange={() => HeredoFamiliar('sifiliticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.sifiliticos}
                                onChange={() => HeredoFamiliar('sifiliticos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.sifiliticos}
                                onChange={() => HeredoFamiliar('sifiliticos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.sifiliticos}
                                onChange={() => HeredoFamiliar('sifiliticos')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Ulcerosos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.ulcerosos}
                                onChange={() => HeredoFamiliar('ulcerosos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.ulcerosos}
                                onChange={() => HeredoFamiliar('ulcerosos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.ulcerosos}
                                onChange={() => HeredoFamiliar('ulcerosos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.ulcerosos}
                                onChange={() => HeredoFamiliar('ulcerosos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.ulcerosos}
                                onChange={() => HeredoFamiliar('ulcerosos')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Litiasicos</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.litiasicos}
                                onChange={() => HeredoFamiliar('litiacicos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.litiasicos}
                                onChange={() => HeredoFamiliar('litiacicos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.litiasicos}
                                onChange={() => HeredoFamiliar('litiacicos')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.litiasicos}
                                onChange={() => HeredoFamiliar('litiacicos')}
                            />
                        </td>
                        <td className="border p-2 center">
                            <input
                                type="checkbox"
                                checked={checklist.litiasicos}
                                onChange={() => HeredoFamiliar('litiacicos')}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td className="border p-2">Otros</td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.otros}
                                onChange={() => HeredoFamiliar('otros')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.otros}
                                onChange={() => HeredoFamiliar('otros')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.otros}
                                onChange={() => HeredoFamiliar('otros')}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="checkbox"
                                checked={checklist.otros}
                                onChange={() => HeredoFamiliar('otros')}
                            />
                        </td>
                        <td className="border p-2 center">
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
    );
}

export default HeredoFamiliar;