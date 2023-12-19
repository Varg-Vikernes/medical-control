import React, { useState } from "react";

const HeredoFamiliar = () => {

    const [mostrarOcultar, setMostrarOcultar] = useState(false)

    const toogleMO = () => {
        setMostrarOcultar(!mostrarOcultar)
    }

    return (
        <>
            <button onClick={toogleMO} className="cta">
                <span><b>{mostrarOcultar ? "Introduzca los datos" : "Antecedentes Heredo-Familiares"}</b></span>
            </button>
            {
                mostrarOcultar && (
                    <form action="" className="w-full p-4">
                        <div className="container Form-AntecedentesHeredo">
                            <div className="border rounded-lg p-8 shadow-md  ">
                         <div className="seven">
                            <h1>Antecedentes heredo Familiares</h1>
                         </div>
                                <table className="table-auto border     ">
                                    <thead>
                                        <tr>
                                            <th className="border p-2 w-20 text-center">------------</th>
                                            <th className="border p-2 w-60 text-center">Padre</th>
                                            <th className="border p-2 w-60 text-center">Madre</th>
                                            <th className="border p-2 w-60 text-center">Hermano</th>
                                            <th className="border p-2 w-60 text-center">Hijo</th>
                                            <th className="border p-2 w-60 text-center">Otros</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">asmatico</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-26"
                                                />
                                                <label for="_checkbox-26">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-27"
                                                />
                                                <label for="_checkbox-27">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-28"
                                                />
                                                <label for="_checkbox-28">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-29"
                                                />
                                                <label for="_checkbox-29">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-30"
                                                />
                                                <label for="_checkbox-30">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Diabetico</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-31"
                                                />
                                                <label for="_checkbox-31">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-32"
                                                />
                                                <label for="_checkbox-32">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-33"
                                                />
                                                <label for="_checkbox-33">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-34"
                                                />
                                                <label for="_checkbox-34">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-35"
                                                />
                                                <label for="_checkbox-35">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Psiquiatricos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-36"
                                                />
                                                <label for="_checkbox-36">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-37"
                                                />
                                                <label for="_checkbox-37">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-38"
                                                />
                                                <label for="_checkbox-38">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-39"
                                                />
                                                <label for="_checkbox-39">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-40"
                                                />
                                                <label for="_checkbox-40">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Epileptico</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-41"
                                                />
                                                <label for="_checkbox-41">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-42"
                                                />
                                                <label for="_checkbox-42">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-43"
                                                />
                                                <label for="_checkbox-43">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-44"
                                                />
                                                <label for="_checkbox-44">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-45"
                                                />
                                                <label for="_checkbox-45">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Neoplasicos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-46"
                                                />
                                                <label for="_checkbox-46">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-47"
                                                />
                                                <label for="_checkbox-47">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-48"
                                                />
                                                <label for="_checkbox-48">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-49"
                                                />
                                                <label for="_checkbox-49">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-50"
                                                />
                                                <label for="_checkbox-50">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Artriticos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-51"
                                                />
                                                <label for="_checkbox-51">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-52"
                                                />
                                                <label for="_checkbox-52">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-53"
                                                />
                                                <label for="_checkbox-53">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-54"
                                                />
                                                <label for="_checkbox-54">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-55"
                                                />
                                                <label for="_checkbox-55">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Obesidad</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-56"
                                                />
                                                <label for="_checkbox-56">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-57"
                                                />
                                                <label for="_checkbox-57">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-58"
                                                />
                                                <label for="_checkbox-58">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-59"
                                                />
                                                <label for="_checkbox-59">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-60"
                                                />
                                                <label for="_checkbox-60">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">CardioVasculares</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-61"
                                                />
                                                <label for="_checkbox-61">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-62"
                                                />
                                                <label for="_checkbox-62">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-63"
                                                />
                                                <label for="_checkbox-63">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-64"
                                                />
                                                <label for="_checkbox-64">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-65"
                                                />
                                                <label for="_checkbox-65">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Hipertencivos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-66"
                                                />
                                                <label for="_checkbox-66">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-67"
                                                />
                                                <label for="_checkbox-67">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-68"
                                                />
                                                <label for="_checkbox-68">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-69"
                                                />
                                                <label for="_checkbox-69">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-70"
                                                />
                                                <label for="_checkbox-70">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Congenitos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-71"
                                                />
                                                <label for="_checkbox-71">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-72"
                                                />
                                                <label for="_checkbox-72">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-73"
                                                />
                                                <label for="_checkbox-73">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-74"
                                                />
                                                <label for="_checkbox-74">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-75"
                                                />
                                                <label for="_checkbox-75">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border p-2 w-40 text-center">Hermatologicos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-76"
                                                />
                                                <label for="_checkbox-76">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-77"
                                                />
                                                <label for="_checkbox-77">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-78"
                                                />
                                                <label for="_checkbox-78">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-79"
                                                />
                                                <label for="_checkbox-79">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-80"
                                                />
                                                <label for="_checkbox-80">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Audiologicos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-81"
                                                />
                                                <label for="_checkbox-81">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-82"
                                                />
                                                <label for="_checkbox-82">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-83"
                                                />
                                                <label for="_checkbox-83">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-84"
                                                />
                                                <label for="_checkbox-84">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-85"
                                                />
                                                <label for="_checkbox-85">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Tuberculosos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-86"
                                                />
                                                <label for="_checkbox-86">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-87"
                                                />
                                                <label for="_checkbox-87">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-88"
                                                />
                                                <label for="_checkbox-88">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-89"
                                                />
                                                <label for="_checkbox-89">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-90"
                                                />
                                                <label for="_checkbox-90">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Tuberculosos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-91"
                                                />
                                                <label for="_checkbox-91">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-92"
                                                />
                                                <label for="_checkbox-92">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-93"
                                                />
                                                <label for="_checkbox-93">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-94"
                                                />
                                                <label for="_checkbox-94">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-95"
                                                />
                                                <label for="_checkbox-95">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Sifiliticos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-96"
                                                />
                                                <label for="_checkbox-96">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-97"
                                                />
                                                <label for="_checkbox-97">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-98"
                                                />
                                                <label for="_checkbox-98">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-99"
                                                />
                                                <label for="_checkbox-99">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-100"
                                                />
                                                <label for="_checkbox-100">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Ulcerosos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-101"
                                                />
                                                <label for="_checkbox-101">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-102"
                                                />
                                                <label for="_checkbox-102">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-103"
                                                />
                                                <label for="_checkbox-103">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-104"
                                                />
                                                <label for="_checkbox-104">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-105"
                                                />
                                                <label for="_checkbox-105">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Litiasicos</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-106"
                                                />
                                                <label for="_checkbox-106">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-107"
                                                />
                                                <label for="_checkbox-107">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-108"
                                                />
                                                <label for="_checkbox-108">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-109"
                                                />
                                                <label for="_checkbox-109">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-110"
                                                />
                                                <label for="_checkbox-110">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border p-2 w-40 text-center">Otros</td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-111"
                                                />
                                                <label for="_checkbox-111">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-112"
                                                />
                                                <label for="_checkbox-112">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-113"
                                                />
                                                <label for="_checkbox-113">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-114"
                                                />
                                                <label for="_checkbox-114">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                            <td className="border p-2 w-40 text-center checkbox-wrapper">
                                                <input
                                                    type="checkbox" id="_checkbox-115"
                                                />
                                                <label for="_checkbox-115">
                                                    <div class="tick_mark"></div>
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />

                            <div className="buton">
                                <button type="submit" className="button">Enviar</button>
                            </div>
                            </div>
                        </div>
                    </form>
                )
            }
        </>
    );
}

export default HeredoFamiliar;