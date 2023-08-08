import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FormCreate({ type }) {
  const initialFormData =
    type === "/users"
      ? { name: "", email: "", role: "", password:""}
      : { title: "", price: "", images: [], description: ""};
  const [formData, setFormData] = useState(initialFormData);
  const [productoCreado, setProductoCreado] = useState(null);
  const [usuarioCreado, setUsuarioCreado] = useState(null);


  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataApi = type === '/users' ? {
      "email": formData.email,
      "password": formData.password,
      "name": formData.name,
      "role": formData.role,
      "avatar": "https://picsum.photos/640/640?r=5702"
    }
    : 
    {
      "title": formData.title,
      "price": formData.price,
      "description": formData.description,
      "images": [
        "https://picsum.photos/640/640?r=4017",
        "https://picsum.photos/640/640?r=3492",
        "https://picsum.photos/640/640?r=8958"
      ],
      "categoryId":2
    }
    console.log(dataApi)

    fetch(`https://api.escuelajs.co/api/v1${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataApi),
    })
      .then((response) => response.json())
      .then((data) => {
        if (type == '/products'){
          setProductoCreado(data.id)
        }else{
          setUsuarioCreado(data.id)
        }
      });

    // Luego de enviar los datos, puedes limpiar el formulario si es necesario:
    setFormData(initialFormData);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {type === "/users" ? (
          <>
            <div className="justify-center object-center object-cover pt-6 max-w-2xl px-6 lg:px-8">
            {usuarioCreado && (<label>Usuario creado:<Link to={`/users/${usuarioCreado}`}>{usuarioCreado}</Link></label>)}

              <div>
                <label htmlFor="name">Name</label>
                <input
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                  value={formData.name}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                  value={formData.email}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  required
                  minLength="4"
                  value={formData.password}
                />
              </div>
              <div>
                <label htmlFor="role">Role</label>
                 <select
                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="role"
                  name="role"
                  onChange={handleChange}
                  required
                  value={formData.role}
                
                defaultValue="customer"
                >
                <option value=""></option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
              </select>
              </div>
              <div className="my-5">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Add {type === "/users" ? "User" : "Product"}
                </button>
              </div>
            </div>
          </>
          ) : (
            <>
              <div className="justify-center object-center object-cover pt-6 max-w-2xl px-6 lg:px-8">
                {productoCreado && (<label>Producto creado:<Link to={`/products/${productoCreado}`}>{productoCreado}</Link></label>)}
                <div>
                  <label htmlFor="title">Title</label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleChange}
                    required
                    value={formData.title}
                  />
                </div>
                <div>
                  <label htmlFor="price">Price</label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="number"
                    id="price"
                    name="price"
                    onChange={handleChange}
                    required
                    value={formData.price}
                  />
                </div>
                <div>
                  <label htmlFor="description">Descripción</label>
                  <input
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    id="description"
                    name="description"
                    onChange={handleChange}
                    required
                    value={formData.description}
                  />
                </div>
                <div className="my-5">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Add {type === "/users" ? "User" : "Product"}
                  </button>
                </div>
                
              </div>
            </>
          )
        }
      </form>
    </div>
  );
}
