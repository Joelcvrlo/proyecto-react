import {Route, Link, Routes, useParams, useNavigate} from 'react-router-dom';

import { React, useEffect, useState } from 'react';



export default function UserItem(props) {
    const { id } = useParams();
    const [ productData, setProductData ] = useState();
    const navigate = useNavigate();    

    useEffect(() => {

        fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
            .then(res => res.json())
            .then(dataAPI => {
                // window.localStorage.setItem(type, JSON.stringify(dataAPI));
                setProductData(dataAPI);
            });
    }, [id]);
    
      
  return (
    productData ? (
      <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:flex sm:px-6">
          {/* Left Column - Image */}
          <div className="sm:w-1/2 sm:pr-8">
            <div className="aspect-w-3 aspect-h-2 rounded overflow-hidden sm:rounded-lg">
              <img
                src={`https://avatars.dicebear.com/api/croodles/${Math.floor((Math.random() * 10000000) + 1)}.svg`}
                alt={productData.name}
                className="w-30 h-30 rounded-full overflow-hidden mx-auto"
                style={{ clipPath: 'circle()' }}
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="sm:w-1/2 mt-6 sm:mt-0 sm:px-4 pb-16 pt-10 sm:flex">
            
            {/* Left Sub-column */}
            <div className="sm:w-1/2">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productData.name}</h1>
              <p className="mt-4 text-base text-gray-500"><strong>Id: {productData.id}</strong></p>
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Email</h2>
                <p className="mt-4 text-sm text-gray-500">{productData.email}</p>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Role</h2>
                <p className="mt-4 text-sm text-gray-500">{productData.role}</p>
              </div>
            </div>

            {/* Right Sub-column */}
            <div className="sm:w-1/2">
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Password</h2>
                <p className="mt-4 text-sm text-gray-500">{productData.password}</p>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Fecha de creación</h2>
                <p className="mt-4 text-sm text-gray-500">{new Date(productData.creationAt).toLocaleString()}</p>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Fecha de modificación</h2>
                <p className="mt-4 text-sm text-gray-500">{new Date(productData.updatedAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="justify-center mx-auto max-w-2xl px-4 pb-16 pt-10 flex space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Volver
          </button>
          <button
            onClick={() => navigate('edit')}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Editar
          </button>
        </div>
      </div>
    </div>): <></>
  );
}
