import React from "react";
import alfa from "../../img/logoDobos.png";
const LogoAlfaparf = () =>{
return(
    <>
     <div className="container mx-auto p-10">
                        <div className="flex flex-wrap items-center p-5 ">
                            {/* Imagen de la empresa */}
                            <div className="w-full md:w-1/2">
                                <img
                                src={alfa}
                                    alt=""
                                    className="w-30 h-20 object-cover font-sans "
                                />
                            </div>
                            {/* Texto que identifica el tipo de formulario*/}
                            <div className="w-full md:w-1/2 p-11 text-center">
                                <h1 className="text-4x2 font-bold">
                                    Historia Clinica --- Servicio Medico
                                </h1>
                            </div>
                        </div>
                    </div>
    </>
)
}
export default LogoAlfaparf