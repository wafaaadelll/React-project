import { Route, Routes } from 'react-router-dom';
import About from './component/About';
import MyItems from './component/MyItems';
import Erors from './component/Erors';
import Home from './component/Home';
import MyFooter from './component/MyFooter';
import MyNav from './component/MyNav';
import ShowAlbums from './component/ShowAlbums';
import Cart from './component/cart';
import Register from './component/Register';
import Done from './Done';


function App() {
  return (
    <div className="App">
      <MyNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/MyItems' element={<MyItems />} />
        <Route path='/MyItems/:id' element={<ShowAlbums />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Done' element={<Done />} />
        <Route path='*' element={<Erors />} />
      </Routes>
      <MyFooter />
    </div>
  );
}

export default App;
