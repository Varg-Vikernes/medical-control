import React, { useState } from "react";
import Primario from "./DatosPrimarios/primario";
import Identificacion from "./FichaIdentificacion/identificacion";
import AntecedentesLaborales from "./AntecentesLaboral/antecedentesLabotales";
import PersonalPatologico from "./PersonalPatologico/antecedentePersonal";
import HeredoFamiliar from "./antecedentesHeredoFam/antecedentesHeredoF";
import Navbar from "../Navbar/Navbar";

const Hcx1 = () => {
    //manejo de estados de los campos 
    const [datosFormulario, setDatosformulario] = useState({ Primario: {} });
    const [datosIdenti, setDatosIdenti] = useState({ Identificacion: {} });
    const [personalPato, setDatosPersonalPato] = useState({ PersonalPatologico: {} })
    //Obtenemos los datos 
    const handleActualizarDatosPrimarios = (DatosPrimarios) => {
        setDatosformulario({
            ...datosFormulario,
            Primario: DatosPrimarios
        })
    }
    const handleActualizarIdentidicacion = (datosIdentificacion) => {
        setDatosIdenti({
            datosIdenti,
            Identificacion: datosIdentificacion
        })
    }
    const handleActulizarAntecedentesLaborales = (datosAntecedentesLaborales) => {
        setDatosformulario({
            ...datosFormulario,
            AntecedentesLaborales: datosAntecedentesLaborales
        })
    }
    const hanldeActualizarPersonalPato = (datosPersonalPatologico) => {
        setDatosPersonalPato({
            personalPato,
            PersonalPatologico: datosPersonalPatologico
        })
    }
    //Mandamos los datos por consola
    const handleConsolidateData = () => {
        console.log('datos por consola', {
            datosFormulario: datosFormulario.Primario
        });
        console.log('datos de identificacion', {
            datosIdenti: datosIdenti.Identificacion
        })
        console.log('Antecedentes Laborales datos', {
            datosFormulario: datosFormulario.AntecedentesLaborales
        })
        console.log('Personal Patologico', {
            personalPato: personalPato.PersonalPatologico
        })
    }
    return (
        <>

            <Navbar />
            <div className="formulariosFondo">
                <div className="flex">
                    <div className="flex-1 flex flex-col ">
                        <div className="container mx-auto">
                            <div className="border rounded-lg shadow-md Presentacion">
                                <div className="flex flex-wrap items-center p-10 mr-10">
                                    {/* Imagen de la empresa */}
                                    <div className="w-full md:w-1/2">
                                        <img
                                            src="https://th.bing.com/th/id/R.0bb24fc69f3eadf890bc973595958d98?rik=4n7nydXfJTfMxw&pid=ImgRaw&r=0"
                                            alt=""
                                            className="w-60 h-24 object-cover font-sans "
                                        />
                                    </div>
                                    {/* Texto que identifica el tipo de formulario*/}

                                    <div className="w-full md:w-1/2 text-center">
                                        <h1 className="text-4x2 font-bold">
                                            Historia Clinica --- Servicio Medico
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Aquí van los formularios */}
                        <Primario onSubmit={handleActualizarDatosPrimarios} />
                        <Identificacion onSubmit={handleActualizarIdentidicacion} />
                        <AntecedentesLaborales onSubmit={handleActulizarAntecedentesLaborales} />
                        <PersonalPatologico onSubmit={hanldeActualizarPersonalPato} />
                        <HeredoFamiliar />
                        <button onClick={handleConsolidateData} className="Button-EviarDatos">Enviar datos por consola</button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Hcx1;
