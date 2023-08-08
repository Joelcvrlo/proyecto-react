import { HashRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Table from './Table';
import Home from "./Home";
import ProductItem from "./ProductItem";
import ProductItemEdit from "./ProductItemEdit";
import UserItem from "./UserItem";
import UserItemEdit from "./UserItemEdit";
import FormCreate from "./FormCreate"

const basename = '/proyecto-react'; 

function App() {
  return (
    <>
      <Header></Header>
      <HashRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/products/create" element=
              {
                <FormCreate
                type="/products"
                />
              }
          />
          <Route path="/users/create" element=
              {
                <FormCreate
                type="/users"
                />
              }
          />
          <Route path="products" element=
            {
              <Table
                type="/products"
                tableHeader={['id', 'images', 'title', 'price', 'updatedAt']}
                urlAPI="https://api.escuelajs.co/api/v1/products"
              />
            }
          />

          <Route path="/products/:id" element=
            {
              <ProductItem />
            }
          />

          <Route path="/products/:id/edit" element=
            {
              <ProductItemEdit />
            }
          />

          <Route path="users" element=
            {
              <Table
                type="/users"
                tableHeader={['id', 'avatar', 'name', 'email', 'role',"updatedAt"]}
                urlAPI="https://api.escuelajs.co/api/v1/users"
              />
            } 
          />
          <Route path="/users/:id" element=
            {
              <UserItem />
            }
          />

          <Route path="/users/:id/edit" element=
            {
              <UserItemEdit />
            }
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
