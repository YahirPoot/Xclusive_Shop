const HomeBanner = () => {
  return (
    <div className="relative mb-8 bg-gradient-to-r from-sky-500 to-sky-700">
      <div className="mx-auto flex flex-col items-center justify-evenly gap-2 px-8 py-12 md:flex-row">
        <div className="mb-8 md:flex-row text-center">
          <h1 className="text-4xl md:text-center font-bold text-white mb-4">Ofertas Navideñas</h1>
          <p> Descubre los mejores regalos para el dia de las madres con increibles descuentos</p>
          <p>CONNSIGUE EL 50% DE DESCUENTO</p>
        </div>
        <div className="w-1/3 relative aspect-video">
            <img
             src="/banner.image.png"
            
                alt="Banner Image"
                className="object-contain" 
             />
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
