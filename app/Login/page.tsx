import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Login from './login';
import Cotizar from '../Components/Cotizar';

export default function LoginPage() {
  return (
    <body className='w-screen h-screen relative' style={{ backgroundImage: 'url("/Taza1.jpg")' }}>
      {/* <main className="flex items-center justify-center md:h-screen" > */}
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <div className="">
            <div className="w-32 text-white md:w-36"></div>
          </div>
          <LoginForm />
          {/* <Login/> */}
        </div>
      {/* </main> */}
    </body>
  );
}
