import './App.css';
import Navbar from './components/Navbar'
import Conversion from './components/conversion';
import Error from './components/Error.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter basename="/">
          <Routes>
            <Route exact path='/' element={<Conversion type="Decimal" />}></Route>
            <Route path='/binary' element={<Conversion type="Binary"/>}></Route>
            <Route path='/octal' element={<Conversion type="Octal"/>}></Route>
            <Route path='/hexa' element={<Conversion type="HexaDecimal"/>}></Route>
            <Route path='/*' element={<Error />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;