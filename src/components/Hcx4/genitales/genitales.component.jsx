import React from "react";
import { useState } from "react";

const Genitales = () => {
    const [forma, setForma] = useState('');
    const [piel, setPiel] = useState('');
    const [masa, setMasa] = useState('');
    const [ganglios, setGanglios] = useState('');
    const [dolor, setDolor] = useState('');
    return (
        <>
            <form action="" className="w-full p-4">
                <h1 className="text-xl  font-sans mb-4">Genitales</h1>

                <div className="flex justify-between mr-4">

                    <div className="flex-1 mr-4">
                        <label htmlFor="forma" className="block font-bold">Forma:</label>
                        <input type="text" name="forma" id="forma"
                            className="w-full border p-2"
                            value={forma} onChange={(e) => setForma(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="piel" className="block font-bold">Piel :</label>
                        <input type="text" name="piel" id="piel"
                            className="w-full border p-2"
                            value={piel} onChange={(e) => setPiel(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="masa" className="block font-bold">Masa :</label>
                        <input type="text" name="masa" id="masa"
                            className="w-full border p-2"
                            value={masa} onChange={(e) => setMasa(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="ganglios" className="block font-bold">Gangliod :</label>
                        <input type="text" name="ganglios" id="ganglios"
                            className="w-full border p-2"
                            value={ganglios} onChange={(e) => setGanglios(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="dolor" className="block font-bold">Dolor</label>
                        <input type="text" name="dolor" id="dolor"
                            className="w-full border p-2"
                            value={dolor} onChange={(e) => setDolor(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}
export default Genitales;