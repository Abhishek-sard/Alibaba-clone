
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import { Body } from './Components/Body/Body';
import Cart from './Components/Cart/Cart';
import Icons from './Components/Icons/Icons';
import { Products } from './Components/Products/Products';
import Sample from './Components/Sample/Sample';
import Cart2 from './Components/Cart2/Cart2'
import Pointer from './Components/Pointer/Pointer';
import Text from './Components/Text/Text';




function App() {
  return (
    <>
      <Navbar/>
      <Body/>
      <Cart/>
      <Icons/>
      <Products/>
      <Sample/>
      <Cart2/>
      <Pointer/>
      <Text/>
    </>
  )
}

export default App
