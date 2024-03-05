import Link from 'next/link';
import Container from '../Container';
import FooterList from './FooterList';


function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
          <FooterList>
            <h3>Categorias de Tienda</h3>
            <Link href='#'>Gorras</Link>
            <Link href='#'>Playeras</Link>
            <Link href='#'>Tazas</Link>
            <Link href='#'>Telefonos</Link>

          </FooterList>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
