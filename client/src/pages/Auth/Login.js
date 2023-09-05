import React, {useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/auth'


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/login", { email, password })
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                  ...auth,
                  user: res.data.user,
                  token: res.data.token,
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate("/");
              } else {
                toast.error(res.data.message);
              }
            } catch (error) {
              console.log(error);
              toast.error("Something went wrong");
            }
          };

    return (
        <Layout title="Login - NexGen">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                <h1 className='title'>LOGIN FORM</h1>
                    <div className="mb-3">
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter your Email' required />
                    </div>
                    <div className="mb-3">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' required />
                    </div>
                    <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={() => { navigate('/forget-password') }}>Forget Password</button>
                    </div>
                    <button type="submit" className="btn btn-primary">LOGIN</button>
                </form>
            </div>
        </Layout>
    )
}
