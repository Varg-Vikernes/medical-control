import React from "react";

const Identificacion = () => {
    return (
        <form action="" className="w-full p-4">
            <div className="flex justify-between mb-4">
                <div className="flex-1 mr-6">
                    <label htmlFor="Nombre" className="block font-bold">Nombre Completo</label>
                    <input type="text" className="w-full border p-2" id="Nombre" />
                </div>
                <div className="flex-1 mr-3">
                    <label htmlFor="edad" className="block font-bold">Edad</label>
                    <input type="text" className="w-full border p-2" id="edad" />
                </div>
                <div className="flex-1 mr-3">
                    <label htmlFor="sexo" className="block font-bold">Sexo</label>
                    <input type="text" className="w-full border p-2" id="sexo" />
                </div>
                <div className="flex-1 mr-3">
                    <label htmlFor="edoCivil" className="block font-bold">Edo. Civil:</label>
                    <input type="text" className="w-full border p-2" id="edoCivil" />
                </div>
                <div className="flex-1 mr-3">
                    <label htmlFor="turno" className="block font-bold">Tuno:</label>
                    <input type="text" className="w-full border p-2" id="turno" />
                </div>
            </div>
        </form>
    );
}
export default Identificacion;