
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import { Body } from './Components/Body/Body';
import Cart from './Components/Cart/Cart';
import Icons from './Components/Icons/Icons';
import { Products } from './Components/Products/Products';
import Sample from './Components/Sample/Sample';



function App() {
  return (
    <>
      <Navbar/>
      <Body/>
      <Cart/>
      <Icons/>
      <Products/>
      <Sample/>
    </>
  )
}

export default App
