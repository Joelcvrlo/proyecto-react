import {Route, Link, Routes, useParams, useNavigate} from 'react-router-dom';

import { useEffect, useState } from 'react';

export default function ProductItem(props) {
    const { id } = useParams();
    const [ productData, setProductData ] = useState();
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
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
                src={productData?.images?.[0]}
                alt={productData.title}
                className="w-30 h-30 rounded-full overflow-hidden mx-auto"
                style={{ clipPath: 'circle()' }}
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="sm:w-1/2 mt-6 sm:mt-0 sm:px-4 pb-16 pt-10">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productData.title}</h1>
            <p className="mt-4 text-base text-gray-500"><strong>Id: {productData.id}</strong></p>
            <p className="mt-4 text-base text-gray-500">{productData.description}</p>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Price</h2>
              <p className="mt-4 text-sm text-gray-500">{productData.price}</p>
            </div>

            {/* Buttons */}
            <div className="flex mt-10 space-x-4 justify-center">
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
        </div>
      </div>
    </div>): <></>
  );
}
