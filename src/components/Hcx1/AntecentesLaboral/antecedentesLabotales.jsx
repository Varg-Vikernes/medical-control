import React, { useState } from "react";

const AntecedentesLaborales = () => {
    const [lugaresLaborlaes, setLugaresLaborales] = useState('');
    const [lugarDesempeño, setLugarDesempeño] = useState('');
    const [tipoAgente, setTipoAgente] = useState('');
    const [productosElabora, setProductosElabora] = useState('');
    const [horasDiariasT, setHorasDiariasT] = useState('');
    const [diasTrabajados, setDiasTrabajados] = useState('');
    const [descansosFijos, setDescansosFijos] = useState('');
    const [turno, setTurno] = useState('');

    return (
        <form action="" className="w-full p-4">

            <h1 className="text-x1 font-sans mb-4"> Antecedentes Laborales. </h1>
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

        </form>
    );
}

export default AntecedentesLaborales;