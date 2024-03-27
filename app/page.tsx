import Image from 'next/image';
import Navbar from './Components/navbar';
import Container from './Components/container/Container';

export default async function Home() {
  // const user = await getCurrentUser()
  // console.log(user)
  return (
    <div className="mx-auto px-5">
      <Navbar />
      <Container />
    </div>
  );
}
