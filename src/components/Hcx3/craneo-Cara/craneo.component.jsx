import React, { useState } from "react";


const Cara = () => {
    const [oidos, setOidos] = useState('');
    const [naris, setNaris] = useState('');
    const [boca, setBoca] = useState('');
    const [conductoAudi, setConductoAudi] = useState('')
    const [tabique, setTabique] = useState('');
    const [mucosa, setMucosa] = useState('');


    return (
        <>
            <form action="" className="w-full p-4">
                <h1 className="block font-bold">Craneo Cara</h1>

                <div className="flex justify-betwen mr-4">

                    <div className="flex-1 mr-4">
                        <label htmlFor="oidos" className="block font-bold mb-1">Oidos</label>
                        <input type="text" name="oidos" id="oidos" required
                            className="w-full border p-2"
                            value={oidos} onChange={(e) => setOidos(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="Naris" className="font-bold block mb-1">Naris:</label>
                        <input type="text" name="Naris" id="Naris"
                            className="w-full border p-2"
                            value={naris} onChange={(e) => setNaris(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="boca" className="block font-bold mb-1">Boca</label>
                        <input type="text" name="boca" id="boca"
                            className="w-full border p-2"
                            value={boca} onChange={(e) => setBoca(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="conductoAudi" className="block font-bold">Conducto auditivo</label>
                        <input type="text" name="ConductoAudi" id="ConductoAudi"
                            className="w-full border p-2"
                            value={conductoAudi} onChange={(e) => setConductoAudi(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="Tabique" className="block font-bold">Tabique</label>
                        <input type="text" name="Tabique" id="Tabique"
                            className="w-full border p-2"
                            value={tabique} onChange={(e) => setTabique(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="Mucosa" className="block font-bold">Mucosa</label>
                        <input type="text" name="Mucosa" id="Mucosa"
                            className="w-full border p-2"
                            value={mucosa} onChange={(e) => setMucosa(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Cara;