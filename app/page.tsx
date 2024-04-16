import Image from 'next/image';
import Navbar from './Components/navbar';
import Container from './Components/container/Container';
import Hero from './Components/Hero/page';
import HomeCotizar from './Cotizar/MoodCotizar/homeCotizar';
import Catalogo from './Components/Catalogo/Catalogo';

export default async function Home() {
  // const user = await getCurrentUser()
  // console.log(user)
  return (
    <div className="mx-auto px-5">
      <Navbar />
      <HomeCotizar />
      {/* <Hero /> */}
      <Container />
    </div>
  );
}
