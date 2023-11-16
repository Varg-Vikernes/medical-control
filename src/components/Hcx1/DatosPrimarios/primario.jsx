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
    return (
        <>

            <form action="" className="w-full p-4" onSubmit={handleForSubmit}>
                <div className="border rounded-lg p-8 shadow-md bg-white">
                    <div className="flex justify-between mb-4">
                        <div className="flex-1 mr-4">
                            <label htmlFor="examenMedico" className="block font-bold">Examen Medico:</label>
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
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </>
    );
}

export default Primario;