import axios, { AxiosProgressEvent } from 'axios';
import React, { useEffect, useState } from 'react';
import getColoresByIds from '../api/getColores';

const CotizacionProucto = () => {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState('');
  const [idProducto, setIdProducto] = useState(''); // Estado para almacenar IdProducto
  const [Talla, setTalla] = useState(''); // Estado para almacenar Talla
  const [colorSeleccionado, setColorSeleccionado] = useState<string | null>(null); // Estado para almacenar el color seleccionado

  const [colores, setColores] = useState<{nombreColor: string }[] | null>(null);

  const handleupload = async () => {
    if (!file) {
      setMsg('no file');
      return;
    }

    if (!colorSeleccionado) {
      setMsg('select color');
      return;
    }

    const formData = new FormData();
    
    formData.append('IdProducto', idProducto);
    formData.append('Talla', Talla);
    formData.append('Color', colorSeleccionado);
    formData.append('Imagenes', file);
    


    setMsg('uploading');
    setProgress((prevState) => {
      return { ...prevState, started: true };
    });
    axios
      .post(
        'http://www.xclusivedesigns.somee.com/api/Cotizacion/16/productos',
        formData,
        {
          onUploadProgress: (progressEvent: AxiosProgressEvent) => {
            if (progressEvent.total) {
              const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setProgress((prevState) => {
                return {
                  ...prevState,
                  pc: percentCompleted,
                };
              });
            } else {
              console.log('No se puede calcular el progreso porque total no está definido.');
            }
          },
          headers: {
            'custom-Header': 'value',
          },
        },
      )
      .then((res) => {
        setMsg('uploaded');
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log('Error de respuesta del servidor:', err.response.data);
          console.log('Código de estado HTTP:', err.response.status);
          console.log('Cabeceras de respuesta:', err.response.headers);
        } else if (err.request) {
          console.error('No se recibió respuesta del servidor:', err.request);
        } else {
          console.error('Error al configurar la solicitud:', err.message);
        }
      });
  };

//TALLAS.....................


//COLORES....................
  useEffect(() => {
    const fetchColores = async () => {
      const data = await getColoresByIds([9, 10, 8]);
      setColores(data.flat());
    };

    fetchColores();
  }, []);

  const handleColorClick = (nombreColor: string) => {
    console.log('color seleccionado:', nombreColor);
    setColorSeleccionado(nombreColor);
  }



  return (
    <div className="cot relative">
      <h1 className="text-2xl font-semibold">Cotizacion</h1>

      <input
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
        type="file"
      />

      <input
        placeholder="IdProducto"
        value={idProducto}
        onChange={(e) => setIdProducto(e.target.value)}
      />

      <input
        placeholder="Talla"
        value={Talla}
        onChange={(e) => setTalla(e.target.value)}
      />

      <div>
        {colores ? (
          colores.map(
            (color: {nombreColor: string }, index: number) => (
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

      <button onClick={handleupload} className="mt-4 bg-blue-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Cargar
      </button>

      {progress.started && (
        <div className="mt-4">
          <progress max="100" value={progress.pc} className="w-full"></progress>
          <span className="block mt-2 text-sm">Progreso: {progress.pc}%</span>
        </div>
      )}  


      {msg && <span>{msg}</span>}
    </div>
  );
};

export default CotizacionProucto;