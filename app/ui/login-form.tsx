import { lusitana } from '@/app/ui/fonts';
import { AtSymbolIcon, KeyIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat" >
      <form className="w-full max-w-sm space-y-6 bg-white shadow-md rounded-lg p-6">
        <h1 className={`${lusitana.className} text-2xl font-bold text-center mb-6`}>
          Inicia Sesión con Xclusive Shop
        </h1>
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-900 mb-1">Correo Electrónico</label>
          <div className="relative">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Introduce tu correo electrónico"
              required
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-none placeholder-gray-500"
            />
            <AtSymbolIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-xs font-medium text-gray-900 mb-1">Contraseña</label>
          <div className="relative">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Introduce tu contraseña"
              required
              minLength={6}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-none placeholder-gray-500"
            />
            <KeyIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div>
          <LoginButton />
        </div>
      </form>
    </div>
  );
}

function LoginButton() {
  return (
    <Link href="/Cotizar">
      <Button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700">
        Iniciar Sesión <ArrowRightIcon className="ml-auto h-5 w-5" />
      </Button>
    </Link>
  );
}
