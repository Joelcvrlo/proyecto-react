
import { Route, Link, Routes, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductItemEdit(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((dataAPI) => {
        setProductData(dataAPI);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSave = () => {
    // En este ejemplo, se asume que tienes una API adecuada para actualizar los datos del producto.
    // Asegúrate de que la URL de la API y el método HTTP sean los correctos para tu backend.
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: productData.title,
        price: productData.price,
        description: productData.description
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Producto actualizado con éxito:', data);
        // Redirige al usuario de vuelta a la página anterior después de guardar los cambios.
        navigate(-1);
      })
      .catch((error) => {
        console.error('Error al actualizar el producto:', error);
        // Manejo de errores (opcional): puedes mostrar un mensaje de error al usuario si algo salió mal.
      });
  };

  return productData ? (
    <div className='justify-center object-center object-cover pt-6 max-w-2xl px-6 lg:px-8'>
      <label htmlFor='title' className='block text-sm font-medium leading-6 text-gray-900'>
        Titulo
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='text-gray-500 sm:text-sm'></span>
        </div>
        <input
          type='text'
          name='title'
          id='title'
          value={productData.title}
          onChange={handleInputChange}
          className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='Titulo'
        />
      </div>

      <label htmlFor='description' className='block text-sm font-medium leading-6 text-gray-900'>
        Descripción
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='text-gray-500 sm:text-sm'></span>
        </div>
        <input
          type='text'
          name='description'
          id='description'
          value={productData.description}
          onChange={handleInputChange}
          className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='Descripción'
        />
      </div>

      <label htmlFor='price' className='block text-sm font-medium leading-6 text-gray-900'>
        Price
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='text-gray-500 sm:text-sm'>$</span>
        </div>
        <input
          type='text'
          name='price'
          id='price'
          value={productData.price}
          onChange={handleInputChange}
          className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='0.00'
        />
      </div>

      {/* Buttons */}
      <div className='mt-4 space-x-4'>
        <button
          onClick={() => navigate(-1)}
          className='inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Volver
        </button>
        <button
          onClick={handleSave}
          className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Guardar
        </button>
      </div>
    </div>
  ) : null;
}
