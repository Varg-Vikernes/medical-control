import React, { useState } from "react";


const Cara = () => {
    const [oidos, setOidos] = useState('');
    const [naris, setNaris] = useState('');
    const [boca, setBoca] = useState('');
    const [conductoAudi, setConductoAudi] = useState('')
    const [tabique, setTabique] = useState('');
    const [mucosa, setMucosa] = useState('');
    const [timpano, setTimpano] = useState('');
    const [cornetes, setCornetes] = useState('');
    const [ensias, setEnsias] = useState('');
    const [audicion, setAudicion] = useState('');
    const [mucosas, setMucosas] = useState('');
    const [dientes, setDientes] = useState('');
    const [secreciones, setSecreciones] = useState('');
    const [lengua, setLenguna] = useState('');
    const [faringe, setFaringe] = useState('');
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

                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="timpano" className="font-bold block"> Timpano:</label>
                        <input type="text" name="timpano" id="timpano"
                            className="w-full border p-2"
                            value={timpano} onChange={(e) => setTimpano(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="cornetes" className="font-bold block">Cornetes:</label>
                        <input type="text" name="cornetes" id="cornetes"
                            className="w-full border p-2"
                            value={cornetes} onChange={(e) => setCornetes(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="encias" className="font-bold block"> Encias:</label>
                        <input type="text" name="encias" id="encias"
                            className="w-full border p-2"
                            value={ensias} onChange={(e) => setEnsias(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="audicion" className="block font-bold">Audicion</label>
                        <input type="text" name="audicion" id="audicion"
                            className="w-full border p-2"
                            value={audicion} onChange={(e) => setAudicion(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="mucosa" className="block font-bold">Mucosa:</label>
                        <input type="text" name="mucosa" id="mucosa"
                            className="w-full border p-2"
                            value={mucosas} onChange={(e) => setMucosas}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="dientes" className="block font-bold">Dientes: </label>
                        <input type="text" name="dientes" id="dientes"
                            className="w-full border p-2"
                            value={dientes} onChange={(e) => setDientes(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="secreciones" className="font-bold block">Secreciones:</label>
                        <input type="text" name="secreciones" id="secreciones"
                            className="w-full border p-2"
                            value={secreciones} onChange={(e) => setSecreciones(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="lengua" className="font-bold block">Lengua:</label>
                        <input type="text" name="lengua" id="lengua"
                            className="w-full border p-2"
                            value={lengua} onChange={(e) => setLenguna(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="faringe" className="block font-bold">Faringe:</label>
                        <input type="text" name="faringe" id="faringe"
                            className="w-full border p-2"
                            value={faringe} onChange={(e) => setFaringe(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Cara;