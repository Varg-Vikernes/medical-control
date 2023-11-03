import React, { useState } from "react";

const Torax = () => {
    const [piel, setPiel] = useState('');
    const [mamasPezones, setMamasPezones] = useState('');
    const [movimientoRespiratorio, setMovimientoRespiratorio] = useState('');
    const [campoPulmonar, setCampoPulmonar] = useState('');
    const [ritmoCardiaco, setRitmoCardiaco] = useState('');
    const [intensidad, setIntencidad] = useState('');
    const [caracteristicasLatido, setCaracteristicasLatido] = useState('');
    const [notasExploracion, setNotasExploracion] = useState('');

    return (
        <>
            <form action="" className="w-full p-4">
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="" className="block font-bold"></label>
                        <input type="text" name="" id=""
                            className="w-full border p-2"
                            value={ } onChange={(e) => set(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="" className="block font-bold"></label>
                        <input type="text" name="" id=""
                            className="w-full border p-2"
                            value={ } onChange={(e) => set(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="" className="block font-bold"></label>
                        <input type="text" name="" id=""
                            className="w-full border p-2"
                            value={ } onChange={(e) => set(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="" className="block font-bold"></label>
                        <input type="text" name="" id=""
                            className="w-full border p-2"
                            value={ } onChange={(e) => set(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="" className="block font-bold"></label>
                        <input type="text" name="" id=""
                            className="w-full border p-2"
                            value={ } onChange={(e) => set(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="" className="block font-bold"></label>
                        <input type="text" name="" id=""
                            className="w-full border p-2"
                            value={ } onChange={(e) => set(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="" className="block font-bold"></label>
                        <input type="text" name="" id=""
                            className="w-full border p-2"
                            value={ } onChange={(e) => set(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="" className="block font-bold"></label>
                        <input type="text" name="" id=""
                            className="w-full border p-2"
                            value={ } onChange={(e) => set(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}
export default Torax;