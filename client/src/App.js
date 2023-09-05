import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import ForgetPassword from './pages/Auth/ForgetPassword';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Category from './components/Category';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>

        <Route path='/dashboard' element={<PrivateRoute/>}>
        <Route path='user' element={<Dashboard/>}/>
        </Route>
        <Route path='/dashboard' element={<AdminRoute/>}>
          <Route path='admin' element={<AdminDashboard/>}/>
        </Route>

        <Route path='/voice_assistant' element={<Category key="voice_assistant" category={"voice_assistant"}/>}/>
        <Route path='/lighting' element={<Category key="lighting" category={"lighting"}/>}/>
        <Route path='/climate' element={<Category key="climate" category={"climate"}/>}/>
        <Route path='/entertainment' element={<Category key="entertainment" category={"entertainment"}/>}/>
        <Route path='/sensors' element={<Category key="sensors" category={"sensors"}/>}/>
        <Route path='/wifi' element={<Category key="wifi" category={"wifi"}/>}/>
        <Route path='/security' element={<Category key="security" category={"security"}/>}/>
        <Route path='/vaccum' element={<Category key="vaccum" category={"vaccum"}/>}/>
        <Route path='/plugs' element={<Category key="plug" category={"plug"}/>}/>



        <Route path='/register' element={<Register/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
