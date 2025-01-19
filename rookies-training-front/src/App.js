import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HoonRegister from './components/Auth/hoonregister';
import HoonLogin from './components/Auth/hoonlogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HoonRegister" element={<HoonRegister />} />  {/* 로그인 페이지 */}
        <Route path="/" element={<HoonLogin />} />  {/* 회원가입 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;
