import React, { useState } from "react";

const ExtremidadesInferiores = () => {
    const [estructura, setEstructura] = useState('')
    const [piel, setPiel] = useState('')
    const [pulso, setPulso] = useState('')
    const [reflejos, setReflejos] = useState('')
    const [sensibilidad, setSensibilidad] = useState('')
    const [fuerzaMuscular, setFuerzaMuscular] = useState('')
    const [otrasCaract, setOtrasCaract] = useState('')
    const [pies, setPies] = useState('')
    const [uñas, setUñas] = useState('')
    const [notaExploracion, setNotaExploracion] = useState('')

    return (
        <>
            <form action="" className="w-full p-4">
                <h1 className="text-xl  font-sans mb-4">Extremidades Inferiores</h1>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="estructura" className="block font-bold">Estructura</label>
                        <input type="text" name="estructura" id="estructura"
                            className="w-full border p-2"
                            value={estructura} onChange={(e) => setEstructura(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="piel" className="block font-bold">Piel :</label>
                        <input type="text" name="piel" id="piel"
                            className="w-full border p-2"
                            value={piel} onChange={(e) => setPiel(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="pulso" className="block font-bold">Pulso :</label>
                        <input type="text" name="pulso" id="pulso"
                            className="w-full border p-2"
                            value={pulso} onChange={(e) => setPulso(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="reflejos" className="block font-bold">Reflejos :</label>
                        <input type="text" name="reflejos" id="reflejos"
                            className="w-full border p-2"
                            value={reflejos} onChange={(e) => setReflejos(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="sensibilidad" className="block font-bold">Sensibilidad :</label>
                        <input type="text" name="sensibilidad" id="sensibilidad"
                            className="w-full border p-2"
                            value={sensibilidad} onChange={(e) => setSensibilidad(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="" className="block font-bold">Fuerza muscular :</label>
                        <input type="text" name="" id=""
                            className="w-full border p-2"
                            value={fuerzaMuscular} onChange={(e) => setFuerzaMuscular(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="otrasCaract" className="block font-bold">Otras caracteristicas</label>
                        <input type="text" name="otrasCaract" id="otrasCaract"
                            className="w-full border p-2"
                            value={otrasCaract} onChange={(e) => setOtrasCaract(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="pies" className="block font-bold">Pies :</label>
                        <input type="text" name="pies" id="pies"
                            className="w-full border p-2"
                            value={pies} onChange={(e) => setPies(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="uñas" className="block font-bold">Uñas</label>
                        <input type="text" name="uñas" id="uñas"
                            className="w-full border p-2"
                            value={uñas} onChange={(e) => setUñas(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="notaExploracion" className="block font-bold">Notas de Exploracion</label>
                        <input type="text" name="notaExploracion" id="notaExploracion"
                            className="w-full border p-2"
                            value={notaExploracion} onChange={(e) => setNotaExploracion(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}
export default ExtremidadesInferiores;