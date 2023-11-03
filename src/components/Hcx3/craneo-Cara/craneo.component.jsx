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
    const [ojos, setOjos] = useState('');
    const [agudesVisual, setAgudesVisual] = useState('');
    const [amigdalas, setAmigdalas] = useState('');
    const [parpados, setParpados] = useState('');
    const [ojoderecho, setOjoDerecho] = useState('');
    const [anexo, setAnexo] = useState('');
    const [ojoizquierdo, setOjoIzquierdo] = useState('');
    const [conjuntiva, setConjuntiva] = useState('');
    const [esclerotica, setEsclerotica] = useState('');
    const [odConCorrecion, setOdconCorrecion] = useState('');
    const [odontograma, setOdontograma] = useState('');
    const [camaraAnterior, setCamaraAnterior] = useState('');
    const [oiconCorreccion, setOiconCorreccion] = useState('');
    const [falta, setFalta] = useState('');
    const [fondoDeOjos, setFondoDeOjos] = useState('');
    const [obturada, setObturado] = useState('');
    const [pupilas, setPupilas] = useState('');
    const [mmmppSuperior, setMmmppSuperior] = useState('');
    const [reflejosOculares, setReflejosOculares] = useState('');
    const [mmmppInferior, setMmmppInferior] = useState('');

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
                <div className="flex justify-betwen mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="ojos" className="font-bold block">Ojos:</label>
                        <input type="text" name="ojos" id="ojos"
                            className="w-full border p-2"
                            value={ojos} onChange={(e) => setOjos(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="agudesVisual" className="font-bold block">Agudez Visual :</label>
                        <input type="text" name="agudesVisual" id="agudesVisual"
                            className="w-full border p-2"
                            value={agudesVisual} onChange={(e) => setAgudesVisual(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="amigdalas" className="font-bold block">Amigdalas:</label>
                        <input type="text" name="amigdalas" id="amigdalas"
                            className="w-full border p-2"
                            value={amigdalas} onChange={(e) => setAmigdalas(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="parpados" className="font-bold block">Parpados :</label>
                        <input type="text" name="parpados" id="parpados"
                            className="w-full border p-2"
                            value={parpados} onChange={(e) => setParpados(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="ojoderecho" className="font-bold block">Ojo derecho:</label>
                        <input type="text" name="ojoderecho" id="ojoderecho"
                            className="w-full border p-2"
                            value={ojoderecho} onChange={(e) => setOjoDerecho(e.target.value)}
                        />
                    </div>

                </div>
                <div className="flex justify-betwen mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="anexo" className="font-bold block">Anexo:</label>
                        <input type="text" name="anexo" id="anexo"
                            className="w-full border p-2"
                            value={anexo} onChange={(e) => setAnexo(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="ojoizquierdo" className="font-bold block">Ojo izquierdo</label>
                        <input type="text" name="ojoizquierdo" id="ojoizquierdo"
                            className="w-full border p-2"
                            value={ojoizquierdo} onChange={(e) => setOjoIzquierdo(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="conjuntiva" className="block font-bold">Conjuntiva</label>
                        <input type="text" name="conjuntiva" id="conjuntiva"
                            className="w-full border p-2"
                            value={conjuntiva} onChange={(e) => setConjuntiva(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="esclerotica" className="block font-bold">Esclerotica</label>
                        <input type="text" name="esclerotica" id="esclerotica"
                            className="w-full border p-2"
                            value={esclerotica} onChange={(e) => setEsclerotica(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="odCorreccion" className="block font-bold">Od con correcion</label>
                        <input type="text" name="odCorreccion" id="odCorreccion"
                            className="w-full border p-2"
                            value={odConCorrecion} onChange={(e) => setOdconCorrecion(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="odontograma" className="block font-bold">Odontograma:</label>
                        <input type="text" name="odontograma" id="odontograma"
                            className="w-full border p-2"
                            value={odontograma} onChange={(e) => setOdontograma(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="camaraAnterior" className="block font-bold">Camaras anterior</label>
                        <input type="text" name="camaraAnterior" id="camaraAnterior"
                            className="w-full border p-2"
                            value={camaraAnterior} onChange={(e) => setCamaraAnterior(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="oiConCorrecion" className="block font-bold">Oi con correcion</label>
                        <input type="text" name="oiConCorrecion" id="oiConCorrecion"
                            className="w-full border p-2"
                            value={oiconCorreccion} onChange={(e) => setOiconCorreccion(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="falta" className="block font-bold">Falta:</label>
                        <input type="text" name="falta" id="falta"
                            className="w-full border p-2"
                            value={falta} onChange={(e) => setFalta(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="fondoOjo" className="block font-bold">Fondo de ojo:</label>
                        <input type="text" name="fondoOjo" id="fondoOjo"
                            className="w-full border p-2"
                            value={fondoDeOjos} onChange={(e) => setFondoDeOjos(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="obturadora" className="block font-bold">Obturadora</label>
                        <input type="text" name="obturadora" id="obturadora"
                            className="w-full border p-2"
                            value={obturada} onChange={(e) => setObturado(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="pupilas" className="block font-bold">Pupilas:</label>
                        <input type="text" name="pupilas" id="pupilas"
                            className="w-full border p-2"
                            value={pupilas} onChange={(e) => setPupilas(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="mmmppSuperior" className="block font-bold">MMMPPCIIIICPPMMM Superior</label>
                        <input type="text" name="mmmppSuperior" id="mmmppSuperior"
                            className="w-full border p-2"
                            value={mmmppSuperior} onChange={(e) => setMmmppSuperior(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mr-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="reflejoOcular" className="block font-bold">Reflejos oculares</label>
                        <input type="text" name="reflejoOcular" id="reflejoOcular"
                            className="w-full border p-2"
                            value={reflejosOculares} onChange={(e) => setReflejosOculares(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="mmmppInferior" className="block font-bold">MMMPPCIIIICPPMMM Inferior</label>
                        <input type="text" name="mmmppInferior" id="mmmppInferior"
                            className="w-full border p-2"
                            value={mmmppInferior} onChange={(e) => setMmmppInferior(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Cara;