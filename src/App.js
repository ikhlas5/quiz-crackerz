import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './componetns/Home/Home';
import Tropics from './componetns/Topics/Tropics';
import Charts from './componetns/Charts/Charts';
import Blogs from './componetns/Blogs/Blogs';
import ErrorPage from './componetns/ErrorPage/ErrorPage';
import ProductDetails from './componetns/ProductDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';

function App() {
  const router=createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
          {
            path:'/',
            loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
            element:<Home></Home>
          },
          {
            path:'topics',
            loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
            element:<Tropics></Tropics>
          },
          {
            path:'charts',
            loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
            element:<Charts></Charts>
          },
          {
            path:'blogs',
            element:<Blogs></Blogs>
          },
          {
            path:'topic/:id',
            loader:async({params})=>fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`),
            element:<ProductDetails></ProductDetails>
          }
        ],
      }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
