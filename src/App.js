import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Users from './components/Users';
import NotFound from './components/NotFound';
import UserDetail from "./components/UserDetail";
import Pokemon from "./components/Pokemon";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/users" element={<Users />} />
        <Route path="/detail" element={<UserDetail />} />
        <Route path="/pokemon" element={<Pokemon />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
