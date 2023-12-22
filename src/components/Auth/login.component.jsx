import React, { useState, } from "react";

export function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (userName === 'usuario' && password === '123456789') {
            alert("inicio de sesion exitoso")
        } else {
            alert("Usuario o contraseña incorrecta")
        }
    };
    return (
        <>
            <div className="fondo">
                <div className="flex justify-center items-center h-screen ">
                    <div className="border rounded-lg p-8 shadow-md bg-white">
                        <h2 className="text-2x1 font bold mb-4">
                            Iniciar sesión
                        </h2>
                        <input type="text"
                            placeholder="Usuario" value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full p-2 rounded border mb-4" />
                        <h2 className="text-2x1 font bold mb-4">
                            Contraseña
                        </h2>
                        <input type="password"
                            placeholder="Usuario" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 rounded border mb-4" />

                        <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer">
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}