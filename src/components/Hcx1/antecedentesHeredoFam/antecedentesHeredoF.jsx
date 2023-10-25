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
        //        /*  Aqui van los familiares que tengan algo de eso *
        padre: false,
        madre: false,
        hermano: false,
        hijo: false,
        otros: false,
    })

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
                            <input type="checkbox"
                                checked={checklist.diabeticos}
                                onChange={() => HeredoFamiliar('diabetico')}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default HeredoFamiliar;