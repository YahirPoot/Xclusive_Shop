'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


type Props = {}

const Signinform = (props: Props) => {
    const router = useRouter()
    const [user, setUser] = useState({
        correoElectronico:'',
        contraseña:''
    })

    const Login = () => {
        try{
            signIn('credentials', {
                correoElectronico:user.correoElectronico,
                contraseña:user.contraseña,
                redirect:true,
                callbackUrl:'/'
            })
        }catch{
            console.log('Error while logging in')
        }
    }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <div className='p-10 rounded-lg shadow-lg flex flex-col bg-white'>
            <h1 className='text-xl font-medium mb-4'>Iniciar Sesión</h1>
            <label htmlFor="" className='mb-2'>Correo</label>
            <input 
            type="text"
            className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
            id='email'
            value={user.contraseña}
            placeholder='Correo electronico'
            onChange={(e) => setUser({...user, correoElectronico: e.target.value})}
             />
            <label htmlFor="" className='mb-2'>Contraseña</label>
            <input 
            type="password"
            className='p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black'
            id='password'
            value={user.contraseña}
            placeholder='Contraseña'
            onChange={(e) => setUser({...user, contraseña: e.target.value})}
             />
             <button onClick={Login} className='p-2 border bg-purple-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600'>
                Iniciar Sesión
             </button>
             <Link href='/registrarse' className='text-sm text-center mt-5 text-neutral-600'>No tengo una cuenta</Link>
             <Link href='/' className='text-center mt-2'>Home</Link>
        </div>
    </div>
  )
}

export default Signinform

function signIn(arg0: string, arg1: { correoElectronico: string; contraseña: string; redirect: boolean; callbackUrl: string }) {
    throw new Error('Function not implemented.')
}
