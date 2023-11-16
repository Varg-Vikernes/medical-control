import React, { useState } from "react";

const PersonalPatologico = () => {
    const [habitacion, setHabitacion] = useState('');
    const [habitadaPor, setHabitadaPor] = useState('');
    const [noHabitacion, setNoHabitacion] = useState('');
    const [animalesEnCasa, setAnimalesEnCasa] = useState('');
    const [tabaquismo, setTabaquismo] = useState('');
    const { noAños, setNoAños } = useState('');
    const [cantidadPorDia, setCantidadPorDia] = useState('');
    const [alcoholismo, setAlcoholismo] = useState('');
    const [noAñosAlcohol, setNoAñosAlcohol] = useState('');
    const [frecuencia, setFrecuencia] = useState('');
    const [toxicomania, setToxicomania] = useState('');
    const [higiene, setHigiene] = useState('');
    const [alimentacion, setAlimentacion] = useState('');
    const [inmunizaciones, setInmunizaciones] = useState('');
    const [actividadesDepor, setActividadesDepor] = useState('');
    return (
        <form action="" className="w-full p-4">
            <div className="border rounded-lg p-8 shadow-md bg-white">
                <h1 className="text-xl  font-sans mb-4">Antecedentes personales no Patologicos</h1>
                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="habitacion" className="block font-bold">
                            Habitacion:
                        </label>
                        <input type="text" name="habitacion" id="habitacion"
                            className="w-full border p-2"
                            value={habitacion}
                            onChange={(e) => setHabitacion(e.target.value)}
                        />
                    </div>

                    <div className="flex-1 mr-4">
                        <label htmlFor="habitadaPor" className="block font-bold">
                            Habitada por:
                        </label>
                        <input type="text" name="habitadaPor" id="habitadaPor"
                            className="w-full border p-2"
                            value={habitadaPor}
                            onChange={(e) => setHabitadaPor(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="noHabitaciones" className="block font-bold">
                            Numero de habitaciones:
                        </label>
                        <input type="text" name="noHabitaciones" id="noHabitaciones"
                            className="w-full border p-2"
                            value={noHabitacion}
                            onChange={(e) => setNoHabitacion(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="animalesEnCasa" className="block font-bold">
                            Animales en casa:
                        </label>
                        <input type="text" name="animalesEnCasa" id="animalesEnCasa"
                            className="w-full border p-2"
                            value={animalesEnCasa}
                            onChange={(e) => setAnimalesEnCasa(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="tabaquismo" className="block font-bold">Tabaquismo</label>
                        <div>
                            <label htmlFor="tabaquismo" className="mr-2">
                                <input type="radio" name="tabaquismoSi" id="tabaquismoSi"
                                    value="Si" checked={tabaquismo === 'Si'}
                                    onChange={(e) => setTabaquismo(e.target.value)}
                                />
                                Si
                            </label>
                            <label htmlFor="tabaquismo" className="mr-2">
                                <input type="radio" name="tabaquismoNo" id="tabaquismoNo"
                                    value="No" checked={tabaquismo === 'No'}
                                    onChange={(e) => setTabaquismo(e.target.value)}
                                />
                                No
                            </label>
                        </div>
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="noAños" className="block font-bold">
                            Nomuero de años
                        </label>
                        <input type="text" name="noAños" id="noAños"
                            className="w-full border p-2"
                            value={noAños}
                            onChange={(e) => setNoAños(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="cantidadPorDia" className="block font-bold">
                            Cantidad por dia:
                        </label>
                        <input type="text" name="cantidadPorDia" id="cantidadPorDia"
                            className="w-full border p-2"
                            value={cantidadPorDia}
                            onChange={(e) => setCantidadPorDia(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="alcoholismo" className="block font-bold">
                            Alcoholismo:
                        </label>
                        <input type="text" name="alcoholismo" id="alcoholismo"
                            className="w-full border p-2"
                            value={alcoholismo}
                            onChange={(e) => setAlcoholismo(e.target.value)}
                        />
                    </div>

                    <div className="flex-1 mr-4">
                        <label htmlFor="noAñosAlcohol" className="block font-bold">
                            No de años:
                        </label>
                        <input type="text" name="noAñosAlcohol" id="noAñosAlcohol"
                            className="w-full border p-2"
                            value={noAñosAlcohol}
                            onChange={(e) => setNoAñosAlcohol(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="noHabitaciones" className="block font-bold">
                            Frecuencia:
                        </label>
                        <input type="text" name="Frecuencia" id="Frecuencia"
                            className="w-full border p-2"
                            value={frecuencia}
                            onChange={(e) => setFrecuencia(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="Toxicomania" className="block font-bold">
                            Toxicomania:
                        </label>
                        <input type="text" name="Toxicomania" id="Toxicomania"
                            className="w-full border p-2"
                            value={toxicomania}
                            onChange={(e) => setToxicomania(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="Higiene" className="block font-bold">
                            Higiene:
                        </label>
                        <input type="text" name="Higiene" id="Higiene"
                            className="w-full border p-2"
                            value={higiene}
                            onChange={(e) => setHigiene(e.target.value)}
                        />
                    </div>

                    <div className="flex-1 mr-4">
                        <label htmlFor="alimentacion" className="block font-bold">
                            Alimentacion:
                        </label>
                        <input type="text" name="alimentacion" id="alimentacion"
                            className="w-full border p-2"
                            value={alimentacion}
                            onChange={(e) => setAlimentacion(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 mr-4">
                        <label htmlFor="Inmunizaciones" className="block font-bold">
                            Inmunizaciones:
                        </label>
                        <input type="text" name="Inmunizaciones" id="Inmunizaciones"
                            className="w-full border p-2"
                            value={inmunizaciones}
                            onChange={(e) => setInmunizaciones(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-betwen mb-4">
                    <div className="flex-1 mr-4">
                        <label htmlFor="actividadesDepor" className="block font-bold">
                            Actividaes deportivas:
                        </label>
                        <input type="text" name="actividadesDepor" id="actividadesDepor"
                            className="w-full border p-2"
                            value={actividadesDepor}
                            onChange={(e) => setActividadesDepor(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}
export default PersonalPatologico;