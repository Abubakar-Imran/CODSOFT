import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

export default function ForgetPassword() {
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [answer, setAnswer] = useState("")
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forget-password", { email, newPassword, answer })
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forget Password - NexGen"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className='title'>RESET PASSWORD</h1>
          <div className="mb-3">
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder='Enter your Email' required />
          </div>
          <div className="mb-3">
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} className="form-control" id="exampleInputAnswer1" placeholder='Enter your favourite sports' required />
          </div>
          <div className="mb-3">
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your New Password' required />
          </div>
          <button type="submit" className="btn btn-primary">RESET</button>
        </form>
      </div>
    </Layout>
  )
}
