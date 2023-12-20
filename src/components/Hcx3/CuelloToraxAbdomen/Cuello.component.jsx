import React, { useState } from "react";

const Cuello = () => {
    const [piel, setPiel] = useState('');
    const [pulsoCarotideo, setPulsoCarotideo] = useState('');
    const [gangliosCervicales, setGangliosCervicales] = useState('');
    const [tiroides, setTiroides] = useState('');
    const [NotadeExploracion, setNotadeExploracion] = useState('');

    const [mostrarOcultar, setMostrarOcultar] = useState(false);

    const toogleMO =() => {
        setMostrarOcultar(!mostrarOcultar);
    }
    return (
        <>
        <button onClick={toogleMO} className="cta">
            <span><b>{mostrarOcultar ? "Ingresa los datos correctamente" : "Cuello"}</b></span>
        </button>
        {
            mostrarOcultar && (
                <div className="Form border rounded-lg p-8 shadow-md">    
                <form action="" className="w-full p-4">
                    <div className="seven">
                <h1 className="text-xl  font-sans mb-4"> Cuello. </h1>
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
                        <label htmlFor="pulsoCarotideo" className="block font-bold">Pulso carotideo:</label>
                        <input type="text" name="pulsoCarotideo" id="pulsoCarotideo"
                            className="w-full border p-2"
                            value={pulsoCarotideo} onChange={(e) => setPulsoCarotideo(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="ganglioCervival" className="block font-bold">Ganglios cervicales</label>
                        <input type="text" name="ganglioCervival" id="ganglioCervival"
                            className="w-full border p-2"
                            value={gangliosCervicales} onChange={(e) => setGangliosCervicales(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="tiroides" className="block font-bold">Tiroides: </label>
                        <input type="text" name="tiroides" id="tiroides"
                            className="w-full border p-2"
                            value={tiroides} onChange={(e) => setTiroides(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="notasDeExploracion" className="block font-bold">Notas de exploracion</label>
                        <input type="text" id="notasDeExploracion" name="notasDeExploracion"
                            className="w-full border p-2"
                            value={NotadeExploracion} onChange={(e) => setNotadeExploracion(e.target.value)}
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

export default Cuello;