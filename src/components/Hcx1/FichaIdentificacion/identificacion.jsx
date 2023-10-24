import React, { useState } from "react";


const Identificacion = () => {
    const [nombre, setNombre] = useState('');
    const [sexo, setSexo] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('');
    const [turno, setTurno] = useState('');
    const [lugFecha, setLugFecha] = useState('');
    const [planta, setPlanta] = useState('');
    const [tipoContrato, setTipoContrato] = useState('');
    const [dpto, setDpto] = useState('');
    const [nombreSup, setNombreSup] = useState('');
    const [antiguedadPlanta, setAntiguedadPlanta] = useState('');
    const [antiguedadPuesto, setAntiguedadPuesto] = useState('');
    const [puestTrabajo, setPuestoTrabajo] = useState('');
    const [domicilio, setDomicilio] = useState('');
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
            <div className="flex-1 mr-4">
                <label htmlFor="" className="block font-bold">
                    Lugar y fecha de nacimiento:
                </label>
                <input type="text" id="lugar" name="lugar"
                    className="w-full border p-2 w-full"
                    value={lugFecha}
                    onChange={(e) => setLugFecha(e.target.value)}
                />
            </div>
            <div className="flex justify-between mb-4">
                <div className="flex-1 mr-4">
                    <label htmlFor="planta" className="block font-bold">
                        Planta:
                    </label>
                    <input type="text" name="planta" id="planta"
                        className="w-full border p-2" value={planta}
                        onChange={(e) => setPlanta(e.target.value)}
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="tipoContrato" className="block font-bold">
                        Tipo de contrato:
                    </label>
                    <input type="text" name="contrato" id="contrato"
                        className="w-full border p-2 " value={tipoContrato}
                        onChange={(e) => setTipoContrato(e.target.value)}
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="dpto" className="block font-bold">
                        Departamento:
                    </label>
                    <input type="text" name="dpto" id="dpto"
                        className="w-full border p-2" value={dpto}
                        onChange={(e) => setDpto(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex justify-between mb-4">
                <div className="flex-1 mr-4">
                    <label htmlFor="NomnbreSupervisor" className="block font-bold">
                        Nombre del supervisor:
                    </label>
                    <input type="text" name="NombreSupervisor" id="NombreSupervisor"
                        className="w-full border p-2" value={nombreSup}
                        onChange={(e) => setNombreSup(e.target.value)}
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="antiguedadPlanta" className="block font-bold">
                        Antiguedad de planta
                    </label>
                    <input type="text" name="antiguedadPlanta" id="antiguedadPlanta"
                        className="w-full border p-2" value={antiguedadPlanta}
                        onChange={(e) => setAntiguedadPlanta(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex justify-between mb-4">
                <div className="flex-1 mr-4">
                    <label htmlFor="antiguedadPuesto" className="block font-bold">
                        Antiguedad del puesto:
                    </label>
                    <input type="text" name="antiguedadPuesto" id="antiguedadPuesto"
                        className="w-full border p-2" value={antiguedadPuesto}
                        onChange={(e) => setAntiguedadPuesto(e.target.value)}
                    />
                </div>
                <div className="flex-1 mr-4">
                    <label htmlFor="puestoTrabajo" className="block font-bold">
                        Puesto del trabajo:
                    </label>
                    <input type="text" name="puestoTrabajo" id="puestoTrabajo"
                        className="w-full border p-2" value={puestTrabajo}
                        onChange={(e) => setPuestoTrabajo(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex-1 mr-4">
                <label htmlFor="domicilioActual" className="block font-bold">
                    Domicilio actual:
                </label>
                <input type="text" id="domicilioActual" name="domicilioActual"
                    className="w-full border p-2 w-full"
                    value={domicilio}
                    onChange={(e) => setDomicilio(e.target.value)}
                />
            </div>
        </form >
    );
}
export default Identificacion;