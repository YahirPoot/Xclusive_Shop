import React, { useEffect, useState } from 'react';
import getColoresByIds from '../api/getColores';

const ColoresComponent = () => {
  const [colores, setColores] = useState<
    { idColor: number; nombreColor: string }[] | null
  >(null);
  const [colorSeleccionado, setColorSeleccionado] = useState<string | null>(null);

  useEffect(() => {
    const fetchColores = async () => {
      const data = await getColoresByIds([9, 10, 8]);
      setColores(data.flat());
    };

    fetchColores();
  }, []);

  const handleColorClick = (color: string) => {
    console.log('Color seleccionado:', color);
    setColorSeleccionado(color);
    // Aquí puedes agregar cualquier lógica adicional que desees ejecutar cuando se seleccione un color
  };

  return (
    <div>
      {colores ? (
        colores.map(
          (color: { idColor: number; nombreColor: string }, index: number) => (
            <div
              key={index}
              className={`relative m-1 h-[35px] w-[35px] border-[1px] border-neutral-400 cursor-pointer ${
                color.nombreColor === colorSeleccionado ? 'ring-2 ring-blue-500' : ''
              }`}
              style={{
                backgroundColor: color.nombreColor,
                borderRadius: '100%',
                display: 'inline-block',
                transition: 'transform 0.2s ease-in-out',
              }}
              onClick={() => handleColorClick(color.nombreColor)}
            ></div>
          ),
        )
      ) : (
        <p>Cargando colores...</p>
      )}
    </div>
  );
};

export default ColoresComponent;
