'use client';
import Image from "next/image";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import loginApi from "./loginApi";


const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const credentials = {
            correoElectronico: email,
            contraseña: password
        };

        if(!email || !password) {
            return alert('Por favor, rellene todos los campos');
        }
        try {
            const tokens = await loginApi(credentials);
            if(!tokens) {
                return alert('Ha ocurrido un error durante el inicio de sesión');
            }
            Cookies.set('tokens', JSON.stringify(tokens));
                const cookie = Cookies.get('tokens');
                // console.log(Cookie: ${cookie});
                // if (typeof window !== 'undefined') {
                //     localStorage.setItem('tokens', JSON.stringify(tokens));
                //     console.log(tokens);
                // }
                if (tokens) {
                    router.push('/');
                }
        } catch (error) {
            console.error(error);
            alert('Correo electronico o contraseña incorrectos')
        }
    }

    
    return (
        <main className="flex min-h-screen items-center w-full space-x-32">
            <div className="w-1/2 flex flex-col justify-center items-center">
                <Image
                src="/icon.png"
                alt="Student Hive"
                width={200}
                height={200}
                ></Image>
                <h1 className="text-4xl font-bold text-amber-600 p-6">StudentHive</h1>
            </div>
            <div className="flex flex-col p-6 ">
                <form action="" className="bg-slate-700 shadow-md rounded px-8 pt-6 pb-8 mb-4"  onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="mb-6 py-4">
                        <h1 className="text-white text-2xl font-bold">Bienvenido de nuevo</h1>
                    </div>
                    <div className="flex items-center justify-between">
                        {/* <Link href="/dashboard"> */}
                            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            {/* // onClick={} */}
                                Iniciar sesion
                            </button>
                        {/* </Link> */}
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Login;