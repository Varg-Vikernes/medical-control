import { useState } from "react";
import React from "react";

export function Laboratorio() {
    const [bh, setBh] = useState('');
    const [qs, setQs] = useState('');
    const [grupoRH, setGruporh] = useState('');
    const [ego, setEgo] = useState('');
    const [audiometria, setAudiometria] = useState('');
    const [rxTorax, setTorax] = useState('');
    const [rxColumna, setRxcolumna] = useState('');
    const [exudad, setExusado] = useState('');
    const [copro, setCopro] = useState('');
    return (
        <>
            <form action="" className="w-full p-2">
                <h1 className="text-xl  font-sans mb-4">  EXAMENES DE LABORATIORIO Y GABINETE</h1>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="bh" className="block font-bold">BH:</label>
                        <input type="text" name="bh" id="bh"
                            className="w-full border p-2"
                            value={bh} onChange={(e) => setBh(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="qs" className="block font-bold">QS:</label>
                        <input type="text" name="qs" id="qs"
                            className="w-full border p-2"
                            value={qs} onChange={(e) => setQs(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="groupRH" className="block font-bold">GRUPO Y RH</label>
                        <input type="text" name="groupRH" id="groupRH"
                            className="w-full border p-2"
                            value={grupoRH} onChange={(e) => setGruporh(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="ego" className="block font-bold">EGO:</label>
                        <input type="text" name="ego" id="ego"
                            className="w-full border p-2"
                            value={ego} onChange={(e) => setEgo(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="audiometria" className="block font-bold">AUDIOMETRIA:</label>
                        <input type="text" name="audiometria" id="audiometria"
                            className="w-full border p-2"
                            value={audiometria} onChange={(e) => setAudiometria(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="torax" className="block font-bold">RX TORAX:</label>
                        <input type="text" name="torax" id="torax"
                            className="w-full border p-2"
                            value={rxTorax} onChange={(e) => setTorax(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="rxcolumna" className="block font-bold">RX COLUMNA:</label>
                        <input type="text" name="rxcolumna" id="rxcolumna"
                            className="w-full border p-2"
                            value={rxColumna} onChange={(e) => setRxcolumna(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="farinmgeo" className="block font-bold">EXUDADO FARINGEO:</label>
                        <input type="text" name="farinmgeo" id="farinmgeo"
                            className="w-full border p-2"
                            value={exudad} onChange={(e) => setExusado(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="copro" className="block font-bold">COPRO:</label>
                        <input type="text" name="copro" id="copro"
                            className="w-full border p-2"
                            value={copro} onChange={(e) => setCopro(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}