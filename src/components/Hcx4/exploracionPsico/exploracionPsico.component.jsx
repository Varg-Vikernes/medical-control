import React from "react";
import { useState } from "react";

const ExploracionPsiconeurologica = () => {

    const [aspecto, setAspecto] = useState('');
    const [sensibilidad, setSensibilidad] = useState('');
    const [afectivas, setAfectivas] = useState('');
    const [motricidad, setMotricidad] = useState('');
    const [conductaMotora, setConductaMotora] = useState('');
    const [cordinacion, setCordinacion] = useState('');
    const [funcionIntelctual, setFuncionIntelectual] = useState('');
    const [reflejos, setReflejos] = useState('');
    const [atencion, setAtencion] = useState('');
    const [equilibrio, setEquilibrio] = useState('');
    const [juicio, setJuicio] = useState('');
    const [otros, setOtros] = useState('');
    const [asociaciondeIdeas, setAsociaciondeIdeas] = useState('');
    const [orientacion, setOrientacion] = useState('');
    const [memoria, setMemoria] = useState('');
    const [lenguaje, setLenguaje] = useState('');
    const [notaExploracion, setNotaExploracion] = useState('');

    const [mostrarOcultar, setMostrarOcultar] = useState(false);

    const toogleMO = () =>{
        setMostrarOcultar(!mostrarOcultar)
    }
    return (
        <>
            <button onClick={toogleMO} className="cta">
                <span><b>{mostrarOcultar ? "Ingrese Correctamente los Datos" : "Exploracion Psiconeurologica"}</b></span>
            </button>
            {
                mostrarOcultar &&(
                    <form action="" className="w-full p-2">
                    <h1 className="text-xl  font-sans mb-4">  EXPLORACION PSICONEUROLOGICA </h1>
                    <div className="flex justify-between mr-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="aspecto" className="block font-bold">Aspecto:</label>
                            <input type="text" name="aspecto" id="aspecto"
                                className="w-full border p-2"
                                value={aspecto} onChange={(e) => setAspecto(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 mr-4">
                            <label htmlFor="sensibilidad" className="block font-bold">Sensibilidad :</label>
                            <input type="text" name="sensibilidad" id="sensibilidad"
                                className="w-full border p-2"
                                value={sensibilidad} onChange={(e) => setSensibilidad(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mr-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="afectivas" className="block font-bold">Afectivas :</label>
                            <input type="text" name="afectivas" id="afectivas"
                                className="w-full border p-2"
                                value={afectivas} onChange={(e) => setAfectivas(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 mr-4">
                            <label htmlFor="motricidad" className="block font-bold">Motricidad :</label>
                            <input type="text" name="motricidad" id="motricidad"
                                className="w-full border p-2"
                                value={motricidad} onChange={(e) => setMotricidad(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mr-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="conductaMoral" className="block font-bold">Conducta motora:</label>
                            <input type="text" name="conductaMoral" id="conductaMoral"
                                className="w-full border p-2"
                                value={conductaMotora} onChange={(e) => setConductaMotora(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 mr-4">
                            <label htmlFor="cordinacion" className="block font-bold">Cordinacion :</label>
                            <input type="text" name="cordinacion" id="cordinacion"
                                className="w-full border p-2"
                                value={cordinacion} onChange={(e) => setCordinacion(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mr-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="funcionIntelectual" className="block font-bold">Funcion intelectual :</label>
                            <input type="text" name="funcionIntelectual" id="funcionIntelectual"
                                className="w-full border p-2"
                                value={funcionIntelctual} onChange={(e) => setFuncionIntelectual(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 mr-4">
                            <label htmlFor="reflejos" className="block font-bold">Reflejos</label>
                            <input type="text" name="reflejos" id="reflejos"
                                className="w-full border p-2"
                                value={reflejos} onChange={(e) => setReflejos(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mr-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="atencion" className="block font-bold">Atencion :</label>
                            <input type="text" name="atencion" id="atencion"
                                className="w-full border p-2"
                                value={atencion} onChange={(e) => setAtencion(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 mr-4">
                            <label htmlFor="equilibrio" className="block font-bold">Equilibrio:</label>
                            <input type="text" name="equilibrio" id="equilibrio"
                                className="w-full border p-2"
                                value={equilibrio} onChange={(e) => setEquilibrio(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mr-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="juicio" className="block font-bold">Juicio :</label>
                            <input type="text" name="juicio" id="juicio"
                                className="w-full border p-2"
                                value={juicio} onChange={(e) => setJuicio(e.target.value)}
                            />
                        </div>
                        <div className="flex-1 mr-4">
                            <label htmlFor="otros" className="block font-bold">Otros:</label>
                            <input type="text" name="otros" id="otros"
                                className="w-full border p-2"
                                value={otros} onChange={(e) => setOtros(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mr-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="asociaciondeIdeas" className="block font-bold">Asociacion de ideas:</label>
                            <input type="text" name="asociaciondeIdeas" id="asociaciondeIdeas"
                                className="w-full border p-2"
                                value={asociaciondeIdeas} onChange={(e) => setAsociaciondeIdeas(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mr-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="orientacion" className="block font-bold">Orientacion: </label>
                            <input type="text" name="orientacion" id="orientacion"
                                className="w-full border p-2"
                                value={orientacion} onChange={(e) => setOrientacion(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mr-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="memoria" className="block font-bold">Memoria: </label>
                            <input type="text" name="memoria" id="memoria"
                                className="w-full border p-2"
                                value={memoria} onChange={(e) => setMemoria(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mr-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="lenguaje" className="block font-bold">Lenguaje</label>
                            <input type="text" name="lenguaje" id="lenguaje"
                                className="w-full border p-2"
                                value={lenguaje} onChange={(e) => setLenguaje(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between mr-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="notasExploracion" className="block font-bold">Notas de exploracion:</label>
                            <input type="text" name="notasExploracion" id="notasExploracion"
                                className="w-full border p-2"
                                value={notaExploracion} onChange={(e) => setNotaExploracion(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
                )
            }
        </>
    )
}

export default ExploracionPsiconeurologica