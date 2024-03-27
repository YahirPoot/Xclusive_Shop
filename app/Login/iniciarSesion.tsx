import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import getlogin from '../api/auth/login/login';
type Props = {}

const loginUsuario = (props: Props) => {
    const [correoElectronico, setcorreoElectronico] = useState('');
    const [contraseña, setcontraseña] = useState('');

    const userLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const user = {
                correoElectronico: correoElectronico,
                contraseña: contraseña,
            }
            await getlogin (user);
            alert('Secion Iniciada con éxito');
        } catch (error) {
            console.error('Error al iniciar sesion', error);
        }
    }


    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <form className='p-10 rounded-lg shadow-lg flex flex-col bg-white'
            onSubmit={userLogin}
            >
                <h1 className='text-xl font-medium mb-4'>Iniciar Sesión</h1>
                <label htmlFor="" className='mb-2'>Correo</label>
                <input 
                type="text"
                className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
                id='correo'
                value={correoElectronico}
                placeholder='Correo electronico'
                onChange={(e) => setcorreoElectronico(e.target.value)}
                />
                <label htmlFor="" className='mb-2'>Contraseña</label>
                <input 
                type="password"
                className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
                id='password'
                value={contraseña}
                placeholder='Contraseña'
                onChange={(e) => setcontraseña(e.target.value)}
                />
                <button type='submit' className='p-2 border bg-purple-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600'>
                    Iniciar Sesión
                </button>
                <Link href='/registrarse' className='text-sm text-center mt-5 text-neutral-600'>No tengo una cuenta</Link>
                <Link href='/' className='text-center mt-2'>Home</Link>
            </form>
        </div>
        )
}


export default loginUsuario;