import React, { useState } from "react";

const AntecedentesLaborales = ({ onSubmit }) => {
    const [lugaresLaborlaes, setLugaresLaborales] = useState('');
    const [lugarDesempeño, setLugarDesempeño] = useState('');
    const [tipoAgente, setTipoAgente] = useState('');
    const [productosElabora, setProductosElabora] = useState('');
    const [horasDiariasT, setHorasDiariasT] = useState('');
    const [diasTrabajados, setDiasTrabajados] = useState('');
    const [descansosFijos, setDescansosFijos] = useState('');
    const [turno, setTurno] = useState('');
    const [puestoActividad, setPuestoActividad] = useState('');
    const [accidentesTrabajo, setAccidentesTrabajo] = useState('');
    const [incapacidad, setIncapacidad] = useState('');
    const [examenLaboratorio, setExamenLaboratorio] = useState('');
    const [actividadesExtra, setActividadesExtra] = useState('');
    const [otros, setOtros] = useState('');
    const [analisisErgonomico, setAnalisisErgonomico] = useState('');
    const [cuales, setCuales] = useState('');

    //Recopilar la informacion de los datos
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            lugaresLaborlaes, lugarDesempeño, tipoAgente, productosElabora
            , horasDiariasT, diasTrabajados, descansosFijos, turno, puestoActividad
            , accidentesTrabajo, incapacidad, examenLaboratorio, actividadesExtra
            , otros, analisisErgonomico, cuales
        })
    }

    const [mostrarOcultar , setMostrarOcultar] = useState(true)

    const toogleMO = () =>{
        setMostrarOcultar(!mostrarOcultar)
    }

    return (
        <>
            <button onClick={toogleMO} className="cta"> 
                <span><b>{mostrarOcultar ? "introduzca los datos" : "Antecedentes Laborales"}</b></span>
            </button>
            {
                mostrarOcultar &&(
                    <form action="" onSubmit={handleSubmit} className="Form-Antecedentes w-full p-4">
                    <div className="border rounded-lg p-8 shadow-md ">
                        <h1 className="text-xl  font-sans mb-4 title"> Antecedentes Laborales. </h1>
                        {/* FORMULARIO ANTECEDENTES LABORALES */}
                        <div className="flex-1 mr-4">
                            <label htmlFor="lugaresLaborales" className="block font-bold">
                                Lugares donde ha laborado:
                            </label>
                            <input type="text" name="lugaresLaborales" id="lugaresLaborales"
                                className="w-full border p-2 w-full"
                                value={lugaresLaborlaes}
                                onChange={(e) => setLugaresLaborales(e.target.value)}
                            />
                        </div>
        
                        <div className="flex-1 mr-4">
                            <label htmlFor="lugarDesempeño" className="block font-bold">
                                Labores que desempeño y cuanto tiempo:
                            </label>
                            <input type="text" name="lugarDesempeño" id="lugarDesempeño"
                                className="w-full border p-2 w-full"
                                value={lugarDesempeño}
                                onChange={(e) => setLugarDesempeño(e.target.value)}
                            />
                        </div>
        
                        <div className="flex-1 mr-4">
                            <label htmlFor="tipoAgente" className="block font-bold">
                                Aque tipo de agentes se exponia:
                            </label>
                            <input type="text" name="tipoAgente" id="tipoAgente"
                                className="w-full border p-2 w-full"
                                value={tipoAgente}
                                onChange={(e) => setTipoAgente(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-betwen mb-4">
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="productosElabora" className="block font-bold">
                                    Productos que elabora:
                                </label>
                                <input type="text" name="productosElabora" id="procutosElabora"
                                    className="w-full border p-2"
                                    value={productosElabora}
                                    onChange={(e) => setProductosElabora(e.target.value)}
                                />
                            </div>
        
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="horasDiariasT" className="block font-bold">
                                    Horas diarias de Trabajo:
                                </label>
                                <input type="text" name="horasDiariasT" id="horasDiariasT"
                                    className="w-full border p-2"
                                    value={horasDiariasT}
                                    onChange={(e) => setHorasDiariasT(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-betwen mb-4">
        
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="diasTrabajados" className="block font-bold">
                                    Dias ala semana trabajados:
                                </label>
                                <input type="text" name="diasTrabajados" id="diasTrabajados"
                                    className="w-full border p-2"
                                    value={diasTrabajados}
                                    onChange={(e) => setDiasTrabajados(e.target.value)}
                                />
                            </div>
        
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="descansosFijos" className="block font-bold">
                                    Descansos fijos o rolados:
                                </label>
                                <input type="text" name="descansosFijos" id="descansosFijos"
                                    className="w-full border p-2"
                                    value={descansosFijos}
                                    onChange={(e) => setDescansosFijos(e.target.value)}
                                />
                            </div>
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="turno" className="block font-bold">
                                    Turno:
                                </label>
                                <input type="text" name="turno" id="turno"
                                    className="w-full border p-2"
                                    value={turno}
                                    onChange={(e) => setTurno(e.target.value)}
                                />
                            </div>
                        </div>
        
                        <div className="flex justify-betwen mb-4">
        
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="puestoActividad" className="block font-bold">
                                    Puesto o actividad:
                                </label>
                                <input type="text" name="puestoActividad" id="puestoActividad"
                                    className="w-full border p-2"
                                    value={puestoActividad}
                                    onChange={(e) => setPuestoActividad(e.target.value)}
                                />
                            </div>
        
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="accidentesTrabajo" className="block font-bold">
                                    Accidentes de trabajo:
                                </label>
                                <input type="text" name="accidentesTrabajo" id="accidentesTrabajo"
                                    className="w-full border p-2"
                                    value={accidentesTrabajo}
                                    onChange={(e) => setAccidentesTrabajo(e.target.value)}
                                />
                            </div>
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="Incapacidad" className="block font-bold">
                                    Incapacidad:
                                </label>
                                <input type="text" name="Incapacidad" id="Incapacidad"
                                    className="w-full border p-2"
                                    value={incapacidad}
                                    onChange={(e) => setIncapacidad(e.target.value)}
                                />
                            </div>
                        </div>
        
                        <div className="flex justify-betwen mb-4">
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="examenLaboratorio" className="block font-bold">
                                    Sele practico examen de laboratorio y RX:
                                </label>
                                <input type="text" name="examenLaboratorio" id="examenLaboratorio"
                                    className="w-full border p-2"
                                    value={examenLaboratorio}
                                    onChange={(e) => setExamenLaboratorio(e.target.value)}
                                />
                            </div>
        
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="otros" className="block font-bold">
                                    Otros:                    </label>
                                <input type="text" name="otros" id="otros"
                                    className="w-full border p-2"
                                    value={otros}
                                    onChange={(e) => setOtros(e.target.value)}
                                />
                            </div>
                        </div>
        
                        <div className="flex justify-betwen mb-4">
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="actividadesExtra" className="block font-bold">
                                    Tienes actividades extralaborales:
                                </label>
                                <input type="text" name="actividadesExtra" id="actividadesExtra"
                                    className="w-full border p-2"
                                    value={actividadesExtra}
                                    onChange={(e) => setActividadesExtra(e.target.value)}
                                />
                            </div>
        
                            <div className="flex-1 mr-4 ">
                                <label htmlFor="cuales" className="block font-bold">
                                    Cuales:
                                </label>
                                <input type="text" name="otros" id="otros"
                                    className="w-full border p-2"
                                    value={cuales}
                                    onChange={(e) => setCuales(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex-1 mr-4">
                            <label htmlFor="analisisErgonomico" className="block font-bold">
                                Requiere analisis ergonomico:
                            </label>
                            <input type="text" name="analisisErgonomico" id="analisisErgonomico"
                                className="w-full border p-2 w-full"
                                value={analisisErgonomico}
                                onChange={(e) => setAnalisisErgonomico(e.target.value)}
                            />
                        </div>
                        <button type="submit">Enviar Datos</button>
                    </div>
                </form>        
                )
            }
        </>
    );
}

export default AntecedentesLaborales;