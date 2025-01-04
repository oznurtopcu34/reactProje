import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Kayit from './pages/Kayit';
import Anasayfa from './pages/Anasayfa';
import Giris from './pages/Giris';
import Personel from './pages/Personel';
import NonFound from './pages/NonFound';
import Linkler from './component/Linkler';

function App() {
  return (
    <>
      <BrowserRouter>     
        <Linkler />    
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/Giris" element={<Giris />} />
          <Route path="/Kayit" element={<Kayit />} />
          <Route path="/Personel" element={<Personel />} />
          <Route path="*" element={<NonFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
