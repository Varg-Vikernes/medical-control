import React, { useState } from "react";

const ExploracionF = () => {

    const [peso, setPeso] = useState('');
    const [talla, setTalla] = useState('');
    const [temp, setTemp] = useState('');
    const [pulso, setPulso] = useState('');
    const [fc, setFc] = useState('');
    const [integridadCorp, setIntegridadCorp] = useState('');
    const [especificar, setEspecificar] = useState('');
    const [marcha, setMarcha] = useState('');
    const [movimientoAnorm, setMovimientoAnorm] = useState('');
    const [especificarAnorm, setEspecificacionAnorm] = useState('');

    return (
        <>
            <form action="" className="w-full p-4">

                <h1 className="text-xl  font-sans mb-4">Padecimiento Actual</h1>
                <h1 className="text-xl  font-sans mb-4">Exploracion fisica</h1>
                <div className="flex justify-betwen mb-4">

                    <div className="flex-1 mr-4">
                        <label htmlFor="Peso" className="block font-bold">
                            Peso:
                        </label>
                        <input type="text" name="Peso" id="Peso"
                            className="w-full border p-2"
                            value={peso} onChange={(e) => setPeso(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="Talla" className="block font-bold">
                            Talla:
                        </label>
                        <input type="text" name="Talla" id="Talla" required
                            className="w-full border p-2"
                            value={talla} onChange={(e) => setTalla(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="Temp" className="block font-bold">
                            Temp:
                        </label>
                        <input type="text" name="Temp" id="Temp" required
                            className="w-full border p-2"
                            value={temp} onChange={(e) => setTemp(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="Pulso" className="block font-bold">
                            Pulso:
                        </label>
                        <input type="text" name="Pulso" id="Pulso" required
                            className="w-full border p-2 "
                            value={pulso} onChange={(e) => setPulso(e.target.value)}
                        />
                    </div>
                    <div className="flex1 mr-4">
                        <label htmlFor="Fc" className="block font-bold">
                            FC:
                        </label>
                        <input type="text" name="Fc" id="Fc" required
                            className="w-full border p-2"
                            value={fc} onChange={(e) => setFc(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="integridadCorp" className="block font-bold">
                            Integridad corporal:
                        </label>
                        <input type="text" name="integridadCorp" id="integridadCorp"
                            className="w-full border p-2"
                            value={integridadCorp} onChange={(e) => setIntegridadCorp(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="especificacionInt" className="block font-bold">
                            Especificacion:
                        </label>
                        <input type="text" name="especificacionInt" id="especificacionInt"
                            className="w-full border p-2"
                            value={especificar} onChange={(e) => setEspecificar(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="Marcha" className="block font-bold">
                            Marcha:
                        </label>
                        <input type="text" name="Marcha" id="Marcha"
                            className="w-full border p-2"
                            value={marcha} onChange={(e) => setMarcha(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="movimientoAnorm" className="block font-bold">
                            Movimiento Anormal:
                        </label>
                        <input type="text" name="movimientoAnorm" id="movimientoAnorm"
                            className="w-full border p-2"
                            value={movimientoAnorm} onChange={(e) => setMovimientoAnorm(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="especificacionAnorm" className="block font-bold">
                            Especificacion:
                        </label>
                        <input type="text" name="especificacionAnorm" id="especificacionAnorm"
                            className="w-full border p-2"
                            value={especificarAnorm} onChange={(e) => setEspecificacionAnorm(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </>
    );
}

export default ExploracionF