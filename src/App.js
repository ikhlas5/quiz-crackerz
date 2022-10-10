import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './componetns/Home/Home';
import Tropics from './componetns/Topics/Tropics';

function App() {
  const router=createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
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
