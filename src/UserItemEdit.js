
import { Route, Link, Routes, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function UserItemEdit(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [productData, setProductData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
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
    fetch(`https://api.escuelajs.co/api/v1/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: productData.email,
        password: productData.password,
        name: productData.name,
        role: productData.role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Usuario actualizado con éxito:', data);
        // Redirige al usuario de vuelta a la página anterior después de guardar los cambios.
        navigate(-1);
      })
      .catch((error) => {
        console.error('Error al actualizar el usuario:', error);
        // Manejo de errores (opcional): puedes mostrar un mensaje de error al usuario si algo salió mal.
      });
  };

  return productData ? (
    <div className='justify-center object-center object-cover pt-6 max-w-2xl px-6 lg:px-8'>
      
      <label htmlFor='title' className='block text-sm font-medium leading-6 text-gray-900'>
        Nombre
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='text-gray-500 sm:text-sm'></span>
        </div>
        <input
          type='text'
          name='name'
          id='name'
          value={productData.name}
          onChange={handleInputChange}
          className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='Nombre'
        />
      </div>

      <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
        Email
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='text-gray-500 sm:text-sm'></span>
        </div>
        <input
          type='text'
          name='email'
          id='email'
          value={productData.email}
          onChange={handleInputChange}
          className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='Email'
        />
      </div>

      <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
        Contaseña
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='text-gray-500 sm:text-sm'></span>
        </div>
        <input
          type='password'
          name='password'
          id='password'
          value={productData.password}
          onChange={handleInputChange}
          className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='Contraseña'
          minLength="4"

        />
      </div>
      

      <label htmlFor='role' className='block text-sm font-medium leading-6 text-gray-900'>
        Rol
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='text-gray-500 sm:text-sm'></span>
        </div>

        <select
                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                id="role"
                name="role"
          onChange={handleInputChange}
                required
                value={productData.role}
                
                defaultValue="customer"
                >
                <option value=""></option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
              </select>
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
