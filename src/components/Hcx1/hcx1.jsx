import React, { useState } from "react";
import Primario from "./DatosPrimarios/primario";
import Identificacion from "./FichaIdentificacion/identificacion";
import AntecedentesLaborales from "./AntecentesLaboral/antecedentesLabotales";
import PersonalPatologico from "./PersonalPatologico/antecedentePersonal";
import HeredoFamiliar from "./antecedentesHeredoFam/antecedentesHeredoF";
import Navbar from "../Navbar/Navbar";
import '../style/hcx1.component.css'
import alfaparf from '../img/logoDobos.png'

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
            ...datosIdenti,
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
            ...personalPato,
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
                <div className="flex formulario_hcx1">
                <div className="flex-1 flex flex-col ">
                    <div className="container mx-auto p-10">
                        <div className="flex flex-wrap items-center p-5 ">
                            {/* Imagen de la empresa */}
                            <div className="w-full md:w-1/2">
                            <img
                    src={alfaparf}
                    alt=""
                    className="w-30 h-10 object-cover font-sans "
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

                        {/* Aquí van los formularios */}
                        <div className="container-form bg-white">
                            {/* Logica del boton mostrar ocultar */}
                        <Primario onSubmit={handleActualizarDatosPrimarios} />
                        <Identificacion onSubmit={handleActualizarIdentidicacion} />
                        <AntecedentesLaborales onSubmit={handleActulizarAntecedentesLaborales} />
                        <PersonalPatologico onSubmit={hanldeActualizarPersonalPato} />
                        <HeredoFamiliar />
                        <button onClick={handleConsolidateData} className="button">Enviar datos por consola</button>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default Hcx1;
