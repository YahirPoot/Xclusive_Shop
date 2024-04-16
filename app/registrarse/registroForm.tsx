'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { cliente } from '@/models/types';
import postregister from '../api/auth/register/register';
type Props = {}

const RegistroUsuario = (props: Props) => {
  const [nombre, setnombre] = useState('');
  const [apellido, setapellido] = useState('');
  const [correoElectronico, setcorreoElectronico] = useState('');
  const [nombreUsuario, setnombreUsuario] = useState('');
  const [direccion, setdireccion] = useState('');
  const [contraseña, setcontraseña] = useState('');
  const [telefono, settelefono] = useState('');
  const [tipoUsuario, settipoUsuario] = useState('cliente');
  const [idRol, setidRol] = useState(1);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData: cliente = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion, // Asegúrate de tener un estado para 'direccion'
        telefono: telefono,
        idUsuarioNavigation: {
          nombreUsuario: nombreUsuario,
          contraseña: contraseña,
          correoElectronico: correoElectronico,
          idRol: idRol,
        },
      };
      await postregister(userData);
      alert('Usuario registrado con éxito');
    } catch (error) {
      console.error('Error al registrar', error);
    }
  }

    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <form
          className="flex flex-col rounded-lg p-10 shadow-lg"
          onSubmit={handleFormSubmit}
        >
          <h1 className="mb-4 text-xl font-medium ">Registro</h1>
          <label htmlFor="" className="mb-2">
            Nombre
          </label>
          <input
            type="text"
            className="mb-4 w-[300px] rounded-lg border-[1px] border-gray-300 p-2  text-black focus:border-gray-600 focus:outline-none"
            id="nombre"
            value={nombre}
            placeholder="Inserte su nombre"
            onChange={(e) => setnombre(e.target.value)}
          />
          <label htmlFor="" className="mb-2">
            Apellido
          </label>
          <input
            type="text"
            className="mb-4 w-[300px] rounded-lg border-[1px] border-gray-300 p-2  text-black focus:border-gray-600 focus:outline-none"
            id="apellido"
            value={apellido}
            placeholder="Inserte su apellido"
            onChange={(e) => setapellido(e.target.value)}
          />
          <label htmlFor="" className="mb-2">
            Nombre de Usuario
          </label>
          <input
            type="text"
            className="mb-4 w-[300px] rounded-lg border-[1px] border-gray-300 p-2  text-black focus:border-gray-600 focus:outline-none"
            id="nombreUsuario"
            value={nombreUsuario}
            placeholder="Inserte su Nombre de Usuario"
            onChange={(e) => setnombreUsuario(e.target.value)}
          />
          <label htmlFor="" className="mb-2">
            Numero telefonico
          </label>
          <input
            type="text"
            className="mb-4 w-[300px] rounded-lg border-[1px] border-gray-300 p-2  text-black focus:border-gray-600 focus:outline-none"
            id="telefono"
            value={telefono}
            placeholder="Inserte su numero telefonico"
            onChange={(e) => settelefono(e.target.value)}
          />
          <label htmlFor="" className="mb-2">
            Email
          </label>
          <input
            type="text"
            className="mb-4 w-[300px] rounded-lg border-[1px] border-gray-300 p-2 text-black focus:border-gray-600 focus:outline-none"
            id="Correo Electronico"
            value={correoElectronico}
            placeholder="Correo electronico"
            onChange={(e) => setcorreoElectronico(e.target.value)}
          />
          <label htmlFor="" className="mb-2">
            Contraseña
          </label>
          <input
            type="password"
            className="mb-4 w-[300px] rounded-lg border-[1px] border-gray-300 p-2 text-black focus:border-gray-600 focus:outline-none"
            id="password"
            value={contraseña}
            placeholder="inserte su contraseña"
            onChange={(e) => setcontraseña(e.target.value)}
          />
          <Link href='/'>
          <button
            type="submit"
            className="mb-4 mt-2 border border-gray-300 bg-purple-600 p-2 text-white focus:border-gray-600 focus:outline-none"
          >
            Registrarse Ahora
          </button>
          </Link>
          <Link
            href="/signin"
            className="mt-5 text-center text-sm text-neutral-600"
          >
            Already have an Account?
          </Link>
          <Link href="/" className="mt-2 text-center">
            Home
          </Link>
        </form>
      </div>
    );
  };
export default RegistroUsuario;
