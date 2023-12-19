import React, { useState } from "react";

const Primario = ({ onSubmit }) => {
    const [examenMedico, setExamenMedico] = useState('');
    const [ingresos, setIngresos] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [otros, setOtros] = useState('');
    const [fecha, setFecha] = useState('');

    const handleForSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            examenMedico, ingresos, periodo, otros, fecha
        });
    }

    // estado para manejar la visibilidad del div

    const [ocultar, setOcultar] = useState(false)

    const toogleDiv = () => {
        setOcultar(!ocultar)
    }
    return (
        <>
            <br />
            <button onClick={toogleDiv} className="cta">
                <span>  <b>  {ocultar ? 'Introduzca los datos' : 'Datos de identificacion'} </b></span>
            </button>
            {ocultar && (

                <form action="" className="w-full p-4" onSubmit={handleForSubmit}>
                    <div class="seven">
                        <h1>Datos de identificacion </h1>
                    </div>
                    <div className="Form border rounded-lg p-8 shadow-md ">
                        <div className="flex justify-between ">


                            <div className="flex-1 mr-4 input-group">

                                <label htmlFor="examenMedico" className="block font-bold " >Examen Medico:</label>

                                <input type="text" className="w-full border p-2" id="examenMedico"
                                    value={examenMedico} onChange={(e) => setExamenMedico(e.target.value)}
                                />
                            </div>
                            <div className="flex-1 mr-4">
                                <label htmlFor="ingresos" className="block font-bold">Ingreso:</label>
                                <input type="text" className="w-full border p-2" id="ingreso"
                                    value={ingresos} onChange={(e) => setIngresos(e.target.value)}
                                />
                            </div>
                            <div className="flex-1 mr-4">
                                <label htmlFor="periodo" className="block font-bold">Periodo:</label>
                                <input type="text" className="w-full border p-2" id="periodo"
                                    value={periodo} onChange={(e) => setPeriodo(e.target.value)}
                                />
                            </div>
                            <div className="flex-1 mr-4">
                                <label htmlFor="otros" className="block font-bold">Otros:</label>
                                <input type="text" className="w-full border p-2" id="otros"
                                    value={otros} onChange={(e) => setOtros(e.target.value)}
                                />
                            </div>
                            <div className="flex-1 mr-4">
                                <label htmlFor="fecha" className="block font-bold">Fecha:</label>
                                <input type="text" className="w-full border p-2" id="fecha"
                                    value={fecha} onChange={(e) => setFecha(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="buton">
                            <button type="submit" className="button">Enviar</button>
                        </div>
                    </div>
                </form>
            )}

        </>
    );
}

export default Primario;