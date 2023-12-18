import React from "react";
import { useState } from "react";

const Abdomen = () => {
    const [piel, setPiel] = useState('');
    const [forma, setForma] = useState('');
    const [dolor, setDolor] = useState('');
    const [consistencia, setConcistencia] = useState('')
    const [viceronmegallas, setViceronmegallas] = useState('')
    const [peristalis, setPeristalis] = useState('');
    const [notaDeExploracion, setNotadeExploracion] = useState('');
    
    const [mostrarOcultar, setMostrarOcultar] = useState(false);

    const toogleMO = () => {
        setMostrarOcultar(!mostrarOcultar)
    }    
    return (
        <>
        <button onClick={toogleMO} className="cta">
            <span><b>{mostrarOcultar ? "Ingresa los datos correctamente" : "Abdomen"}</b></span>
        </button>
        {
            mostrarOcultar && (
                <forrm className="w-full p-2">
                <h1 className="text-xl  font-sans mr-4"> Abdomen. </h1>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="piel" className="block font-bold">Piel: </label>
                        <input type="text" name="piel" id="piel"
                            className="w-full border p-2"
                            value={piel} onChange={(e) => setPiel(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="forma" className="block font-bold">Forma :</label>
                        <input type="text" name="forma" id="forma"
                            className="w-full border p-2"
                            value={forma} onChange={(e) => setForma(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="dolor" className="block font-bold">Dolor:</label>
                        <input type="text" name="dolor" id="dolor"
                            className="w-full border p-2"
                            value={dolor} onChange={(e) => setDolor(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="Concistencia" className="block font-bold">Concistencia:</label>
                        <input type="text" name="Concistencia" id="Concistencia"
                            className="w-full border p-2"
                            value={consistencia} onChange={(e) => setConcistencia(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="vicereo" className="block font-bold">Viseromgalias:</label>
                        <input type="text" name="vicero" id="vicero"
                            className="w-full border p-2"
                            value={viceronmegallas} onChange={(e) => setViceronmegallas(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="perilstacis" className="block font-bold">Peristalsis: </label>
                        <input type="text" name="perilstacis" id="perilstacis"
                            className="w-full border p-2"
                            value={peristalis} onChange={(e) => setPeristalis(e.target.value)}
                        />
                    </div>

                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="notadeExploracion" className="block font-bold">Nota de exploracion</label>
                        <input type="text" name="notadeExploracion" id="notadeExploracion"
                            className="w-full border p-2"
                            value={notaDeExploracion} onChange={(e) => setNotadeExploracion(e.target.value)}
                        />
                    </div>
                </div>
            </forrm>
            )
        }
           
        </>
    )
}

export default Abdomen