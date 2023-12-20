import React, { useState } from "react";

const Torax = () => {
    const [piel, setPiel] = useState('');
    const [mamasPezones, setMamasPezones] = useState('');
    const [movimientoRespiratorio, setMovimientoRespiratorio] = useState('');
    const [campoPulmonar, setCampoPulmonar] = useState('');
    const [ritmoCardiaco, setRitmoCardiaco] = useState('');
    const [intensidad, setIntencidad] = useState('');
    const [caracteristicasLatido, setCaracteristicasLatido] = useState('');
    const [notasExploracion, setNotasExploracion] = useState('');
    
    const [mostrarOcultar, setMostrarOcultar] = useState(false);

        const toogleMO = () => {
            setMostrarOcultar(!mostrarOcultar)
        }

    return (
        <>
        <button onClick={toogleMO} className="cta" >
            <span><b>{mostrarOcultar ? "Ingresa los datos Correctamente" : "Torax"}</b></span>
        </button>
            {
                mostrarOcultar && (
                    <div className="Form border rounded-lg p-8 shadow-md">    
                    <form action="" className="w-full p-4">
                        <div className="seven">

                <h1 className="text-xl  font-sans mb-4">    Torax .</h1>
                        </div>

                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="piel" className="block font-bold">Piel:</label>
                        <input type="text" name="piel" id="piel"
                            className="w-full border p-2"
                            value={piel} onChange={(e) => setPiel(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="mamasPezones" className="block font-bold">Mamas y Pezones :</label>
                        <input type="text" name="mamasPezones" id="mamasPezones"
                            className="w-full border p-2"
                            value={mamasPezones} onChange={(e) => setMamasPezones(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="movimientoRespiratorio" className="block font-bold">Movimiento Respiratorio :</label>
                        <input type="text" name="movimientoRespiratorio" id="movimientoRespiratorio"
                            className="w-full border p-2"
                            value={movimientoRespiratorio} onChange={(e) => setMovimientoRespiratorio(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="campoPulmonar" className="block font-bold">Campo pulmonar:</label>
                        <input type="text" name="campoPulmonar" id="campoPulmonar"
                            className="w-full border p-2"
                            value={campoPulmonar} onChange={(e) => setCampoPulmonar(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="ritmoCardiaco" className="block font-bold">Ritmo cardiaco :</label>
                        <input type="text" name="ritmoCardiaco" id="ritmoCardiaco"
                            className="w-full border p-2"
                            value={ritmoCardiaco} onChange={(e) => setRitmoCardiaco(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="intencidad" className="block font-bold">Intencidad del ruido</label>
                        <input type="text" name="intencidad" id="intencidad"
                            className="w-full border p-2"
                            value={intensidad} onChange={(e) => setIntencidad(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="caracteristicas" className="block font-bold">Caracteristicas del latido</label>
                        <input type="text" name="caracteristicas" id="caracteristicas"
                            className="w-full border p-2"
                            value={caracteristicasLatido} onChange={(e) => setCaracteristicasLatido(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="notaDeExploracion" className="block font-bold">Nota de exploracion</label>
                        <input type="text" name="notaDeExploracion" id="notaDeExploracion"
                            className="w-full border p-2"
                            value={notasExploracion} onChange={(e) => setNotasExploracion(e.target.value)}
                        />
                    </div>
                </div>
            </form>
            </div>
                )
            }
        </>
    )
}
export default Torax;