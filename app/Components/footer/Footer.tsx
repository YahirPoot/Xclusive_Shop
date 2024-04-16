import Link from 'next/link';
import Container from '../container/Container';
import FooterList from './FooterList';

function Footer() {
  return (
    <footer className="mt-16 bg-slate-700 text-sm text-slate-200">
      <Container>
        <div className="flex flex-col justify-between pb-8 pt-16 md:flex-row">
          <FooterList>
            <h3>Categorias de Tienda</h3>
            <Link href="#">Gorras</Link>
            <Link href="#">Playeras</Link>
            <Link href="#">Tazas</Link>
            <Link href="#">Telefonos</Link>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
