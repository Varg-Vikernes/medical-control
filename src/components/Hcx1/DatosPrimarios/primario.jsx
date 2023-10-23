import React from "react";

const Primario = () => {
    return (
        <>
            <form action="" className="w-full p-4">
                <div className="flex justify-between mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="examenMedico" className="block font-bold">Examen Medico:</label>
                        <input type="text" className="w-full border p-2" id="examenMedico" />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="ingresos" className="block font-bold">Ingreso:</label>
                        <input type="text" className="w-full border p-2" id="ingreso" />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="periodo" className="block font-bold">Periodo:</label>
                        <input type="text" className="w-full border p-2" id="periodo" />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="otros" className="block font-bold">Otros:</label>
                        <input type="text" className="w-full border p-2" id="otros" />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="fecha" className="block font-bold">Fecha:</label>
                        <input type="text" className="w-full border p-2" id="fecha" />
                    </div>
                </div>
            </form>
        </>
    );
}

export default Primario;