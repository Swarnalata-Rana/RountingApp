// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Product from './Product';
import Login from './Login';
import Aboutus from './Aboutus';
import Nav from './Nav';
import Employee from './Employee';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <div>hello</div>
      {/* <Home/>
      <Product/>
      <Login/>
      <Aboutus/> */}   
      {/* <Employee/> */}
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={App}></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/aboutus' element={<Aboutus/>} ></Route>
        <Route path='/product' element={<Product/>} ></Route>
        <Route path='/employee' element={<Employee/>} ></Route>
      </Routes>
      </BrowserRouter>
      {/* </header> */}
    </div>
  );
}
export default App;



