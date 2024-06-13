import './App.css';
// import Product from './componets/product';

import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import RootLayout from './componets/RootLayout';
import Dashboard from './componets/Dashboard';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/e-cart' element = {<Dashboard/>}></Route> 
      <Route path='/cart' element = {< CartComponent />}></Route>

    </Route>
  ))
  return (
    <div className="App">
      {/* <Product /> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
