import React, { useState } from "react";


const Identificacion = () => {
    const [nombre, setNombre] = useState('');
    const [sexo, setSexo] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('');
    const [turno, setTurno] = useState('');

    return (
        <form action="" className="w-full p-4">
            <h1 className="text-xl  font-sans mb-4">Ficha de identificacion</h1>
            <div className="flex justify-between mb-4">

                <div className="flex-1 mr-4">
                    <label htmlFor="nombre" className="block font-bold">Nombre:</label>
                    <input type="text" name="nombre" id="nombre"
                        className="w-full border p-2 w-250" value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="sexo" className="block font-bold">Sexo</label>
                    <input type="text" name="nombre" id="sexo"
                        className="w-full border p-2 w-60" value={sexo}
                        onChange={(e) => setSexo(e.target.value)}
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="edoCivil" className="block  font-bold">Estado civil</label>
                    <select name="edoCivil" id="edoCivil"
                        className="w-full border p-2"
                        value={estadoCivil}
                        onChange={(e) => setEstadoCivil(e.target.value)}
                    >
                        <option value="">Selecciona una opcion</option>
                        <option value="soltero">Soltero</option>
                        <option value="casado">Casado</option>
                        <option value="divorciado">divorciado</option>
                    </select>
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="turno" className="block font-bold">Turno: </label>
                    <div>
                        <label htmlFor="matutino" className="mr-2">
                            <input type="radio" name="turno"
                                value="matutino" checked={turno === 'matutino'}
                                onChange={(e) => setTurno(e.target.value)}
                            />
                            Matutino
                        </label>
                        <label htmlFor="matutino" className="mr-2">
                            <input type="radio" name="turno"
                                value="vespertino" checked={turno === 'vespertino'}
                                onChange={(e) => setTurno(e.target.value)}
                            />
                            Vespertino
                        </label>
                    </div>
                </div>
            </div >
        </form >
    );
}
export default Identificacion;