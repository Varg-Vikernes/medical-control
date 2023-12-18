import React, { useState } from "react";

export function Diagnostico() {

    const [mostrarOcultar , setMostrarOcultar] = useState(false);

    const toogleMO = () =>{
        setMostrarOcultar(!mostrarOcultar)
    }
    return (
        <>
        <button onClick={toogleMO} className="cta">
            <span><b>{mostrarOcultar ? "Ingrese los datos correctamente" : "Diagnosticos"}</b></span>
        </button>
        {
            mostrarOcultar && (
                <form action="" className="w-full p-2">
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">

                        <h1 className="block font-bold">XII.- DIAGNOSTICOS:   </h1>
                        <input type="text" name="" id=""
                            className="w-full border p-2"

                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">

                        <h1 className="block font-bold">XIII.-TRATAMIENTO:</h1>
                        <input type="text" name="" id=""
                            className="w-full border p-2"

                        />
                    </div>
                </div>
                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">

                        <h1 className="block font-bold">XIV.-COMENTARIOS:</h1>
                        <input type="text" name="" id=""
                            className="w-full border p-2"

                        />
                    </div>
                </div>

                <div className="flex justify-between mr-4">
                    <div className="flex-1 mr-4">
                        <p>NOMBRE Y FIRMA DEL MEDICO <br />
                        </p>
                        <hr />
                        <p>CED.PROF.
                        </p>
                        <hr />
                    </div>
                    <div className="flex-1 mr-4">
                        <p>Declaro que no padezco ni he padecido enfermedades que
                            las manifestadas y estoy enterado que seré baja definitiva
                            en la empresa  en caso de comprobarse lo contrario.
                            NOMBRE Y FIRMA DEL EXAMINADO
                        </p>
                        <hr />
                    </div>
                </div>
            </form>
            )
        }
        </>
    )
}