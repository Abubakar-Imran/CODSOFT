import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useAuth } from '../../context/auth'
import { toast } from 'react-hot-toast'
import { useCart } from '../../context/cart'

export default function Header() {
    const [auth, setAuth] = useAuth()
    const [cart] = useCart()

    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: "",
        });
        localStorage.removeItem("auth")
        toast.success("Logout Successfully")
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NexGen Homeware</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">HOME</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/category">CATEGORY</NavLink>
                        </li> */}
                        <div className="dropdown" style={{ padding: '8px', fontSize: '17px' }}>
                            <NavLink className="dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: '0', textDecoration: 'none', color: 'rgb(0 0 6 / 65%)' }}>
                                CATEGORY
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to='/lighting'>Lighting</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/climate'>Climate</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/sensors'>Sensors</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/wifi'>Wifi and Networking</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/security'>Security System</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/vaccum'>Vaccum</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/voice_assistants'>Voice Assistants</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/plugs'>Plugs and Outlet</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/entertainment'>Entertainment</NavLink></li>
                            </ul>
                        </div>

                        {
                            !auth.user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/register">REGISTER</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">LOGIN</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <div className="dropdown" style={{ padding: '8px', fontSize: '17px' }}>
                                        <NavLink className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: '0', textDecoration: 'none', color: 'rgb(0 0 6 / 65%)' }}>
                                            {auth?.user?.name.toUpperCase()}
                                        </NavLink>

                                        <ul className="dropdown-menu">
                                            <li><NavLink className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? `admin` : `user`}`}>Dashboard</NavLink></li>
                                            <li><NavLink onClick={handleLogout} className="dropdown-item" to="/login">LOGOUT</NavLink></li>
                                        </ul>
                                    </div>
                                </>
                            )
                        }
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">CART {cart?.length}<FaShoppingCart /></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
